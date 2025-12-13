import React, { useEffect, useState } from 'react';
import * as S from './Calendar.styled';
import { BLOCKNUM, WEEK } from '@constants/calendar.constants';

interface WeeklySchedule {
  date: string;
  blocks: number[];
}

interface CalendarScheduleProps {
  totalUser: number;
  weeklySchedules: WeeklySchedule[];
  edit: boolean;
}

const CalendarScheduleBlocks: React.FC<CalendarScheduleProps> = ({
  totalUser,
  weeklySchedules,
  edit,
}) => {
  const [localSchedules, setLocalSchedules] =
    useState<WeeklySchedule[]>(weeklySchedules);

  // edit 모드 전환 시 동기화
  useEffect(() => {
    setLocalSchedules(weeklySchedules);
  }, [weeklySchedules, edit]);

  const toggleSchedule = (weekIdx: number, sectionIdx: number, pos: number) => {
    if (!edit) return;

    const blockIdx = sectionIdx * 2 + pos;

    setLocalSchedules((prev) =>
      prev.map((day, idx) => {
        if (idx !== weekIdx) return day;

        const updatedBlocks = [...day.blocks];
        updatedBlocks[blockIdx] = updatedBlocks[blockIdx] === 0 ? 1 : 0;

        return { ...day, blocks: updatedBlocks };
      }),
    );
  };

  return (
    <>
      {localSchedules.slice(0, WEEK).map((day, weekIdx) => (
        <S.CalendarScheduleLine key={day.date}>
          {Array.from({ length: BLOCKNUM }).map((_, sectionIdx) => {
            const num1 = day.blocks[sectionIdx * 2] ?? 0;
            const num2 = day.blocks[sectionIdx * 2 + 1] ?? 0;

            return (
              <S.CalendarScheduleSection key={sectionIdx}>
                <S.CalendarSchedule
                  $num={num1}
                  $total={totalUser}
                  onClick={() => toggleSchedule(weekIdx, sectionIdx, 0)}
                />
                <S.CalendarSchedule
                  $num={num2}
                  $total={totalUser}
                  onClick={() => toggleSchedule(weekIdx, sectionIdx, 1)}
                />
              </S.CalendarScheduleSection>
            );
          })}
        </S.CalendarScheduleLine>
      ))}
    </>
  );
};

export default CalendarScheduleBlocks;
