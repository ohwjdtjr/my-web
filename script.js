// 본인만의 고유한 이름 설정
const WORKSPACE = 's1ro75-portfolio';
const KEY = 'visits';

// 1. 먼저 카운터를 1 올리는(up) 요청을 보냅니다.
fetch('https://api.counterapi.dev/v1/' + WORKSPACE + '/' + KEY + '/up')
  .then(res => {
    // 만약 카운터가 서버에 아직 생성되지 않았다면(404), 새로 생성(create)합니다.
    if (res.status === 404) {
      return fetch('https://api.counterapi.dev/v1/' + WORKSPACE + '/' + KEY + '/set?val=1');
    }
    return res;
  })
  .then(res => res.json())
  .then(data => {
    const countElement = document.getElementById('visit-count');
    if (data && data.count) {
      countElement.textContent = data.count;
    } else if (data && data.value) {
      countElement.textContent = data.value;
    }
  })
  .catch(err => {
    console.error('카운터 불러오기 에러:', err);
    document.getElementById('visit-count').textContent = '-';
  });
