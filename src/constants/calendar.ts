// src/constants/calendar.ts

// 요일 라벨 (피그마처럼 한 글자)
export const CALENDAR_WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'] as const;

// 월 라벨 (피그마 예시: "2025  MAR")
export const CALENDAR_MONTH_LABELS = [
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

// (필요하면) 보기 모드 라벨
export const CALENDAR_VIEW_MODES = ['월', '주', '일'] as const;
