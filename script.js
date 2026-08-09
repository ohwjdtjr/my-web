// 본인의 웹사이트 주소 또는 고유 키값 지정
const siteUrl = 'https://s1ro75.xyz';

// Hits API를 호출하여 방문자 수 카운팅
fetch('https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=${encodeURIComponent(siteUrl)}')
  .then(response => response.text())
  .then(svgText => {
    // SVG 이미지 파일 안에서 숫자(방문자 수) 텍스트만 정규식으로 뽑아내는 방식입니다.
    const match = svgText.match(/<text[^>]*>(\d+)<\/text>/g);
    const countElement = document.getElementById('visit-count');
    
    if (match && match.length > 0) {
      // 숫자가 담긴 텍스트 추출
      const lastText = match[match.length - 1];
      const number = lastText.replace(/<[^>]+>/g, '').trim();
      countElement.textContent = number;
    } else {
      countElement.textContent = '1';
    }
  })
  .catch(error => {
    console.error('카운터 로딩 실패:', error);
    document.getElementById('visit-count').textContent = '-';
  });
