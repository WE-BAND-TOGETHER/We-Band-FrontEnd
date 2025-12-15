export type MonthDay = {
  year: number;
  month: number; // 1~12
  date: number;
} | null;

export type CalendarMode = 'MEET' | 'MY' | 'EDIT';
