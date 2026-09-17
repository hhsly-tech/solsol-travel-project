/**
 * 솔솔부부 여행 프로젝트 공유 저장소
 *
 * Apps Script 웹 앱으로 배포하세요.
 * - 실행 사용자: 나
 * - 액세스 권한: 링크가 있는 모든 사용자
 */
const APP_CONFIG = {
  dataFileName: "solsol-travel-data.json",
  attachmentFolderName: "solsol-travel-attachments",
  maxAttachmentBytes: 8 * 1024 * 1024
};

function doGet(event) {
  const params = event && event.parameter ? event.parameter : {};
  let result;

  try {
    if (params.action === "health") {
      result = { ok: true, service: "solsol-travel", time: new Date().toISOString() };
    } else {
      result = { ok: true, trips: readTrips_() };
    }
  } catch (error) {
    result = { ok: false, error: error.message || String(error) };
  }

  return output_(result, params.callback);
}

function doPost(event) {
  let result;

  try {
    const body = JSON.parse((event && event.postData && event.postData.contents) || "{}");

    if (body.action !== "save" || !Array.isArray(body.trips)) {
      throw new Error("지원하지 않는 요청입니다.");
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(30000);
    try {
      const trips = processAttachments_(body.trips);
      writeTrips_(trips);
      result = { ok: true, savedAt: new Date().toISOString() };
    } finally {
      lock.releaseLock();
    }
  } catch (error) {
    result = { ok: false, error: error.message || String(error) };
  }

  return output_(result, "");
}

function output_(payload, callback) {
  const json = JSON.stringify(payload);
  if (callback && /^[A-Za-z_$][0-9A-Za-z_$]*$/.test(callback)) {
    return ContentService
      .createTextOutput(callback + "(" + json + ");")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService
    .createTextOutput(json)
    .setMimeType(ContentService.MimeType.JSON);
}

function readTrips_() {
  const file = getDataFile_();
  const text = file.getBlob().getDataAsString("UTF-8").trim();
  if (!text) return [];

  const parsed = JSON.parse(text);
  return Array.isArray(parsed) ? parsed : [];
}

function writeTrips_(trips) {
  getDataFile_().setContent(JSON.stringify(trips));
}

function getDataFile_() {
  const properties = PropertiesService.getScriptProperties();
  const savedId = properties.getProperty("DATA_FILE_ID");

  if (savedId) {
    try {
      return DriveApp.getFileById(savedId);
    } catch (error) {
      properties.deleteProperty("DATA_FILE_ID");
    }
  }

  const existingFiles = DriveApp.getFilesByName(APP_CONFIG.dataFileName);
  if (existingFiles.hasNext()) {
    const file = existingFiles.next();
    properties.setProperty("DATA_FILE_ID", file.getId());
    return file;
  }

  const file = DriveApp.createFile(APP_CONFIG.dataFileName, "[]", MimeType.PLAIN_TEXT);
  properties.setProperty("DATA_FILE_ID", file.getId());
  return file;
}

function getAttachmentFolder_() {
  const properties = PropertiesService.getScriptProperties();
  const savedId = properties.getProperty("ATTACHMENT_FOLDER_ID");

  if (savedId) {
    try {
      return DriveApp.getFolderById(savedId);
    } catch (error) {
      properties.deleteProperty("ATTACHMENT_FOLDER_ID");
    }
  }

  const existingFolders = DriveApp.getFoldersByName(APP_CONFIG.attachmentFolderName);
  if (existingFolders.hasNext()) {
    const folder = existingFolders.next();
    properties.setProperty("ATTACHMENT_FOLDER_ID", folder.getId());
    return folder;
  }

  const folder = DriveApp.createFolder(APP_CONFIG.attachmentFolderName);
  properties.setProperty("ATTACHMENT_FOLDER_ID", folder.getId());
  return folder;
}

function processAttachments_(value) {
  if (Array.isArray(value)) return value.map(processAttachments_);
  if (!value || typeof value !== "object") return value;

  const result = {};
  Object.keys(value).forEach(function(key) {
    const item = value[key];
    if (key === "attachment" && item && item.kind === "local" && item.data) {
      result[key] = saveAttachment_(item);
    } else {
      result[key] = processAttachments_(item);
    }
  });
  return result;
}

function saveAttachment_(attachment) {
  const match = String(attachment.data || "").match(/^data:([^;,]+)?(;base64)?,([\s\S]*)$/i);
  if (!match || !match[2]) throw new Error("첨부 파일 형식을 읽을 수 없습니다.");

  const bytes = Utilities.base64Decode(match[3]);
  if (bytes.length > APP_CONFIG.maxAttachmentBytes) {
    throw new Error("첨부 파일은 8MB 이하만 저장할 수 있습니다.");
  }

  const name = String(attachment.name || "attachment").replace(/[\\/:*?"<>|]/g, "_");
  const mimeType = String(attachment.type || match[1] || MimeType.PLAIN_TEXT);
  const blob = Utilities.newBlob(bytes, mimeType, name);
  const file = getAttachmentFolder_().createFile(blob);

  try {
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  } catch (error) {
    // 조직 정책으로 링크 공유가 막혀도 여행 데이터 자체는 저장합니다.
  }

  return {
    kind: "drive",
    name: file.getName(),
    type: file.getMimeType(),
    fileId: file.getId(),
    url: "https://drive.google.com/uc?export=download&id=" + file.getId()
  };
}
