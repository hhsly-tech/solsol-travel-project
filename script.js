/* ==================================================
   솔솔부부 여행프로젝트 · 여행 데이터
   새 여행은 웹의 "새 여행 만들기" 버튼으로 추가할 수 있습니다.
   기본 데이터를 코드로 넣고 싶다면 initialTripCollection에 같은 형식의 객체를 추가하세요.
   개인정보, 예약번호, 전화번호, QR 코드 등은 이 파일에 넣지 않습니다.
   ================================================== */

const initialTripCollection = [
  {
    id: "fukuoka-yufuin-2026",
    archiveNo: "01",
    title: "2026 FUKUOKA · YUFUIN",
    shortTitle: "FUKUOKA · YUFUIN",
    heroYear: "2026",
    heroDestinationA: "FUKUOKA",
    heroDestinationB: "YUFUIN",
    subtitle: "후쿠오카 · 유후인 3박 4일",
    dateLabel: "2026.09.18 — 09.21",
    dateRange: "2026.09.18 FRI — 2026.09.21 MON",
    startDate: "2026-09-18",
    endDate: "2026-09-21",
    countryCode: "JP",
    countryName: "일본",
    countryFlag: "🇯🇵",
    destination: "후쿠오카 · 유후인",
    routeFlow: [
      { day: "금", city: "후쿠오카", detail: "나카스" },
      { day: "토", city: "유후인", detail: "료칸" },
      { day: "일", city: "후쿠오카", detail: "나카스" },
      { day: "월", city: "귀국", detail: "ICN" }
    ],
    categories: [
      { key: "food", icon: "🍴", label: "FOOD" },
      { key: "bus", icon: "🚌", label: "BUS" },
      { key: "flight", icon: "✈", label: "FLIGHT" },
      { key: "hotel", icon: "⌂", label: "HOTEL" },
      { key: "cafe", icon: "☕", label: "CAFE" },
      { key: "shopping", icon: "▣", label: "SHOPPING" },
      { key: "place", icon: "•", label: "PLACE" }
    ],
    summary: {
      flights: [
        { label: "가는 날 · 09.18 금", title: "인천 → 후쿠오카", airline: "Asiana Airlines OZ134", fromCode: "ICN", fromTime: "13:55", fromPlace: "인천공항 T2", toCode: "FUK", toTime: "15:25", toPlace: "후쿠오카공항" },
        { label: "오는 날 · 09.21 월", title: "후쿠오카 → 인천", airline: "Asiana Airlines OZ133", fromCode: "FUK", fromTime: "16:25", fromPlace: "후쿠오카공항", toCode: "ICN", toTime: "18:05", toPlace: "인천공항 T2" }
      ],
      stays: [
        { title: "THE LIVELY FUKUOKA HAKATA", region: "나카스", dates: "숙박 · 9/18 금 — 9/20 일", status: "confirmed", note: "" },
        { title: "유후인 료칸", region: "료칸 예정 · 석식 가이세키", dates: "숙박 · 9/19 토", status: "tbd", note: "다음 날 조식 포함 플랜 예정" }
      ]
    },
    days: [
      {
        id: "day-1",
        day: "DAY 1",
        date: "2026.09.18 FRI",
        shortDate: "9/18",
        weekday: "금",
        location: "후쿠오카",
        locationDetail: "나카스 · 텐진",
        events: [
          { time: "13:55", type: "flight", title: "인천 출발", place: "Asiana Airlines OZ134 · 인천공항 제2터미널", note: "ICN 인천공항 T2 → FUK 후쿠오카공항", status: "confirmed", movement: true },
          { time: "15:25", type: "flight", title: "후쿠오카공항 도착", place: "FUK 후쿠오카공항", status: "confirmed", movement: true },
          { time: "약 16:30~17:00", type: "hotel", title: "호텔 이동", place: "THE LIVELY FUKUOKA HAKATA", note: "호텔 도착 후 체크인 및 짐 보관", status: "planned", movement: true, mapUrl: "" },
          { time: "저녁 전", type: "place", title: "나카스 / 텐진 주변 구경", place: "후쿠오카", note: "구체적인 관광지는 아직 미정", status: "tbd", mapUrl: "" },
          { time: "19:00 전후", type: "food", title: "DINNER · 모츠나베", place: "식당 미정", note: "식당은 추후 직접 결정할 예정", status: "planned", meal: true, reservationUrl: "" },
          { time: "저녁 이후", type: "place", title: "나카스 / 텐진 자유 일정", place: "후쿠오카", note: "추후 결정", status: "tbd", mapUrl: "" },
          { time: "숙박", type: "hotel", title: "THE LIVELY FUKUOKA HAKATA", place: "나카스", status: "confirmed", mapUrl: "" }
        ]
      },
      {
        id: "day-2",
        day: "DAY 2",
        date: "2026.09.19 SAT",
        shortDate: "9/19",
        weekday: "토",
        location: "후쿠오카 → 유후인",
        locationDetail: "버스 · 유후인",
        events: [
          { time: "07:00", type: "hotel", title: "호텔 출발", place: "THE LIVELY FUKUOKA HAKATA", status: "planned", movement: true },
          { time: "07:00~07:40", type: "food", title: "BREAKFAST", place: "버스터미널 이동 중 또는 근처", note: "텐진 고속버스터미널로 이동하는 길 또는 버스터미널 근처에서 간단하게 아침식사\n컨셉: 빠르게 먹을 수 있는 아침 · 식당 미정", status: "planned", meal: true },
          { time: "07:55~08:00", type: "bus", title: "터미널 도착 목표", place: "니시테츠 텐진 고속버스터미널", status: "planned", movement: true },
          { time: "08:25", type: "bus", title: "유후인호 출발", place: "니시테츠 텐진 고속버스터미널 → 유후인역앞 버스센터", note: "가메노이 버스 · 편명 48202 · 좌석 10C / 10D", status: "confirmed", movement: true },
          { time: "오전", type: "place", title: "유후인 도착", place: "유후인역앞 버스센터", status: "planned", movement: true },
          { time: "점심", type: "food", title: "우나기동", place: "우나기노나루세 유후인점", note: "메뉴: 우나기동", status: "planned", meal: true, mapUrl: "", reservationUrl: "" },
          { time: "오후", type: "place", title: "유후인 관광", place: "유후인", note: "세부 관광 코스는 아직 미정", status: "tbd", mapUrl: "" },
          { time: "저녁", type: "food", title: "DINNER · 료칸 가이세키", place: "유후인 료칸", note: "숙소: 미정", status: "tbd", meal: true },
          { time: "숙박", type: "hotel", title: "유후인 료칸", place: "숙소 미정", note: "료칸 예정 · 석식 가이세키 · 다음 날 조식 포함 플랜 예정", status: "tbd", mapUrl: "", reservationUrl: "" }
        ]
      },
      {
        id: "day-3",
        day: "DAY 3",
        date: "2026.09.20 SUN",
        shortDate: "9/20",
        weekday: "일",
        location: "유후인 → 후쿠오카",
        locationDetail: "유후인 · 나카스",
        events: [
          { time: "아침", type: "food", title: "BREAKFAST", place: "료칸", note: "료칸 조식", status: "planned", meal: true },
          { time: "아침", type: "hotel", title: "체크아웃 후 이동", place: "유후인역앞 버스센터", note: "체크아웃 후 유후인역앞 버스센터 이동", status: "planned", movement: true },
          { time: "10:30", type: "bus", title: "유후인호 출발", place: "유후인역앞 버스센터 → 니시테츠 텐진 고속버스터미널", note: "가메노이 버스 · 편명 48207 · 좌석 10C / 10D", status: "confirmed", movement: true },
          { time: "오전 이후", type: "hotel", title: "후쿠오카 도착 후 이동", place: "THE LIVELY FUKUOKA HAKATA", note: "호텔 이동 또는 짐 보관", status: "planned", movement: true, mapUrl: "" },
          { time: "점심", type: "food", title: "LUNCH", place: "미정", status: "tbd", meal: true },
          { time: "오후", type: "place", title: "후쿠오카 관광 / 쇼핑 / 카페", place: "후쿠오카", note: "세부 일정 미정", status: "tbd", mapUrl: "" },
          { time: "저녁", type: "food", title: "DINNER", place: "미정", status: "tbd", meal: true },
          { time: "숙박", type: "hotel", title: "THE LIVELY FUKUOKA HAKATA", place: "나카스", status: "confirmed", mapUrl: "" }
        ]
      },
      {
        id: "day-4",
        day: "DAY 4",
        date: "2026.09.21 MON",
        shortDate: "9/21",
        weekday: "월",
        location: "후쿠오카 → 한국",
        locationDetail: "마지막 일정 · 귀국",
        events: [
          { time: "아침", type: "food", title: "BREAKFAST", place: "미정", status: "tbd", meal: true },
          { time: "오전", type: "place", title: "후쿠오카 마지막 일정", place: "쇼핑 / 관광 / 카페 등", note: "추후 결정", status: "tbd", mapUrl: "" },
          { time: "점심", type: "food", title: "LUNCH", place: "미정", note: "이번 여행에서 마지막 제대로 된 식사가 될 가능성이 높아 일정상 중요 식사로 표시", status: "tbd", meal: true },
          { time: "오후", type: "hotel", title: "짐 수령 및 공항 이동", place: "호텔 → 후쿠오카공항", status: "planned", movement: true },
          { time: "16:25", type: "flight", title: "후쿠오카공항 출발", place: "Asiana Airlines OZ133 · FUK 후쿠오카공항", note: "FUK 후쿠오카공항 → ICN 인천공항 T2", status: "confirmed", movement: true },
          { time: "18:05", type: "flight", title: "인천공항 도착", place: "ICN 인천공항 제2터미널", status: "confirmed", movement: true }
        ]
      }
    ],
    foodPlan: [
      { date: "9/18", weekday: "금", items: [{ meal: "저녁", title: "모츠나베", detail: "식당 미정", status: "planned" }] },
      { date: "9/19", weekday: "토", items: [{ meal: "아침", title: "버스 타기 전 간단한 아침", detail: "식당 미정", status: "planned" }, { meal: "점심", title: "우나기노나루세 유후인점", detail: "우나기동", status: "planned" }, { meal: "저녁", title: "료칸 가이세키", detail: "료칸 미정", status: "tbd" }] },
      { date: "9/20", weekday: "일", items: [{ meal: "아침", title: "료칸 조식", detail: "", status: "planned" }, { meal: "점심", title: "미정", detail: "", status: "tbd" }, { meal: "저녁", title: "미정", detail: "", status: "tbd" }] },
      { date: "9/21", weekday: "월", items: [{ meal: "아침", title: "미정", detail: "", status: "tbd" }, { meal: "점심", title: "미정", detail: "마지막 중요 식사", status: "tbd" }] }
    ],
    transport: [
      { category: "flight", label: "FLIGHT", routes: [{ date: "09.18", code: "OZ134", from: "ICN 13:55", to: "FUK 15:25" }, { date: "09.21", code: "OZ133", from: "FUK 16:25", to: "ICN 18:05" }] },
      { category: "bus", label: "YUFUIN BUS", routes: [{ date: "09.19 SAT", code: "48202", time: "08:25", from: "텐진 고속버스터미널", to: "유후인역앞 버스센터", detail: "좌석 10C / 10D" }, { date: "09.20 SUN", code: "48207", time: "10:30", from: "유후인역앞 버스센터", to: "텐진 고속버스터미널", detail: "좌석 10C / 10D" }] }
    ],
  }
];

