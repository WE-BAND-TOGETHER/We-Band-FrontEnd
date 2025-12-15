import { DAYNAMES } from '@constants/calendar.constants';
import type { MonthDay } from 'src/types/caledar.type';

// 주간 날짜 배열 생성
export const getWeekDates = (baseDate: Date) => {
  const week: {
    year: number;
    month: number;
    date: number;
    day: string;
  }[] = [];

  const start = new Date(baseDate);

  for (let i = 0; i < 7; i++) {
    const current = new Date(
      start.getFullYear(),
      start.getMonth(),
      start.getDate() + i,
    );

    week.push({
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      date: current.getDate(),
      day: DAYNAMES[current.getDay()],
    });
  }

  return week;
};

// 여러 멤버의 스케줄을 날짜별로 합산
type Day = {
  date: string;
  blocks: number[]; // 0 | 1, length = 30
};
type Member = {
  memberName: string;
  days: Day[];
};
export const sumWeeklyBlocksAsObjects = (
  members: Member[],
): { date: string; blocks: number[] }[] => {
  if (members.length === 0) return [];

  // 기준 날짜 목록 (첫 번째 멤버 기준)
  const dates = members[0].days.map((day) => day.date);

  return dates.map((date) => {
    // 해당 날짜의 모든 멤버 blocks 수집
    const blocksList = members
      .map((member) => member.days.find((day) => day.date === date)?.blocks)
      .filter((blocks): blocks is number[] => Boolean(blocks));

    if (blocksList.length === 0) {
      return { date, blocks: [] };
    }

    const blockLength = blocksList[0].length;
    const summedBlocks = Array(blockLength).fill(0);

    for (const blocks of blocksList) {
      for (let i = 0; i < blockLength; i++) {
        summedBlocks[i] += blocks[i];
      }
    }

    return { date, blocks: summedBlocks };
  });
};

// month calendar days 생성
export const getMonthCalendarDays = (baseDate: Date): MonthDay[] => {
  const year = baseDate.getFullYear();
  const month = baseDate.getMonth(); // 0-based

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const startWeekday = firstDay.getDay();
  const totalDays = lastDay.getDate();

  const days: MonthDay[] = [];

  // 앞쪽 빈칸
  for (let i = 0; i < startWeekday; i++) {
    days.push(null);
  }

  // 실제 날짜
  for (let d = 1; d <= totalDays; d++) {
    days.push({
      year,
      month: month + 1,
      date: d,
    });
  }

  return days;
};

export const isToday = (year: number, month: number, date: number) => {
  const today = new Date();

  return (
    today.getFullYear() === year &&
    today.getMonth() + 1 === month &&
    today.getDate() === date
  );
};

// 선택한 날짜가 속한 주의 시작일(일요일) 반환
export const getStartOfWeek = (date: Date) => {
  const d = new Date(date);
  const day = d.getDay(); // 0(일)~6(토)
  d.setDate(d.getDate() - day); // 일요일 시작
  return d;
};
