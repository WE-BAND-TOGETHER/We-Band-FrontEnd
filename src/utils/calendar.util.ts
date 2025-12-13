import { DAYNAMES } from '@constants/calendar.constants';

//"2025-02-31"에서 연, 월, 일을 숫자로 파싱
export const parseDateString = (dateString: string) => {
  const d = new Date(dateString);
  return {
    year: d.getFullYear(),
    month: d.getMonth() + 1,
    date: d.getDate(),
  };
};

export const getWeekDates = (year: number, month: number, date: number) => {
  const week: { month: number; date: number; day: string }[] = [];

  for (let i = 0; i < 7; i++) {
    const current = new Date(year, month - 1, date + i);
    week.push({
      month: current.getMonth() + 1,
      date: current.getDate(),
      day: DAYNAMES[current.getDay()],
    });
  }

  return week;
};

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
