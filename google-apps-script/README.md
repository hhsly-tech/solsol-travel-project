# Google Apps Script 연결 방법

1. [script.google.com](https://script.google.com/)에서 새 프로젝트를 만듭니다.
2. `Code.gs`의 내용을 모두 복사해서 붙여넣고 저장합니다.
3. `배포 → 새 배포 → 웹 앱`을 선택합니다.
4. 다음처럼 설정합니다.
   - 실행 사용자: 나
   - 액세스 권한: 링크가 있는 모든 사용자
5. 배포 후 생성된 `/exec` 주소를 복사합니다.
6. 프로젝트 루트의 `api-config.js`에서 주소를 입력합니다.

```js
window.SOLSOL_API_URL = "https://script.google.com/macros/s/배포ID/exec";
```

7. `api-config.js`를 GitHub에 push하면 공유 저장소가 연결됩니다.

여행 데이터는 Apps Script 소유자의 Google Drive에 `solsol-travel-data.json`으로 저장됩니다. 파일 첨부는 `solsol-travel-attachments` 폴더에 업로드되고 링크가 여행 데이터에 기록됩니다.

웹 앱을 “링크가 있는 모든 사용자”로 공개하면 주소를 아는 사람은 여행 데이터를 수정할 수 있습니다. 실제 여권번호·카드번호·민감한 예약정보는 입력하지 않는 것을 권장합니다.
