// 기본 상수
export const CURRENT_YEAR = new Date().getFullYear();
export const FIRSTDAY = 1;
export const WEEK = 7;

// 시간 블록 관련 상수
export const STARTHOUR = 9;
export const ENDHOUR = 24;
export const BLOCKNUM = ENDHOUR - STARTHOUR;
export const NOSCHEDULE = '0'.repeat(BLOCKNUM * 2);

// 월간, 주간 텍스트
export const MONTHWEEKTOGGLE = ['월', '주'] as const;
export const MONTHNAMES = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
] as const;
export const DAYNAMES = ['일', '월', '화', '수', '목', '금', '토'] as const;

// 캘린더 모드
export const CALENDARMODE = {
  MY: 'MY',
  MEET: 'MEET',
  EDIT: 'EDIT',
} as const;
