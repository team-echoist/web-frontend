export function formatDateToYearMonth(dateString: string): string {
    const date = new Date(dateString); // 문자열을 Date 객체로 변환
    const year = date.getFullYear(); // 연도 추출
    const month = date.getMonth() + 1; // 월 추출 (0부터 시작하므로 +1)
    
    return `${year}년 ${month}월`;
  }
  