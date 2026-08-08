// 'ohwjdtjr-profile' 부분은 본인만의 고유한 이름(원하는 단어)으로 지어주시면 됩니다.
const NAMESPACE = 'ohwjdtjr-profile';
const KEY = 'visits';

// API를 통해 방문자 수를 1 증가시키고 데이터를 받아옵니다.
fetch('https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/up')
  .then(response => response.json())
  .then(data => {
    // API에서 되돌려준 방문자 수(data.count)를 화면의 <span id="visit-count">에 넣어줍니다.
    const countElement = document.getElementById('visit-count');
    if (data && data.count) {
      countElement.textContent = data.count;
    }
  })
  .catch(error => {
    console.error('방문자 수를 불러오는 중 오류 발생:', error);
    // 오류 발생 시 기본값 표시
    document.getElementById('visit-count').textContent = '-';
  });
