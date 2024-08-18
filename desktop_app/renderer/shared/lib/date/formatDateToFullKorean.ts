export function formatDateToFullKorean(dateString: string): string {
    // 문자열을 Date 객체로 변환
    const date = new Date(dateString);
    
    // 날짜 포맷 옵션
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    };
    
    // 날짜를 한국어 형식으로 포맷
    const formatter = new Intl.DateTimeFormat('ko-KR', options);
    const formattedDate = formatter.format(date);
  
    // '년', '월', '일'을 붙여서 반환
    return formattedDate.replace(/\./g, '').replace(/(\d+)\s+(\d+)\s+(\d+)/, '$1년 $2월 $3일');
  }