// ================================
// 여행 목록 저장소
// 여행 데이터는 Google Apps Script 웹 앱을 통해 Google Drive에 저장합니다.
// ================================
const sharedApiUrl = String(window.SOLSOL_API_URL || "").trim().replace(/\/$/, "");
let tripCollection = [];
let selectedTripId = "";
let sharedSaveTimer = null;
let sharedSaveResolvers = [];

function updateSyncStatus(message, isError = false) {
  const status = document.querySelector("#sync-status");
  if (!status) return;
  status.textContent = message;
  status.classList.toggle("is-error", isError);
}

function cloneTrips(trips) {
  return JSON.parse(JSON.stringify(trips || []));
}

function loadSharedTripCollection() {
  if (!sharedApiUrl) return Promise.resolve({ trips: cloneTrips(initialTripCollection), configured: false });

  return new Promise((resolve, reject) => {
    const callbackName = `solsolLoad_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    const cleanup = () => {
      delete window[callbackName];
      script.remove();
    };
    const timeout = window.setTimeout(() => {
      cleanup();
      reject(new Error("공유 저장소 응답 시간이 초과되었습니다."));
    }, 15000);

    window[callbackName] = payload => {
      window.clearTimeout(timeout);
      cleanup();
      if (!payload?.ok) {
        reject(new Error(payload?.error || "공유 저장소를 불러오지 못했습니다."));
        return;
      }
      resolve({ trips: Array.isArray(payload.trips) ? payload.trips : [], configured: true });
    };

    script.onerror = () => {
      window.clearTimeout(timeout);
      cleanup();
      reject(new Error("Google Apps Script 웹 앱에 연결할 수 없습니다."));
    };
    script.src = `${sharedApiUrl}?action=load&callback=${encodeURIComponent(callbackName)}&_=${Date.now()}`;
    document.head.appendChild(script);
  });
}

function applySharedTrips(trips) {
  const previousSelection = selectedTripId;
  tripCollection = Array.isArray(trips) ? trips : [];
  selectedTripId = tripCollection.some(trip => trip.id === previousSelection) ? previousSelection : (tripCollection[0]?.id || "");
  renderTripNavigator();
  renderSelectedTrip();
}

function saveTripCollection() {
  if (!sharedApiUrl) {
    updateSyncStatus("공유 저장소 URL을 설정해 주세요", true);
    return Promise.resolve(false);
  }

  clearTimeout(sharedSaveTimer);
  const savePromise = new Promise(resolve => sharedSaveResolvers.push(resolve));
  sharedSaveTimer = window.setTimeout(async () => {
    const resolvers = sharedSaveResolvers.splice(0);
    try {
      const response = await fetch(sharedApiUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=UTF-8" },
        body: JSON.stringify({ action: "save", trips: cloneTrips(tripCollection) })
      });
      void response;
      await new Promise(resolve => window.setTimeout(resolve, 500));
      const remote = await loadSharedTripCollection();
      applySharedTrips(remote.trips);
      updateSyncStatus("공유 저장됨");
      resolvers.forEach(resolve => resolve(true));
    } catch (error) {
      updateSyncStatus("공유 저장 실패 · 다시 시도해 주세요", true);
      resolvers.forEach(resolve => resolve(false));
      console.error(error);
    }
  }, 250);
  return savePromise;
}

const typeInfo = {
  food: { icon: "🍴", label: "FOOD" },
  bus: { icon: "🚌", label: "BUS" },
  flight: { icon: "✈", label: "FLIGHT" },
  hotel: { icon: "⌂", label: "HOTEL" },
  cafe: { icon: "☕", label: "CAFE" },
  shopping: { icon: "▣", label: "SHOPPING" },
  place: { icon: "•", label: "PLACE" }
};

const defaultCategories = Object.entries(typeInfo).map(([key, info]) => ({ key, ...info }));

// 국가 선택 목록: 국가명은 한글 검색을 지원합니다.
const countryCatalog = `
AF|아프가니스탄|🇦🇫
AL|알바니아|🇦🇱
DZ|알제리|🇩🇿
AD|안도라|🇦🇩
AO|앙골라|🇦🇴
AG|앤티가 바부다|🇦🇬
AR|아르헨티나|🇦🇷
AM|아르메니아|🇦🇲
AU|호주|🇦🇺
AT|오스트리아|🇦🇹
AZ|아제르바이잔|🇦🇿
BS|바하마|🇧🇸
BH|바레인|🇧🇭
BD|방글라데시|🇧🇩
BB|바베이도스|🇧🇧
BY|벨라루스|🇧🇾
BE|벨기에|🇧🇪
BZ|벨리즈|🇧🇿
BJ|베냉|🇧🇯
BT|부탄|🇧🇹
BO|볼리비아|🇧🇴
BA|보스니아 헤르체고비나|🇧🇦
BW|보츠와나|🇧🇼
BR|브라질|🇧🇷
BN|브루나이|🇧🇳
BG|불가리아|🇧🇬
BF|부르키나파소|🇧🇫
BI|부룬디|🇧🇮
CV|카보베르데|🇨🇻
KH|캄보디아|🇰🇭
CM|카메룬|🇨🇲
CA|캐나다|🇨🇦
CF|중앙아프리카공화국|🇨🇫
TD|차드|🇹🇩
CL|칠레|🇨🇱
CN|중국|🇨🇳
CO|콜롬비아|🇨🇴
KM|코모로|🇰🇲
CG|콩고공화국|🇨🇬
CD|콩고민주공화국|🇨🇩
CR|코스타리카|🇨🇷
CI|코트디부아르|🇨🇮
HR|크로아티아|🇭🇷
CU|쿠바|🇨🇺
CY|키프로스|🇨🇾
CZ|체코|🇨🇿
DK|덴마크|🇩🇰
DJ|지부티|🇩🇯
DM|도미니카|🇩🇲
DO|도미니카공화국|🇩🇴
EC|에콰도르|🇪🇨
EG|이집트|🇪🇬
SV|엘살바도르|🇸🇻
GQ|적도기니|🇬🇶
ER|에리트레아|🇪🇷
EE|에스토니아|🇪🇪
SZ|에스와티니|🇸🇿
ET|에티오피아|🇪🇹
FJ|피지|🇫🇯
FI|핀란드|🇫🇮
FR|프랑스|🇫🇷
GA|가봉|🇬🇦
GM|감비아|🇬🇲
GE|조지아|🇬🇪
DE|독일|🇩🇪
GH|가나|🇬🇭
GR|그리스|🇬🇷
GD|그레나다|🇬🇩
GT|과테말라|🇬🇹
GN|기니|🇬🇳
GW|기니비사우|🇬🇼
GY|가이아나|🇬🇾
HT|아이티|🇭🇹
HN|온두라스|🇭🇳
HU|헝가리|🇭🇺
IS|아이슬란드|🇮🇸
IN|인도|🇮🇳
ID|인도네시아|🇮🇩
IR|이란|🇮🇷
IQ|이라크|🇮🇶
IE|아일랜드|🇮🇪
IL|이스라엘|🇮🇱
IT|이탈리아|🇮🇹
JM|자메이카|🇯🇲
JP|일본|🇯🇵
JO|요르단|🇯🇴
KZ|카자흐스탄|🇰🇿
KE|케냐|🇰🇪
KI|키리바시|🇰🇮
KP|북한|🇰🇵
KR|대한민국|🇰🇷
KW|쿠웨이트|🇰🇼
KG|키르기스스탄|🇰🇬
LA|라오스|🇱🇦
LV|라트비아|🇱🇻
LB|레바논|🇱🇧
LS|레소토|🇱🇸
LR|라이베리아|🇱🇷
LY|리비아|🇱🇾
LI|리히텐슈타인|🇱🇮
LT|리투아니아|🇱🇹
LU|룩셈부르크|🇱🇺
MG|마다가스카르|🇲🇬
MW|말라위|🇲🇼
MY|말레이시아|🇲🇾
MV|몰디브|🇲🇻
ML|말리|🇲🇱
MT|몰타|🇲🇹
MH|마셜 제도|🇲🇭
MR|모리타니|🇲🇷
MU|모리셔스|🇲🇺
MX|멕시코|🇲🇽
FM|미크로네시아|🇫🇲
MD|몰도바|🇲🇩
MC|모나코|🇲🇨
MN|몽골|🇲🇳
ME|몬테네그로|🇲🇪
MA|모로코|🇲🇦
MZ|모잠비크|🇲🇿
MM|미얀마|🇲🇲
NA|나미비아|🇳🇦
NR|나우루|🇳🇷
NP|네팔|🇳🇵
NL|네덜란드|🇳🇱
NZ|뉴질랜드|🇳🇿
NI|니카라과|🇳🇮
NE|니제르|🇳🇪
NG|나이지리아|🇳🇬
MK|북마케도니아|🇲🇰
NO|노르웨이|🇳🇴
OM|오만|🇴🇲
PK|파키스탄|🇵🇰
PW|팔라우|🇵🇼
PA|파나마|🇵🇦
PG|파푸아뉴기니|🇵🇬
PY|파라과이|🇵🇾
PE|페루|🇵🇪
PH|필리핀|🇵🇭
PL|폴란드|🇵🇱
PT|포르투갈|🇵🇹
QA|카타르|🇶🇦
RO|루마니아|🇷🇴
RU|러시아|🇷🇺
RW|르완다|🇷🇼
KN|세인트키츠 네비스|🇰🇳
LC|세인트루시아|🇱🇨
VC|세인트빈센트 그레나딘|🇻🇨
WS|사모아|🇼🇸
SM|산마리노|🇸🇲
ST|상투메 프린시페|🇸🇹
SA|사우디아라비아|🇸🇦
SN|세네갈|🇸🇳
RS|세르비아|🇷🇸
SC|세이셸|🇸🇨
SL|시에라리온|🇸🇱
SG|싱가포르|🇸🇬
SK|슬로바키아|🇸🇰
SI|슬로베니아|🇸🇮
SB|솔로몬 제도|🇸🇧
SO|소말리아|🇸🇴
ZA|남아프리카공화국|🇿🇦
SS|남수단|🇸🇸
ES|스페인|🇪🇸
LK|스리랑카|🇱🇰
SD|수단|🇸🇩
SR|수리남|🇸🇷
SE|스웨덴|🇸🇪
CH|스위스|🇨🇭
SY|시리아|🇸🇾
TJ|타지키스탄|🇹🇯
TZ|탄자니아|🇹🇿
TH|태국|🇹🇭
TL|동티모르|🇹🇱
TG|토고|🇹🇬
TO|통가|🇹🇴
TT|트리니다드 토바고|🇹🇹
TN|튀니지|🇹🇳
TR|튀르키예|🇹🇷
TM|투르크메니스탄|🇹🇲
TV|투발루|🇹🇻
UG|우간다|🇺🇬
UA|우크라이나|🇺🇦
AE|아랍에미리트|🇦🇪
GB|영국|🇬🇧
US|미국|🇺🇸
UY|우루과이|🇺🇾
UZ|우즈베키스탄|🇺🇿
VU|바누아투|🇻🇺
VA|바티칸 시국|🇻🇦
VE|베네수엘라|🇻🇪
VN|베트남|🇻🇳
YE|예멘|🇾🇪
ZM|잠비아|🇿🇲
ZW|짐바브웨|🇿🇼
`.trim().split("\n").map(line => { const [code, name, flag] = line.split("|"); return { code, name, flag }; });

const weekdayLabels = ["일", "월", "화", "수", "목", "금", "토"];

function findCountry(code) {
  return countryCatalog.find(country => country.code === code) || null;
}

function getTripCountry(trip) {
  return findCountry(trip?.countryCode) || { code: "", name: trip?.countryName || "국가 미정", flag: trip?.countryFlag || "🌍" };
}

function getTripDestination(trip) {
  return trip?.destination || trip?.shortTitle || [trip?.heroDestinationA, trip?.heroDestinationB].filter(Boolean).join(" · ") || "여행지 미정";
}

function formatDateLabel(dateValue) {
  if (!dateValue) return "날짜 미정";
  const date = new Date(`${dateValue}T00:00:00`);
  if (Number.isNaN(date.getTime())) return dateValue;
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")} ${weekdayLabels[date.getDay()]}`;
}

function formatDateRange(startDate, endDate, fallback = "날짜 미정") {
  if (!startDate || !endDate) return fallback;
  return `${formatDateLabel(startDate)} — ${formatDateLabel(endDate)}`;
}

function isoDateFromText(value, fallbackYear = "") {
  const match = String(value || "").match(/(?:(20\d{2})[.-])?(\d{1,2})[./-](\d{1,2})/);
  if (!match) return "";
  const year = match[1] || fallbackYear;
  if (!year) return "";
  return `${year}-${String(match[2]).padStart(2, "0")}-${String(match[3]).padStart(2, "0")}`;
}

function createTripDays(startDate, endDate) {
  const days = [];
  const cursor = new Date(`${startDate}T00:00:00`);
  const lastDate = new Date(`${endDate}T00:00:00`);
  while (!Number.isNaN(cursor.getTime()) && cursor <= lastDate) {
    const isoDate = `${cursor.getFullYear()}-${String(cursor.getMonth() + 1).padStart(2, "0")}-${String(cursor.getDate()).padStart(2, "0")}`;
    days.push({
      id: `day-${isoDate}`,
      isoDate,
      day: `DAY ${days.length + 1}`,
      date: formatDateLabel(isoDate),
      shortDate: `${cursor.getMonth() + 1}/${cursor.getDate()}`,
      weekday: weekdayLabels[cursor.getDay()],
      location: "",
      locationDetail: "",
      events: []
    });
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
}

function getStayDateValues(stay, trip) {
  let startDate = stay?.startDate || "";
  let endDate = stay?.endDate || "";
  const year = String(trip?.startDate || new Date().toISOString().slice(0, 10)).slice(0, 4);
  if (startDate && !/^20\d{2}-\d{2}-\d{2}$/.test(startDate)) startDate = isoDateFromText(startDate, year);
  if (endDate && !/^20\d{2}-\d{2}-\d{2}$/.test(endDate)) endDate = isoDateFromText(endDate, year);
  const legacyDates = String(stay?.dates || "");
  const dates = [...legacyDates.matchAll(/(20\d{2})[.-](\d{1,2})[.-](\d{1,2})|(\d{1,2})\/(\d{1,2})/g)].map(match => {
    const [, fullYear, fullMonth, fullDay, shortMonth, shortDay] = match;
    return `${fullYear || year}-${String(fullMonth || shortMonth).padStart(2, "0")}-${String(fullDay || shortDay).padStart(2, "0")}`;
  });
  if (!startDate) startDate = dates[0] || "";
  if (!endDate) endDate = dates[1] || dates[0] || "";
  return { startDate, endDate };
}

function getTripMonthLabel(trip) {
  const dateValue = trip?.startDate;
  if (dateValue) {
    const date = new Date(`${dateValue}T00:00:00`);
    if (!Number.isNaN(date.getTime())) return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
  }
  const match = trip?.dateRange?.match(/(20\d{2})\.(\d{2})/);
  return match ? `${match[1]}년 ${Number(match[2])}월` : "날짜 미정";
}

function renderCountryOptions(picker, query = "") {
  const options = picker.querySelector("[data-country-options]");
  const selectedCode = picker.querySelector("[data-country-code]")?.value || "";
  const normalizedQuery = query.trim().toLowerCase();
  const matches = countryCatalog.filter(country => !normalizedQuery || `${country.name} ${country.code}`.toLowerCase().includes(normalizedQuery)).slice(0, 80);
  options.innerHTML = matches.length ? matches.map(country => `<button class="country-option ${country.code === selectedCode ? "selected" : ""}" type="button" data-country-code-option="${country.code}"><span class="country-flag">${country.flag}</span><span>${country.name}</span></button>`).join("") : '<div class="country-empty">검색 결과가 없습니다.</div>';
  options.hidden = false;
}

function bindCountryPicker(picker) {
  if (!picker || picker.dataset.bound === "true") return;
  picker.dataset.bound = "true";
  const search = picker.querySelector("[data-country-search]");
  const codeInput = picker.querySelector("[data-country-code]");
  const options = picker.querySelector("[data-country-options]");
  search.addEventListener("focus", () => renderCountryOptions(picker, search.value));
  search.addEventListener("input", () => {
    codeInput.value = "";
    renderCountryOptions(picker, search.value);
  });
  options.addEventListener("click", event => {
    const option = event.target.closest("[data-country-code-option]");
    if (!option) return;
    const country = findCountry(option.dataset.countryCodeOption);
    if (!country) return;
    codeInput.value = country.code;
    search.value = `${country.flag} ${country.name}`;
    options.hidden = true;
  });
}

function bindCountryPickers(root = document) {
  root.querySelectorAll("[data-country-picker]").forEach(bindCountryPicker);
}

const statusInfo = {
  confirmed: { label: "확정", className: "confirmed" },
  planned: { label: "계획", className: "planned" },
  tbd: { label: "미정", className: "tbd" }
};

// ================================
// 공통 보안·표시 도우미
// ================================
function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character]));
}

