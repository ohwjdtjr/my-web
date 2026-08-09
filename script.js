// 본인만의 고유 키 이름 (영문/숫자/하이픈만 사용)
const NAMESPACE = 's1ro75-xyz-profile';
const KEY = 'visits';

// 문자열을 + 로 결합하여 따옴표/백틱 변환 에러를 완전 차단합니다.
const apiUrl = 'https://api.moecounter.azurewebsites.net/api/' + NAMESPACE + '/visits?name=' + KEY;

fetch(apiUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const countElement = document.getElementById('visit-count');
    // 숫자가 성공적으로 들어오면 화면에 반영
    if (data && data.value) {
      countElement.textContent = data.value;
    } else {
      countElement.textContent = '1';
    }
  })
  .catch(function(error) {
    console.error('카운터 에러:', error);
    // 에러 발생 시 기본값 표시
    const countElement = document.getElementById('visit-count');
    if (countElement) {
      countElement.textContent = '-';
    }
  });
