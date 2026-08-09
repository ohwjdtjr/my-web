// 카운터 API 호출 (ohwjdtjr-profile 이름으로 카운트)
fetch('https://api.moecounter.azurewebsites.net/api/ohwjdtjr-profile/visits?name=visits')
  .then(response => response.json())
  .then(data => {
    const countElement = document.getElementById('visit-count');
    // API에서 받은 숫자(value)를 화면에 표시
    if (data && data.value) {
      countElement.textContent = data.value;
    }
  })
  .catch(error => {
    console.error('방문자 카운트 불러오기 실패:', error);
    document.getElementById('visit-count').textContent = '-';
  });