function formatMultiline(value = "") {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

function safeAttachmentHref(attachment) {
  if (!attachment) return "";
  if (attachment.kind === "local" && attachment.data?.startsWith("data:")) return attachment.data;
  if (attachment.kind === "github" && /^(https?:\/\/|\.?\.?\/|\/?assets\/)/i.test(attachment.url || "")) return attachment.url;
  if (attachment.kind === "drive" && /^https:\/\/drive\.google\.com\//i.test(attachment.url || "")) return attachment.url;
  return "";
}

function renderAttachment(attachment) {
  const href = safeAttachmentHref(attachment);
  if (!href) return "";
  const label = attachment.name || "첨부 파일 열기";
  const download = ["local", "drive"].includes(attachment.kind) ? ` download="${escapeHtml(label)}"` : "";
  return `<div class="event-attachment"><span>📎</span><a href="${escapeHtml(href)}" target="_blank" rel="noreferrer"${download}>${escapeHtml(label)}</a></div>`;
}

function statusBadge(status) {
  const info = statusInfo[status] || statusInfo.planned;
  return `<span class="status ${info.className}">${info.label}</span>`;
}

function getCategoryInfo(trip, key) {
  const categories = trip?.categories?.length ? trip.categories : defaultCategories;
  return categories.find(category => category.key === key) || { key, icon: "•", label: key ? String(key).toUpperCase() : "PLACE" };
}

function getSelectedTrip() {
  return tripCollection.find(trip => trip.id === selectedTripId) || tripCollection[0] || null;
}

// ================================
// 왼쪽 여행 아카이브 네비게이터
// ================================
function renderTripNavigator() {
  const list = document.querySelector("#trip-list");
  if (!list) return;

  list.innerHTML = tripCollection.length ? tripCollection.map(trip => `
    <div class="trip-list-item">
      <button class="trip-selector ${trip.id === selectedTripId ? "active" : ""}" data-trip-id="${escapeHtml(trip.id)}" aria-pressed="${trip.id === selectedTripId}">
        <span class="trip-one-line">${escapeHtml(getTripMonthLabel(trip))} ${escapeHtml(getTripCountry(trip).flag)} ${escapeHtml(getTripCountry(trip).name)} · ${escapeHtml(getTripDestination(trip))}</span>
      </button>
      <button class="trip-edit" data-edit-trip="${escapeHtml(trip.id)}" type="button" aria-label="${escapeHtml(trip.title)} 수정" title="여행 수정">✎</button>
    </div>
  `).join("") : '<div class="empty-nav">아직 여행이 없습니다.<br />새 여행을 만들어 보세요.</div>';

  list.querySelectorAll(".trip-selector").forEach(button => {
    button.addEventListener("click", () => {
      selectedTripId = button.dataset.tripId;
      renderTripNavigator();
      renderSelectedTrip();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  list.querySelectorAll(".trip-edit").forEach(button => {
    button.addEventListener("click", event => {
      event.stopPropagation();
      openTripEditor(button.dataset.editTrip);
    });
  });
}

function deleteTrip(tripId) {
  const target = tripCollection.find(trip => trip.id === tripId);
  if (!target || !window.confirm(`“${target.title}” 여행을 삭제할까요?\n삭제한 여행은 복구할 수 없습니다.`)) return false;

  tripCollection = tripCollection.filter(trip => trip.id !== tripId);
  if (selectedTripId === tripId) selectedTripId = tripCollection[0]?.id || "";
  saveTripCollection();
  renderTripNavigator();
  renderSelectedTrip();
  return true;
}

// ================================
// 웹에서 새 여행 페이지 생성
// ================================
function openTripModal() {
  const modal = document.querySelector("#trip-modal");
  const form = document.querySelector("#trip-form");
  form.reset();
  form.querySelector("[data-country-options]").hidden = true;
  modal.hidden = false;
  window.setTimeout(() => form.elements.name.focus(), 0);
}

function closeTripModal() {
  document.querySelector("#trip-modal").hidden = true;
}

function makeTripId() {
  return `trip-${Date.now()}`;
}

function createTrip(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const startDate = form.elements.startDate.value;
  const endDate = form.elements.endDate.value;
  const country = findCountry(form.elements.countryCode.value);
  const destination = form.elements.destination.value.trim();
  if (!startDate || !endDate || !country || !destination) {
    window.alert("시작일·종료일·국가·여행지를 모두 입력해 주세요.");
    return;
  }
  if (endDate < startDate) {
    window.alert("종료일은 시작일보다 빠르거나 같아야 합니다.");
    return;
  }

  const destinations = destination.split("·").map(item => item.trim()).filter(Boolean);
  const period = formatDateRange(startDate, endDate);
  const yearMatch = startDate.match(/20\d{2}/);
  const nextArchiveNo = Math.max(...tripCollection.map(trip => Number(trip.archiveNo) || 0), 0) + 1;
  const newTrip = {
    id: makeTripId(),
    archiveNo: String(nextArchiveNo).padStart(2, "0"),
    title: `${country.name} · ${destination}`,
    shortTitle: destination,
    heroYear: yearMatch ? yearMatch[0] : "NEW",
    heroDestinationA: destinations[0] || destination,
    heroDestinationB: destinations[1] || "",
    subtitle: `${country.name} · ${destination}`,
    dateLabel: period,
    dateRange: period,
    startDate,
    endDate,
    countryCode: country.code,
    countryName: country.name,
    countryFlag: country.flag,
    destination,
    routeFlow: [],
    categories: defaultCategories.map(category => ({ ...category })),
    summary: { flights: [], stays: [] },
    days: createTripDays(startDate, endDate),
    foodPlan: [],
    transport: [],
    checklist: defaultChecklistItems.slice(),
    checklistState: {},
    memo: ""
  };

  tripCollection.push(newTrip);
  selectedTripId = newTrip.id;
  saveTripCollection();
  closeTripModal();
  renderTripNavigator();
  renderSelectedTrip();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function bindTripCreation() {
  document.querySelector("#add-trip-button").addEventListener("click", openTripModal);
  document.querySelector("#close-trip-modal").addEventListener("click", closeTripModal);
  document.querySelector("#cancel-trip").addEventListener("click", closeTripModal);
  document.querySelector("#trip-form").addEventListener("submit", createTrip);
  bindCountryPickers(document.querySelector("#trip-form"));
  document.querySelector("[data-close-modal]").addEventListener("click", closeTripModal);
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !document.querySelector("#trip-modal").hidden) closeTripModal();
  });
}

function bindEditorControls() {
  document.addEventListener("click", event => {
    const actionElement = event.target.closest("[data-action]");
    if (!actionElement) return;
    event.preventDefault();
    handleActionClick(actionElement);
  });
  document.querySelector("#close-editor-modal").addEventListener("click", closeEditorModal);
  document.querySelector("#cancel-editor").addEventListener("click", closeEditorModal);
  document.querySelector("[data-close-editor]").addEventListener("click", closeEditorModal);
  document.querySelector("#editor-form").addEventListener("submit", saveEditor);
  document.querySelector("#delete-editor-trip").addEventListener("click", () => {
    if (editorState.mode !== "trip") return;
    if (deleteTrip(editorState.context.tripId)) closeEditorModal();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !document.querySelector("#editor-modal").hidden) closeEditorModal();
  });
}

// ================================
// 선택한 여행의 본문 렌더링
// ================================
function renderSelectedTrip() {
  const trip = getSelectedTrip();
  if (!trip) {
    document.querySelector("#hero-title").innerHTML = "새 여행을<br /><span>시작해 보세요</span>";
    document.querySelector(".hero-subtitle").textContent = "아직 등록된 여행이 없습니다.";
    document.querySelector(".date-range").innerHTML = "";
    document.querySelector("#route-flow").innerHTML = "";
    document.querySelector("#summary-container").innerHTML = emptyPanel("여행을 선택해 주세요.", "왼쪽에서 새 여행을 만들 수 있습니다.");
    document.querySelector("#schedule-container").innerHTML = emptyPanel("여행 일정이 없습니다.", "새 여행을 만들면 이곳에 페이지가 생깁니다.");
    document.querySelector("#food-container").innerHTML = emptyPanel("식사 계획이 없습니다.", "");
    document.querySelector("#transport-container").innerHTML = emptyPanel("교통 정보가 없습니다.", "");
    renderDayNavigation(null);
    renderChecklist();
    renderMemo();
    document.title = "솔솔부부 여행프로젝트";
    return;
  }
  const heroRoute = [trip.heroDestinationA, trip.heroDestinationB].filter(Boolean).map(escapeHtml);
  const heroRouteMarkup = heroRoute.length > 1 ? `<span>${heroRoute[0]}</span> · <span>${heroRoute[1]}</span>` : `<span>${heroRoute[0] || "TRAVEL"}</span>`;
  document.querySelector("#hero-title").innerHTML = `${escapeHtml(trip.heroYear || "")}<br />${heroRouteMarkup}`;
  document.querySelector(".hero-subtitle").textContent = trip.subtitle;
  document.querySelector(".date-range").innerHTML = `<strong>${escapeHtml(trip.dateRange.split(" — ")[0])}</strong><span>—</span><strong>${escapeHtml(trip.dateRange.split(" — ")[1] || "")}</strong>`;
  document.title = `${trip.title} · 솔솔부부 여행프로젝트`;
  document.querySelector("#route-flow").innerHTML = renderRouteFlow(trip.routeFlow || []);
  document.querySelector("#summary-container").innerHTML = renderSummary(trip.summary || { flights: [], stays: [] }, trip);
  renderDayNavigation(trip);
  document.querySelector("#schedule-container").innerHTML = trip.days?.length ? trip.days.map(renderDay).join("") : emptyPanel("아직 등록된 일정이 없습니다.", "이 여행의 날짜별 계획을 준비해 보세요.");
  const foodPlan = foodPlanForRender(trip);
  document.querySelector("#food-container").innerHTML = foodPlan.length ? foodPlan.map(renderFoodDay).join("") : emptyPanel("아직 등록된 식사 계획이 없습니다.", "일정 추가 시 ‘식사 일정’을 선택해 보세요.");
  document.querySelector("#transport-container").innerHTML = trip.transport?.length ? trip.transport.map((item, index) => renderTransport(item, index)).join("") : emptyPanel("아직 등록된 교통 정보가 없습니다.", "항공편이나 이동 정보를 추가해 보세요.");
  renderChecklist();
  renderMemo();
  bindDayNavigation();
}

function emptyPanel(title, description) {
  return `<div class="empty-panel"><strong>${escapeHtml(title)}</strong><br /><span>${escapeHtml(description)}</span></div>`;
}

function renderDayNavigation(trip) {
  const navigation = document.querySelector("#day-nav");
  navigation.innerHTML = `<button class="day-nav-button active" data-target="all">전체</button>${(trip?.days || []).map(day => `<button class="day-nav-button" data-target="${escapeHtml(day.id)}">${escapeHtml(day.shortDate || day.date || day.day)}${day.weekday ? ` <span>${escapeHtml(day.weekday)}</span>` : ""}</button>`).join("")}`;
}

// ================================
// 편집 창 공통 도우미
// ================================
let editorState = { mode: "", context: {} };

function inputField(name, label, value = "", options = {}) {
  const type = options.type || "text";
  const full = options.full ? "editor-full" : "";
  const placeholder = options.placeholder ? ` placeholder="${escapeHtml(options.placeholder)}"` : "";
  return `<label class="${full}">${escapeHtml(label)}<input name="${escapeHtml(name)}" type="${type}" value="${escapeHtml(value)}"${placeholder}${options.required ? " required" : ""} /></label>`;
}

function textareaField(name, label, value = "", options = {}) {
  return `<label class="${options.full ? "editor-full" : ""}">${escapeHtml(label)}<textarea name="${escapeHtml(name)}" placeholder="${escapeHtml(options.placeholder || "")}">${escapeHtml(value)}</textarea></label>`;
}

function selectField(name, label, value, options, full = false) {
  return `<label class="${full ? "editor-full" : ""}">${escapeHtml(label)}<select name="${escapeHtml(name)}">${options.map(option => `<option value="${escapeHtml(option.value)}" ${option.value === value ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}</select></label>`;
}

function checkboxField(name, label, checked = false) {
  return `<label class="check-field"><input name="${escapeHtml(name)}" type="checkbox" ${checked ? "checked" : ""} />${escapeHtml(label)}</label>`;
}

function openEditorModal(mode, title, description, fields, context = {}) {
  editorState = { mode, context };
  document.querySelector("#editor-modal-eyebrow").textContent = mode.replace(/-/g, " ").toUpperCase();
  document.querySelector("#editor-modal-title").textContent = title;
  document.querySelector("#editor-modal-description").textContent = description;
  document.querySelector("#editor-fields").innerHTML = fields;
  document.querySelector("#delete-editor-trip").hidden = mode !== "trip";
  document.querySelector("#editor-modal").hidden = false;
  bindCountryPickers(document.querySelector("#editor-fields"));
  window.setTimeout(() => document.querySelector("#editor-fields input, #editor-fields select, #editor-fields textarea")?.focus(), 0);
}

function closeEditorModal() {
  document.querySelector("#editor-modal").hidden = true;
  document.querySelector("#delete-editor-trip").hidden = true;
  editorState = { mode: "", context: {} };
}

function categoryOptions(trip, selected = "") {
  const categories = trip?.categories?.length ? trip.categories : defaultCategories;
  return categories.map(category => ({ value: category.key, label: `${category.icon} ${category.label}` }));
}

function statusOptions(selected) {
  return [
    { value: "confirmed", label: "확정" },
    { value: "planned", label: "계획" },
    { value: "tbd", label: "미정" }
  ].map(option => ({ ...option, selected: option.value === selected }));
}

function openTripEditor(tripId = selectedTripId) {
  const trip = tripCollection.find(item => item.id === tripId) || getSelectedTrip();
  if (!trip) return;
  if (trip.id !== selectedTripId) {
    selectedTripId = trip.id;
    renderTripNavigator();
    renderSelectedTrip();
  }
  const destination = getTripDestination(trip);
  const country = getTripCountry(trip);
  const fields = `<div class="editor-grid">${inputField("name", "여행 이름", trip.title, { required: true, full: true })}${inputField("startDate", "시작일", trip.startDate || "", { type: "date", required: true })}${inputField("endDate", "종료일", trip.endDate || "", { type: "date", required: true })}<div class="country-picker editor-full" data-country-picker><label>국가</label><input name="countrySearch" data-country-search type="search" autocomplete="off" value="${escapeHtml(`${country.flag} ${country.name}`)}" placeholder="국가명을 한글로 검색하세요" required /><input name="countryCode" data-country-code type="hidden" value="${escapeHtml(country.code)}" /><div class="country-options" data-country-options hidden></div></div>${inputField("destination", "여행지", destination, { required: true, full: true })}</div>`;
  openEditorModal("trip", "여행 기본 정보 편집", "왼쪽 여행 목록과 페이지 상단에 표시되는 정보를 수정합니다.", fields, { tripId: trip.id });
}

function parseClockTime(value = "") {
  const match = String(value).match(/(?:^|\D)([01]?\d|2[0-3])[:.]([0-5]\d)(?:\D|$)/);
  return match ? { hour: String(match[1]).padStart(2, "0"), minute: String(match[2]).padStart(2, "0") } : { hour: "", minute: "" };
}

function timeSelectFields(name, label, value = "", options = {}) {
  const parsed = parseClockTime(value);
  const specialValues = options.specialValues || [];
  const specialValue = specialValues.includes(value) ? value : "";
  const specialSelect = specialValues.length
    ? `<select name="${escapeHtml(name)}Special" aria-label="${escapeHtml(label)} 방식"><option value="" ${specialValue ? "" : "selected"}>직접 시간 선택</option>${specialValues.map(item => `<option value="${escapeHtml(item)}" ${item === specialValue ? "selected" : ""}>${escapeHtml(item)}</option>`).join("")}</select>`
    : "";
  const required = options.required && !specialValues.length ? " required" : "";
  const hourOptions = `<option value="">시</option>${Array.from({ length: 24 }, (_, hour) => { const valueText = String(hour).padStart(2, "0"); return `<option value="${valueText}" ${valueText === parsed.hour ? "selected" : ""}>${valueText}</option>`; }).join("")}`;
  const minuteOptions = `<option value="">분</option>${Array.from({ length: 60 }, (_, minute) => { const valueText = String(minute).padStart(2, "0"); return `<option value="${valueText}" ${valueText === parsed.minute ? "selected" : ""}>${valueText}</option>`; }).join("")}`;
  return `<label class="time-select-field ${options.full ? "editor-full" : ""}">${escapeHtml(label)}<div class="time-select-group">${specialSelect}<select name="${escapeHtml(name)}Hour" aria-label="${escapeHtml(label)} 시"${required}>${hourOptions}</select><select name="${escapeHtml(name)}Minute" aria-label="${escapeHtml(label)} 분"${required}>${minuteOptions}</select></div></label>`;
}

function readTimeValue(form, name, fallback = "") {
  const special = form.elements[`${name}Special`]?.value?.trim() || "";
  if (special) return special;
  const hour = form.elements[`${name}Hour`]?.value || "";
  const minute = form.elements[`${name}Minute`]?.value || "";
  if (hour === "" || minute === "") return fallback;
  return `${hour}:${minute}`;
}

function getTransportRouteDate(route, trip) {
  const raw = String(route?.date || "");
  if (/^20\d{2}-\d{2}-\d{2}$/.test(raw)) return raw;
  return isoDateFromText(raw, String(trip?.startDate || trip?.heroYear || "").slice(0, 4)) || "";
}

function formatTransportDate(route, trip) {
  const isoDate = getTransportRouteDate(route, trip);
  return isoDate ? formatDateLabel(isoDate) : route?.date || "날짜 미정";
}

function openFlightEditor(index = null) {
  const trip = getSelectedTrip();
  if (!trip) return;
  const flight = index === null ? {} : (trip.summary?.flights?.[index] || {});
  const fields = `<div class="editor-grid">
    ${inputField("label", "표시 이름", flight.label || "가는 날 · ", { required: true })}
    ${inputField("date", "항공일", getFlightDateValue(flight, trip), { type: "date", required: true })}
    ${inputField("airline", "항공사 · 편명", flight.airline || "", { placeholder: "예: Asiana Airlines OZ134", required: true })}
    ${inputField("title", "구간 이름", flight.title || "인천 → 후쿠오카", { full: true })}
    ${inputField("fromCode", "출발 공항 코드", flight.fromCode || "ICN", { required: true })}
    ${timeSelectFields("fromTime", "출발 시각", flight.fromTime || "", { required: true })}
    ${inputField("fromPlace", "출발 공항 이름", flight.fromPlace || "", { required: true })}
    ${inputField("toCode", "도착 공항 코드", flight.toCode || "FUK", { required: true })}
    ${timeSelectFields("toTime", "도착 시각", flight.toTime || "", { required: true })}
    ${inputField("toPlace", "도착 공항 이름", flight.toPlace || "", { required: true })}
  </div>`;
  openEditorModal("flight", index === null ? "항공편 추가" : "항공편 수정", "공개해도 안전한 항공편 정보만 입력하세요.", fields, { index });
}

function openStayEditor(index = null) {
  const trip = getSelectedTrip();
  if (!trip) return;
  const stay = index === null ? {} : (trip.summary?.stays?.[index] || {});
  const stayDates = getStayDateValues(stay, trip);
  const fields = `<div class="editor-grid">
    ${inputField("title", "숙소 이름", stay.title || "", { required: true, full: true })}
    ${inputField("region", "지역", stay.region || "")}
    ${inputField("startDate", "체크인", stayDates.startDate, { type: "date", required: true })}
    ${inputField("endDate", "체크아웃", stayDates.endDate, { type: "date", required: true })}
    ${selectField("status", "상태", stay.status || "planned", statusOptions(stay.status || "planned"))}
    ${textareaField("note", "메모", stay.note || "", { full: true, placeholder: "숙소에 대한 메모" })}
    ${inputField("mapUrl", "지도 링크", stay.mapUrl || "", { full: true, placeholder: "https://maps.google.com/..." })}
    <label class="editor-full">예약확인서 파일<input name="attachmentFile" type="file" accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt" /></label>
    ${stay.attachment ? checkboxField("removeAttachment", "기존 예약확인서 삭제") : ""}
    <p class="file-note editor-full">파일을 선택하면 Google Drive에 저장되어 두 사람 모두 확인할 수 있습니다.</p>
  </div>`;
  openEditorModal("stay", index === null ? "숙소 추가" : "숙소 수정", "숙소명·지역·숙박 기간과 예약확인서를 관리합니다.", fields, { index });
}

function openDayEditor(index = null) {
  const trip = getSelectedTrip();
  if (!trip) return;
  const day = index === null ? {} : (trip.days?.[index] || {});
  const nextNumber = (trip.days?.length || 0) + 1;
  const dayDate = getDayIsoDate(day, trip);
  const fields = `<div class="editor-grid">
    ${inputField("day", "일정 이름", day.day || `DAY ${nextNumber}`, { required: true })}
    ${inputField("date", "날짜", dayDate, { type: "date", required: true })}
    ${inputField("location", "지역", day.location || "")}
    ${inputField("locationDetail", "지역 설명", day.locationDetail || "")}
  </div>`;
  openEditorModal("day", index === null ? "일자 추가" : "일자 수정", "여행 날짜와 지역 정보를 관리합니다.", fields, { index });
}

function scheduleTimeField(value = "") {
  return timeSelectFields("time", "시간", value || "미정", { specialValues: ["미정", "숙박", "오전", "오후", "아침", "점심", "저녁"] });
}

function openEventEditor(dayId, eventIndex = null) {
  const trip = getSelectedTrip();
  const day = trip?.days?.find(item => item.id === dayId);
  if (!trip || !day) return;
  const event = eventIndex === null ? {} : (day.events?.[eventIndex] || {});
  const categoryList = categoryOptions(trip, event.type || "place");
  const fields = `<div class="editor-grid">
    ${scheduleTimeField(event.time || "미정")}
    ${selectField("type", "분류", event.type || categoryList[0]?.value || "place", categoryList)}
    ${inputField("title", "일정명", event.title || "", { required: true, full: true })}
    ${inputField("place", "장소", event.place || "", { full: true })}
    ${textareaField("note", "설명 / 메모", event.note || "", { full: true, placeholder: "일정 설명이나 준비물을 적어두세요." })}
    ${selectField("status", "상태", event.status || "planned", statusOptions(event.status || "planned"))}
    ${inputField("mapUrl", "지도 링크", event.mapUrl || "", { full: true, placeholder: "https://maps.google.com/..." })}
    ${inputField("reservationUrl", "예약 링크", event.reservationUrl || "", { full: true, placeholder: "예약 확인 URL" })}
    <label class="editor-full">파일 첨부<input name="attachmentFile" type="file" accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt" /></label>
    ${event.attachment ? checkboxField("removeAttachment", "기존 첨부 파일 삭제") : ""}
    <p class="file-note editor-full">파일을 선택하면 Google Drive에 저장되어 두 사람 모두 확인할 수 있습니다.</p>
    <div class="editor-grid editor-full">${selectField("mealType", "식사 구분", event.mealType || inferMealType(event), [{ value: "아침", label: "아침" }, { value: "점심", label: "점심" }, { value: "저녁", label: "저녁" }])}${checkboxField("meal", "식사 일정으로 표시", Boolean(event.meal))}${checkboxField("movement", "이동 일정으로 표시", Boolean(event.movement))}</div>
  </div>`;
  openEditorModal("event", eventIndex === null ? "일정 추가" : "일정 수정", `${day.date} · ${day.location}`, fields, { dayId, eventIndex });
}

function openCategoryEditor() {
  const trip = getSelectedTrip();
  if (!trip) return;
  const categories = trip.categories?.length ? trip.categories : defaultCategories;
  const fields = `<div class="category-editor-list" id="category-editor-list">${categories.map(renderCategoryEditorRow).join("")}</div><button id="add-category-row" class="category-editor-add" type="button">+ 분류 추가</button><p class="category-editor-note">분류를 삭제하면 해당 분류를 사용 중인 일정은 첫 번째 남은 분류로 변경됩니다.</p>`;
  openEditorModal("categories", "일정 분류 관리", "FOOD·HOTEL·BUS 같은 일정 분류를 여행별로 직접 바꿀 수 있습니다.", fields);
  document.querySelector("#add-category-row").addEventListener("click", () => {
    document.querySelector("#category-editor-list").insertAdjacentHTML("beforeend", renderCategoryEditorRow({ key: `category-${Date.now()}`, icon: "•", label: "새 분류" }));
  });
  document.querySelector("#category-editor-list").addEventListener("click", event => {
    const removeButton = event.target.closest(".remove-category");
    if (removeButton) removeButton.closest(".category-editor-row").remove();
  });
}

function openTransportEditor(transportIndex = null, routeIndex = null) {
  const trip = getSelectedTrip();
  if (!trip) return;
  const item = transportIndex === null ? {} : (trip.transport?.[transportIndex] || {});
  const route = transportIndex === null || routeIndex === null ? {} : (item.routes?.[routeIndex] || {});
  const fields = `<div class="editor-grid">
    ${selectField("category", "교통 종류", item.category || "bus", [{ value: "flight", label: "✈ FLIGHT" }, { value: "bus", label: "🚌 BUS" }])}
    ${inputField("label", "그룹 이름", item.label || (item.category === "flight" ? "FLIGHT" : "YUFUIN BUS"), { required: true })}
    ${inputField("date", "날짜", getTransportRouteDate(route, trip), { type: "date", required: true })}
    ${inputField("code", "편명 / 노선 번호", route.code || "")}
    ${timeSelectFields("time", "출발 시각", route.time || ((route.from || "").split(" ")[1] || ""), { required: true })}
    ${inputField("from", "출발지", route.from || "", { required: true })}
    ${inputField("to", "도착지", route.to || "", { required: true })}
    ${inputField("detail", "추가 정보", route.detail || "", { full: true, placeholder: "좌석, 운영사 등" })}
  </div>`;
  openEditorModal("transport", transportIndex === null ? "교통 정보 추가" : "교통 정보 수정", "항공편 외 버스·기차·렌터카 등의 이동 정보도 관리할 수 있습니다.", fields, { transportIndex, routeIndex });
}

function openRouteEditor() {
  const trip = getSelectedTrip();
  if (!trip) return;
  const route = trip.routeFlow || [];
  const fields = `<div class="route-editor-list" id="route-editor-list">${route.map(renderRouteEditorRow).join("")}</div><button id="add-route-row" class="category-editor-add" type="button">+ 흐름 추가</button><p class="category-editor-note">Hero 영역의 여행 흐름은 위에서부터 순서대로 표시됩니다.</p>`;
  openEditorModal("route", "여행 흐름 편집", "요일·지역·세부 장소를 원하는 순서로 정리합니다.", fields);
  document.querySelector("#add-route-row").addEventListener("click", () => {
    document.querySelector("#route-editor-list").insertAdjacentHTML("beforeend", renderRouteEditorRow({ day: "", city: "", detail: "" }));
  });
  document.querySelector("#route-editor-list").addEventListener("click", event => {
    const removeButton = event.target.closest(".remove-route");
    if (removeButton) removeButton.closest(".route-editor-row").remove();
  });
}

function renderRouteEditorRow(route) {
  const weekdays = ["월", "화", "수", "목", "금", "토", "일"];
  const dayOptions = [`<option value="">요일</option>`, ...weekdays.map(day => `<option value="${day}" ${route.day === day ? "selected" : ""}>${day}</option>`)].join("");
  return `<div class="route-editor-row"><select data-route-day aria-label="요일">${dayOptions}</select><input data-route-city type="text" value="${escapeHtml(route.city || "")}" placeholder="후쿠오카" aria-label="지역" /><input data-route-detail type="text" value="${escapeHtml(route.detail || "")}" placeholder="나카스" aria-label="세부 장소" /><button class="icon-action danger remove-route" type="button" title="흐름 삭제">×</button></div>`;
}

function openChecklistEditor() {
  const fields = `<div class="checklist-editor-list" id="checklist-editor-list">${getChecklistItems().map(item => `<div class="checklist-editor-row"><input data-check-label type="text" value="${escapeHtml(item)}" aria-label="체크리스트 항목" /><button class="icon-action danger remove-check" type="button" title="항목 삭제">×</button></div>`).join("")}</div><button id="add-check-row" class="category-editor-add" type="button">+ 항목 추가</button>`;
  openEditorModal("checklist", "체크리스트 편집", "여행마다 필요한 준비물과 할 일을 자유롭게 관리합니다.", fields);
  document.querySelector("#add-check-row").addEventListener("click", () => {
    document.querySelector("#checklist-editor-list").insertAdjacentHTML("beforeend", '<div class="checklist-editor-row"><input data-check-label type="text" value="" placeholder="새 항목" aria-label="체크리스트 항목" /><button class="icon-action danger remove-check" type="button" title="항목 삭제">×</button></div>');
  });
  document.querySelector("#checklist-editor-list").addEventListener("click", event => {
    const removeButton = event.target.closest(".remove-check");
    if (removeButton) removeButton.closest(".checklist-editor-row").remove();
  });
}

function renderCategoryEditorRow(category) {
  return `<div class="category-editor-row" data-category-key="${escapeHtml(category.key)}"><input class="icon-input" data-category-icon type="text" maxlength="3" value="${escapeHtml(category.icon || "•")}" aria-label="아이콘" /><input data-category-label type="text" value="${escapeHtml(category.label || "분류")}" aria-label="분류 이름" /><button class="icon-action danger remove-category" type="button" title="분류 삭제">×</button></div>`;
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", reject);
    reader.readAsDataURL(file);
  });
}

async function getAttachmentFromForm(form, existingAttachment) {
  if (form.elements.removeAttachment?.checked) return null;
  const file = form.elements.attachmentFile?.files?.[0];
  if (file) {
    if (file.size > 3 * 1024 * 1024) {
      window.alert("첨부 파일은 3MB 이하만 선택할 수 있습니다.");
      return existingAttachment || null;
    }
    return { kind: "local", name: file.name, type: file.type, data: await readFileAsDataUrl(file) };
  }
  return existingAttachment || null;
}

async function saveEditor(event) {
  event.preventDefault();
  const trip = getSelectedTrip();
  if (!trip) return;
  const form = event.currentTarget;
  const value = name => form.elements[name]?.value?.trim() || "";
  const index = editorState.context.index;

  if (editorState.mode === "trip") {
    const destination = value("destination");
    const destinations = destination.split("·").map(item => item.trim()).filter(Boolean);
    const startDate = value("startDate");
    const endDate = value("endDate");
    const country = findCountry(value("countryCode"));
    if (!country || !startDate || !endDate || !destination) {
      window.alert("시작일·종료일·국가·여행지를 모두 입력해 주세요.");
      return;
    }
    if (endDate < startDate) {
      window.alert("종료일은 시작일보다 빠르거나 같아야 합니다.");
      return;
    }
    const period = formatDateRange(startDate, endDate);
    const yearMatch = startDate.match(/20\d{2}/);
    trip.title = value("name") || `${country.name} · ${destination}`;
    trip.shortTitle = destination;
    trip.heroYear = yearMatch ? yearMatch[0] : trip.heroYear || "TRAVEL";
    trip.heroDestinationA = destinations[0] || destination;
    trip.heroDestinationB = destinations[1] || "";
    trip.subtitle = `${country.name} · ${destination}`;
    trip.dateLabel = period;
    trip.dateRange = period;
    trip.startDate = startDate;
    trip.endDate = endDate;
    trip.countryCode = country.code;
    trip.countryName = country.name;
    trip.countryFlag = country.flag;
    trip.destination = destination;
    saveTripCollection();
    renderTripNavigator();
    renderSelectedTrip();
  }

  if (editorState.mode === "flight") {
    trip.summary = trip.summary || { flights: [], stays: [] };
    const existingFlight = index === null || index === undefined ? null : (trip.summary.flights[index] || null);
    const fromTime = readTimeValue(form, "fromTime");
    const toTime = readTimeValue(form, "toTime");
    if (!fromTime || !toTime) {
      window.alert("출발 시각과 도착 시각을 모두 선택해 주세요.");
      return;
    }
    const flight = { id: existingFlight?.id || `flight-${Date.now()}`, label: value("label"), date: value("date"), title: value("title"), airline: value("airline"), fromCode: value("fromCode"), fromTime, fromPlace: value("fromPlace"), toCode: value("toCode"), toTime, toPlace: value("toPlace") };
    if (index === null || index === undefined) trip.summary.flights.push(flight);
    else trip.summary.flights[index] = flight;
    syncFlightTransport(trip);
    syncSummaryToSchedule(trip);
    saveTripCollection();
    renderSelectedTrip();
  }

  if (editorState.mode === "stay") {
    trip.summary = trip.summary || { flights: [], stays: [] };
    const startDate = value("startDate");
    const endDate = value("endDate");
    if (!startDate || !endDate) {
      window.alert("체크인 날짜와 체크아웃 날짜를 선택해 주세요.");
      return;
    }
    if (endDate < startDate) {
      window.alert("체크아웃 날짜는 체크인 날짜보다 빠를 수 없습니다.");
      return;
    }
    const existingStay = index === null || index === undefined ? null : (trip.summary.stays[index] || null);
    const attachment = await getAttachmentFromForm(form, existingStay?.attachment);
    const stay = { title: value("title"), region: value("region"), startDate, endDate, dates: `숙박 · ${formatDateRange(startDate, endDate)}`, note: value("note"), status: value("status") || "planned", mapUrl: value("mapUrl"), attachment };
    if (index === null || index === undefined) trip.summary.stays.push(stay);
    else trip.summary.stays[index] = stay;
    syncSummaryToSchedule(trip);
    saveTripCollection();
    renderSelectedTrip();
  }

  if (editorState.mode === "day") {
    const isoDate = value("date");
    if (!isoDate) {
      window.alert("날짜를 캘린더에서 선택해 주세요.");
      return;
    }
    const dateObject = new Date(`${isoDate}T00:00:00`);
    const day = { id: editorState.context.dayId || `day-${isoDate}`, isoDate, day: value("day"), date: formatDateLabel(isoDate), shortDate: `${dateObject.getMonth() + 1}/${dateObject.getDate()}`, weekday: weekdayLabels[dateObject.getDay()], location: value("location"), locationDetail: value("locationDetail"), events: index === null || index === undefined ? [] : (trip.days[index]?.events || []) };
    if (index === null || index === undefined) trip.days.push(day);
    else trip.days[index] = day;
    saveTripCollection();
    renderSelectedTrip();
  }

  if (editorState.mode === "event") {
    const day = trip.days.find(item => item.id === editorState.context.dayId);
    if (!day) return;
    const existingEvent = editorState.context.eventIndex === null || editorState.context.eventIndex === undefined ? null : (day.events[editorState.context.eventIndex] || null);
    const attachment = await getAttachmentFromForm(form, existingEvent?.attachment);
    const eventTime = readTimeValue(form, "time");
    if (!eventTime) {
      window.alert("시간을 드롭다운에서 선택해 주세요.");
      return;
    }
    const eventItem = { time: eventTime, type: value("type"), title: value("title"), place: value("place"), note: value("note"), status: value("status") || "planned", mapUrl: value("mapUrl"), reservationUrl: value("reservationUrl"), attachment, mealType: form.elements.meal?.checked ? value("mealType") : "", meal: Boolean(form.elements.meal?.checked), movement: Boolean(form.elements.movement?.checked) };
    if (editorState.context.eventIndex === null || editorState.context.eventIndex === undefined) day.events.push(eventItem);
    else day.events[editorState.context.eventIndex] = eventItem;
    syncFoodPlanFromEvents(trip);
    saveTripCollection();
    renderSelectedTrip();
  }

  if (editorState.mode === "transport") {
    trip.transport = trip.transport || [];
    const category = value("category") || "bus";
    const routeTime = readTimeValue(form, "time");
    if (!value("date") || !routeTime) {
      window.alert("날짜와 출발 시각을 모두 선택해 주세요.");
      return;
    }
    const route = { date: value("date"), code: value("code"), time: routeTime, from: value("from"), to: value("to"), detail: value("detail") };
    let transportIndex = editorState.context.transportIndex;
    if (transportIndex === null || transportIndex === undefined) {
      transportIndex = trip.transport.findIndex(item => item.category === category);
      if (transportIndex < 0) {
        trip.transport.push({ category, label: value("label"), routes: [route] });
      } else {
        trip.transport[transportIndex].routes.push(route);
      }
    } else {
      trip.transport[transportIndex].category = category;
      trip.transport[transportIndex].label = value("label");
      const routeIndex = editorState.context.routeIndex;
      if (routeIndex === null || routeIndex === undefined) trip.transport[transportIndex].routes.push(route);
      else trip.transport[transportIndex].routes[routeIndex] = route;
    }
    saveTripCollection();
    renderSelectedTrip();
  }

  if (editorState.mode === "route") {
    trip.routeFlow = [...document.querySelectorAll("#route-editor-list .route-editor-row")].map(row => ({ day: row.querySelector("[data-route-day]").value.trim(), city: row.querySelector("[data-route-city]").value.trim(), detail: row.querySelector("[data-route-detail]").value.trim() })).filter(route => route.day || route.city || route.detail);
    saveTripCollection();
    renderSelectedTrip();
  }

  if (editorState.mode === "checklist") {
    const items = [...document.querySelectorAll("#checklist-editor-list [data-check-label]")].map(input => input.value.trim()).filter(Boolean);
    const checklistTrip = getSelectedTrip();
    if (checklistTrip) {
      checklistTrip.checklist = items;
      saveTripCollection();
    }
    renderChecklist();
  }

  if (editorState.mode === "categories") {
    const rows = [...document.querySelectorAll("#category-editor-list .category-editor-row")];
    const categories = rows.map(row => ({ key: row.dataset.categoryKey, icon: row.querySelector("[data-category-icon]").value.trim() || "•", label: row.querySelector("[data-category-label]").value.trim() || "분류" }));
    if (!categories.length) {
      window.alert("분류는 하나 이상 남겨두어야 합니다.");
      return;
    }
    const keys = new Set(categories.map(category => category.key));
    trip.categories = categories;
    trip.days.forEach(day => day.events.forEach(item => { if (!keys.has(item.type)) item.type = categories[0].key; }));
    saveTripCollection();
    renderSelectedTrip();
  }

  closeEditorModal();
}

function inferMealType(event) {
  if (event?.mealType && ["아침", "점심", "저녁"].includes(event.mealType)) return event.mealType;
  const text = `${event?.title || ""} ${event?.time || ""}`.toLowerCase();
  if (/breakfast|아침/.test(text)) return "아침";
  if (/lunch|점심/.test(text)) return "점심";
  if (/dinner|저녁/.test(text)) return "저녁";
  const hour = Number(text.match(/\b([01]?\d|2[0-3])(?::\d{2})?/)?.[1]);
  if (!Number.isNaN(hour)) {
    if (hour < 11) return "아침";
    if (hour < 16) return "점심";
    return "저녁";
  }
  return "";
}

function mealItemsForDay(day) {
  const mealNames = ["아침", "점심", "저녁"];
  const mealMap = {};
  const unresolved = [];
  (day.events || []).filter(event => event.meal).forEach(event => {
    const labelMatch = String(event.title || "").match(/^(BREAKFAST|LUNCH|DINNER)\s*·?\s*(.*)$/i);
    const meal = inferMealType(event);
    const title = labelMatch?.[2]?.trim() || event.place || event.title || "미정";
    const item = { meal, title, detail: event.place && title !== event.place ? event.place : "", status: event.status || "planned" };
    if (meal && !mealMap[meal]) mealMap[meal] = item;
    else if (!meal) unresolved.push(item);
    else unresolved.push(item);
  });
  unresolved.forEach(item => {
    const emptyMeal = mealNames.find(meal => !mealMap[meal]);
    if (emptyMeal) {
      item.meal = emptyMeal;
      mealMap[emptyMeal] = item;
    }
  });
  return mealNames.map(meal => mealMap[meal] || { meal, title: "미정", detail: "", status: "tbd" });
}

function syncFoodPlanFromEvents(trip) {
  trip.foodPlan = buildFoodPlanForRender(trip);
}

function getFlightDateValue(flight, trip) {
  const year = String(trip?.startDate || trip?.heroYear || "").slice(0, 4);
  if (/^20\d{2}-\d{2}-\d{2}$/.test(flight?.date || "")) return flight.date;
  return isoDateFromText(flight?.date, year) || isoDateFromText(flight?.label, year) || trip?.startDate || "";
}

function getDayIsoDate(day, trip) {
  return day?.isoDate || isoDateFromText(day?.date || day?.shortDate, String(trip?.startDate || "").slice(0, 4));
}

function ensureTripDay(trip, isoDate, location = "") {
  if (!isoDate) return null;
  trip.days = Array.isArray(trip.days) ? trip.days : [];
  const existing = trip.days.find(day => getDayIsoDate(day, trip) === isoDate);
  if (existing) {
    existing.isoDate = isoDate;
    if (!existing.location && location) existing.location = location;
    return existing;
  }
  const date = new Date(`${isoDate}T00:00:00`);
  const day = {
    id: `day-${isoDate}`,
    isoDate,
    day: `DAY ${trip.days.length + 1}`,
    date: formatDateLabel(isoDate),
    shortDate: `${date.getMonth() + 1}/${date.getDate()}`,
    weekday: weekdayLabels[date.getDay()],
    location,
    locationDetail: "",
    events: []
  };
  trip.days.push(day);
  trip.days.sort((a, b) => getDayIsoDate(a, trip).localeCompare(getDayIsoDate(b, trip)));
  return day;
}

function addAutoScheduleEvent(day, autoSource, eventData, matcher) {
  const existing = day.events.find(event => event.autoSource === autoSource) || day.events.filter(event => !event.autoSource && matcher(event)).sort((a, b) => Number(b.time === "숙박") - Number(a.time === "숙박"))[0];
  if (existing) Object.assign(existing, eventData, { autoSource });
  else day.events.push({ ...eventData, autoSource });
}

function syncSummaryToSchedule(trip) {
  if (!trip) return;
  trip.days = Array.isArray(trip.days) ? trip.days : [];
  trip.days.forEach(day => {
    day.events = Array.isArray(day.events) ? day.events.filter(event => !event.autoSource) : [];
  });

  (trip.summary?.flights || []).forEach((flight, index) => {
    flight.id = flight.id || `flight-${index}-${Date.now()}`;
    const date = getFlightDateValue(flight, trip);
    const day = ensureTripDay(trip, date, flight.title || "항공 이동");
    if (!day) return;
    const source = `summary-flight-${flight.id}`;
    const common = { type: "flight", status: "confirmed", movement: true };
    const departureTime = flight.fromTime || "출발";
    const arrivalTime = flight.toTime || "도착";
    const routeNote = `${flight.fromCode || ""} ${flight.fromTime || ""} → ${flight.toCode || ""} ${flight.toTime || ""}`.trim();
    addAutoScheduleEvent(day, `${source}-departure`, {
      ...common,
      time: departureTime,
      title: "항공편 출발",
      place: `${flight.fromPlace || flight.fromCode || "출발 공항"} · ${flight.airline || ""}`.trim(),
      note: routeNote
    }, event => event.type === "flight" && event.time === departureTime);
    addAutoScheduleEvent(day, `${source}-arrival`, {
      ...common,
      time: arrivalTime,
      title: "항공편 도착",
      place: flight.toPlace || flight.toCode || "도착 공항",
      note: routeNote
    }, event => event.type === "flight" && event.time === arrivalTime);
  });

  (trip.summary?.stays || []).forEach((stay, index) => {
    stay.id = stay.id || `stay-${index}-${Date.now()}`;
    const stayDates = getStayDateValues(stay, trip);
    const day = ensureTripDay(trip, stayDates.startDate, stay.region || stay.title || "숙소");
    if (!day) return;
    const source = `summary-stay-${stay.id}-checkin`;
    addAutoScheduleEvent(day, source, {
      type: "hotel",
      time: "숙박",
      title: `체크인 · ${stay.title || "숙소"}`,
      place: stay.region || stay.title || "숙소",
      note: stay.dates || "숙박 일정",
      status: stay.status || "planned"
    }, event => event.type === "hotel" && `${event.title || ""} ${event.place || ""}`.includes(stay.title || "숙소"));
  });
}

function syncFlightTransport(trip) {
  trip.transport = trip.transport || [];
  const flights = trip.summary?.flights || [];
  const flightTransportIndex = trip.transport.findIndex(item => item.category === "flight");
  if (!flights.length) {
    if (flightTransportIndex >= 0) trip.transport.splice(flightTransportIndex, 1);
    return;
  }
  const routes = flights.map(flight => ({
    date: flight.date || (flight.label?.match(/\d{2}\.\d{2}/)?.[0] || ""),
    code: (flight.airline || "").split(" ").pop() || "",
    time: flight.fromTime || "",
    from: `${flight.fromCode || ""} ${flight.fromTime || ""}`.trim(),
    to: `${flight.toCode || ""} ${flight.toTime || ""}`.trim(),
    detail: ""
  }));
  if (flightTransportIndex >= 0) trip.transport[flightTransportIndex].routes = routes;
  else trip.transport.unshift({ category: "flight", label: "FLIGHT", routes });
}

function foodPlanForRender(trip) {
  return buildFoodPlanForRender(trip);
}

function buildFoodPlanForRender(trip) {
  return trip.days.map(day => ({
    date: day.shortDate || day.date || "",
    weekday: day.weekday || "",
    items: mealItemsForDay(day)
  }));
}

function deleteFlight(index) {
  const trip = getSelectedTrip();
  const flight = trip?.summary?.flights?.[index];
  if (!flight || !window.confirm(`“${flight.title || "항공편"}”을 삭제할까요?`)) return;
  trip.summary.flights.splice(index, 1);
  syncFlightTransport(trip);
  syncSummaryToSchedule(trip);
  saveTripCollection();
  renderSelectedTrip();
}

function deleteStay(index) {
  const trip = getSelectedTrip();
  const stay = trip?.summary?.stays?.[index];
  if (!stay || !window.confirm(`“${stay.title || "숙소"}”를 삭제할까요?`)) return;
  trip.summary.stays.splice(index, 1);
  syncSummaryToSchedule(trip);
  saveTripCollection();
  renderSelectedTrip();
}

function deleteEvent(dayId, eventIndex) {
  const trip = getSelectedTrip();
  const day = trip?.days?.find(item => item.id === dayId);
  const event = day?.events?.[eventIndex];
  if (!event || !window.confirm(`“${event.title || "일정"}”을 삭제할까요?`)) return;
  day.events.splice(eventIndex, 1);
  syncFoodPlanFromEvents(trip);
  saveTripCollection();
  renderSelectedTrip();
}

function deleteDay(dayId) {
  const trip = getSelectedTrip();
  const index = trip?.days?.findIndex(item => item.id === dayId);
  if (index === undefined || index < 0 || !window.confirm(`“${trip.days[index].date || trip.days[index].day}” 일자를 삭제할까요?`)) return;
  trip.days.splice(index, 1);
  syncFoodPlanFromEvents(trip);
  saveTripCollection();
  renderSelectedTrip();
}

function deleteTransport(transportIndex, routeIndex) {
  const trip = getSelectedTrip();
  const item = trip?.transport?.[transportIndex];
  if (!item || !item.routes?.[routeIndex] || !window.confirm("이 교통 정보를 삭제할까요?")) return;
  item.routes.splice(routeIndex, 1);
  if (!item.routes.length) trip.transport.splice(transportIndex, 1);
  saveTripCollection();
  renderSelectedTrip();
}

function handleActionClick(element) {
  const action = element.dataset.action;
  if (action === "edit-trip") openTripEditor();
  if (action === "add-flight") openFlightEditor();
  if (action === "edit-flight") openFlightEditor(Number(element.dataset.flightIndex));
  if (action === "delete-flight") deleteFlight(Number(element.dataset.flightIndex));
  if (action === "add-stay") openStayEditor();
  if (action === "edit-stay") openStayEditor(Number(element.dataset.stayIndex));
  if (action === "delete-stay") deleteStay(Number(element.dataset.stayIndex));
  if (action === "add-day") openDayEditor();
  if (action === "edit-day") {
    const trip = getSelectedTrip();
    const dayIndex = trip?.days?.findIndex(day => day.id === element.dataset.dayId) ?? -1;
    if (dayIndex >= 0) openDayEditor(dayIndex);
  }
  if (action === "delete-day") deleteDay(element.dataset.dayId);
  if (action === "add-event") openEventEditor(element.dataset.dayId);
  if (action === "edit-event") openEventEditor(element.dataset.dayId, Number(element.dataset.eventIndex));
  if (action === "delete-event") deleteEvent(element.dataset.dayId, Number(element.dataset.eventIndex));
  if (action === "manage-categories") openCategoryEditor();
  if (action === "add-transport") openTransportEditor();
  if (action === "edit-transport" || action === "edit-transport-label") openTransportEditor(Number(element.dataset.transportIndex), action === "edit-transport" ? Number(element.dataset.routeIndex) : 0);
  if (action === "delete-transport") deleteTransport(Number(element.dataset.transportIndex), Number(element.dataset.routeIndex));
  if (action === "manage-route") openRouteEditor();
  if (action === "manage-checklist") openChecklistEditor();
}

function renderRouteFlow(route) {
  return route.map((stop, index) => `${index > 0 ? '<i>→</i>' : ""}<div class="route-stop"><b>${escapeHtml(stop.day)}</b><span>${escapeHtml(stop.city)}<br /><small>${escapeHtml(stop.detail || "")}</small></span></div>`).join("");
}

function renderSummary(summary, trip) {
  const flights = summary.flights || [];
  const stays = summary.stays || [];
  return `
    <article class="info-card flight-card">
      <div class="card-label"><span class="icon-badge">✈</span><span>FLIGHT</span></div>
      ${flights.length ? flights.map((flight, index) => `<div class="flight-row"><div><small>${escapeHtml(flight.label)}</small><h3>${escapeHtml(flight.title)}</h3><p>${escapeHtml(flight.airline)}</p></div><div class="airport"><b>${escapeHtml(flight.fromCode)}</b><span>${escapeHtml(flight.fromTime)}</span><small>${escapeHtml(flight.fromPlace)}</small></div><div class="flight-arrow">→</div><div class="airport"><b>${escapeHtml(flight.toCode)}</b><span>${escapeHtml(flight.toTime)}</span><small>${escapeHtml(flight.toPlace)}</small></div><div class="item-actions"><button class="icon-action" data-action="edit-flight" data-flight-index="${index}" type="button" title="항공편 수정">✎</button><button class="icon-action danger" data-action="delete-flight" data-flight-index="${index}" type="button" title="항공편 삭제">×</button></div></div>`).join("") : emptyPanel("아직 항공 정보가 없습니다.", "항공편을 추가해 보세요.")}
    </article>
    <article class="info-card stay-card">
      <div class="card-label"><span class="icon-badge">⌂</span><span>STAY</span></div>
      ${stays.length ? stays.map((stay, index) => `<div class="stay-item ${stay.status === "tbd" ? "tbd-block" : ""}"><div class="stay-title"><h3>${formatMultiline(stay.title)}</h3><div class="card-actions">${statusBadge(stay.status)}<button class="icon-action" data-action="edit-stay" data-stay-index="${index}" type="button" title="숙소 수정">✎</button><button class="icon-action danger" data-action="delete-stay" data-stay-index="${index}" type="button" title="숙소 삭제">×</button></div></div><p>${escapeHtml(stay.region)}</p><small>${escapeHtml(stay.dates)}</small>${stay.note ? `<p class="muted-note">${escapeHtml(stay.note)}</p>` : ""}${stay.attachment ? renderAttachment(stay.attachment) : ""}</div>${index < stays.length - 1 ? '<div class="stay-divider"></div>' : ""}`).join("") : emptyPanel("아직 숙소 정보가 없습니다.", "숙소를 추가해 보세요.")}
    </article>
  `;
}

function eventTimeSortValue(value) {
  const text = String(value || "").trim().toLowerCase();
  const clock = text.match(/(?:^|\s)([01]?\d|2[0-3])[:.]([0-5]\d)(?:\s|$)/);
  if (clock) return Number(clock[1]) * 60 + Number(clock[2]);
  const koreanClock = text.match(/(오전|오후)?\s*([1-9]|1[0-2])시(?:\s*([0-5]\d)분?)?/);
  if (koreanClock) {
    let hour = Number(koreanClock[2]);
    const minute = Number(koreanClock[3] || 0);
    if (koreanClock[1] === "오후" && hour < 12) hour += 12;
    if (koreanClock[1] === "오전" && hour === 12) hour = 0;
    return hour * 60 + minute;
  }
  if (/^(아침|오전|morning)/.test(text)) return 8 * 60;
  if (/^(점심|오후|afternoon)/.test(text)) return 13 * 60;
  if (/^(저녁|evening)/.test(text)) return 18 * 60;
  if (/숙박|overnight/.test(text)) return 23 * 60 + 59;
  return Number.POSITIVE_INFINITY;
}

function sortedEventsForDisplay(events = []) {
  return events
    .map((event, index) => ({ event, index }))
    .sort((left, right) => eventTimeSortValue(left.event.time) - eventTimeSortValue(right.event.time) || left.index - right.index);
}

function renderDay(day) {
  const events = sortedEventsForDisplay(day.events || []);
  return `
    <article id="${escapeHtml(day.id)}" class="day-card">
      <header class="day-header"><div><p class="eyebrow">${escapeHtml(day.day)}</p><h3>${escapeHtml(day.date)}</h3></div><div class="day-header-actions"><div class="day-location">${escapeHtml(day.location)}<small>${escapeHtml(day.locationDetail)}</small></div><button class="day-action" data-action="add-event" data-day-id="${escapeHtml(day.id)}" type="button">+ 일정</button><button class="day-action" data-action="edit-day" data-day-id="${escapeHtml(day.id)}" type="button">수정</button><button class="day-action" data-action="delete-day" data-day-id="${escapeHtml(day.id)}" type="button">삭제</button></div></header>
      <div class="timeline">${events.map(({ event, index }) => renderEvent(event, day.id, index)).join("")}</div>
    </article>
  `;
}

function renderEvent(event, dayId, eventIndex) {
  const type = getCategoryInfo(getSelectedTrip(), event.type);
  const extraLabels = [event.meal ? '<span class="meal-label">식사</span>' : "", event.movement ? '<span class="movement-label">이동</span>' : ""].join("");
  const links = [
    event.mapUrl ? `<a class="text-link" href="${escapeHtml(event.mapUrl)}" target="_blank" rel="noreferrer">지도 열기 ↗</a>` : "",
    event.reservationUrl ? `<a class="text-link" href="${escapeHtml(event.reservationUrl)}" target="_blank" rel="noreferrer">예약 확인 ↗</a>` : ""
  ].join("");

  return `
    <div class="timeline-item ${event.status === "tbd" ? "tbd-item" : ""}">
      <div class="timeline-time">${escapeHtml(event.time)}</div>
      <div class="timeline-line" aria-hidden="true"></div>
      <div class="timeline-content">
        <div class="timeline-meta"><span class="type-badge">${type.icon} ${type.label}</span>${statusBadge(event.status)}${extraLabels}</div>
        <h4>${escapeHtml(event.title)}</h4>
        ${event.place ? `<p class="timeline-place">${escapeHtml(event.place)}</p>` : ""}
        ${event.note ? `<p class="timeline-note">${formatMultiline(event.note)}</p>` : ""}
        ${links ? `<div class="timeline-links">${links}</div>` : ""}
        ${event.attachment ? renderAttachment(event.attachment) : ""}
      </div>
      <div class="item-actions"><button class="icon-action" data-action="edit-event" data-day-id="${escapeHtml(dayId)}" data-event-index="${eventIndex}" type="button" title="일정 수정">✎</button><button class="icon-action danger" data-action="delete-event" data-day-id="${escapeHtml(dayId)}" data-event-index="${eventIndex}" type="button" title="일정 삭제">×</button></div>
    </div>
  `;
}

function renderFoodDay(day) {
  return `<article class="food-day"><div class="food-day-header"><strong>${escapeHtml(day.date)} ${escapeHtml(day.weekday)}</strong><small>FOOD</small></div>${day.items.map(item => `
    <div class="food-item ${item.status === "tbd" ? "is-tbd" : ""}"><span class="meal-time">${escapeHtml(item.meal)}</span><div><strong>${escapeHtml(item.title)}</strong>${item.detail ? `<p>${escapeHtml(item.detail)}</p>` : ""}${item.status === "tbd" ? '<span class="food-badge">미정</span>' : ""}</div></div>
  `).join("")}</article>`;
}

function renderTransport(item, itemIndex) {
  const isFlight = item.category === "flight";
  const trip = getSelectedTrip();
  return `<article class="transport-card ${isFlight ? "flight-transport" : ""}"><div class="transport-label"><span>${isFlight ? "✈" : "🚌"}</span>${escapeHtml(item.label)}<button class="small-action" data-action="edit-transport-label" data-transport-index="${itemIndex}" type="button">이름 수정</button></div>${item.routes.map((route, routeIndex) => `
    <div class="transport-route"><div><small>${escapeHtml(formatTransportDate(route, trip))}</small><strong>${escapeHtml(isFlight ? (route.from || "").split(" ")[0] : route.time)}</strong><p>${escapeHtml(route.from)}</p></div><div class="transport-arrow">→</div><div><small>${escapeHtml(isFlight ? route.code : route.code + "편")}</small><strong>${escapeHtml(isFlight ? (route.to || "").split(" ")[0] : "")}</strong><p>${escapeHtml(route.to)}</p></div><div class="item-actions"><button class="icon-action" data-action="edit-transport" data-transport-index="${itemIndex}" data-route-index="${routeIndex}" type="button" title="교통 수정">✎</button><button class="icon-action danger" data-action="delete-transport" data-transport-index="${itemIndex}" data-route-index="${routeIndex}" type="button" title="교통 삭제">×</button></div></div>
    ${route.detail ? `<div class="bus-detail"><b>${escapeHtml(route.time || "")}</b> · ${escapeHtml(route.detail)}</div>` : ""}
  `).join("")}</article>`;
}

// ================================
// 날짜 네비게이션
// ================================
function bindDayNavigation() {
  document.querySelectorAll(".day-nav-button").forEach(button => {
    button.onclick = () => {
      document.querySelectorAll(".day-nav-button").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      const target = button.dataset.target;
      if (target !== "all") document.querySelector(`#${target}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    };
  });
}

// ================================
// 체크리스트 · 공유 저장소 저장
// ================================
const defaultChecklistItems = ["여권", "항공권", "버스 승차권", "숙소 예약", "eSIM", "환전", "여행자보험", "보조배터리", "충전기", "우산"];

function getChecklistItems() {
  const trip = getSelectedTrip();
  return Array.isArray(trip?.checklist) ? trip.checklist : defaultChecklistItems;
}

function renderChecklist() {
  const trip = getSelectedTrip();
  const checklistItems = getChecklistItems();
  const saved = trip?.checklistState || {};
  const container = document.querySelector("#checklist");
  container.innerHTML = checklistItems.map((item, index) => `<label class="check-item ${saved[index] ? "checked" : ""}"><input type="checkbox" data-check-index="${index}" ${saved[index] ? "checked" : ""} /><span>${item}</span></label>`).join("");
  updateCheckProgress(saved);
  container.querySelectorAll("input").forEach(input => input.addEventListener("change", event => {
    const currentTrip = getSelectedTrip();
    if (!currentTrip) return;
    const next = { ...(currentTrip.checklistState || {}) };
    next[event.target.dataset.checkIndex] = event.target.checked;
    currentTrip.checklistState = next;
    saveTripCollection();
    event.target.closest(".check-item").classList.toggle("checked", event.target.checked);
    updateCheckProgress(next);
  }));
}

function updateCheckProgress(saved) {
  const checklistItems = getChecklistItems();
  const completed = checklistItems.filter((_, index) => saved[index]).length;
  document.querySelector("#check-progress").textContent = `${completed} / ${checklistItems.length}`;
}

// ================================
// 메모 · 공유 저장소 저장
// ================================
function renderMemo() {
  const memo = document.querySelector("#travel-memo");
  if (memo) memo.value = getSelectedTrip()?.memo || "";
}

function bindMemo() {
  const memo = document.querySelector("#travel-memo");
  const status = document.querySelector("#memo-status");
  renderMemo();
  memo.addEventListener("input", () => {
    const trip = getSelectedTrip();
    if (!trip) return;
    trip.memo = memo.value;
    saveTripCollection();
    status.textContent = "방금 저장됨 · 공유 저장소에 보관됩니다.";
  });
}

// ================================
// 시작
// ================================
async function startApp() {
  updateSyncStatus(sharedApiUrl ? "공유 저장소 불러오는 중" : "공유 저장소 URL 미설정", !sharedApiUrl);
  let shouldSave = false;

  try {
    const remote = await loadSharedTripCollection();
    tripCollection = remote.trips.length ? remote.trips : cloneTrips(initialTripCollection);
    selectedTripId = tripCollection[0]?.id || "";
    shouldSave = Boolean(sharedApiUrl);
    updateSyncStatus(!remote.configured ? "공유 저장소 URL 미설정" : (remote.trips.length ? "공유 저장소 연결됨" : "기본 여행을 공유 저장소에 등록하는 중"), !remote.configured);
  } catch (error) {
    tripCollection = cloneTrips(initialTripCollection);
    selectedTripId = tripCollection[0]?.id || "";
    updateSyncStatus("공유 저장소 연결 실패", true);
    console.error(error);
  }

  tripCollection.forEach(trip => {
    syncSummaryToSchedule(trip);
    syncFoodPlanFromEvents(trip);
  });
  renderTripNavigator();
  renderSelectedTrip();
  bindMemo();
  bindTripCreation();
  bindEditorControls();
  if (shouldSave) saveTripCollection();
}

startApp();
