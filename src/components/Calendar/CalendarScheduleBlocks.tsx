import { useEffect, useState } from 'react';
import * as S from './Calendar.styled';
import { BLOCKNUM, WEEK } from '@constants/calendar.constants';
import { postMySchedule } from '@api/calendar';
import { useRef } from 'react';

interface WeeklySchedule {
  date: string;
  blocks: number[];
}

interface CalendarScheduleProps {
  totalUser: number;
  weeklySchedules: WeeklySchedule[];
  edit: boolean;
  baseDate: Date;
  onSaved?: (updatedDays: WeeklySchedule[]) => void;
}

const CalendarScheduleBlocks = ({
  totalUser,
  weeklySchedules,
  edit,
  baseDate,
  onSaved,
}: CalendarScheduleProps) => {
  const [localSchedules, setLocalSchedules] = useState<WeeklySchedule[]>([]);
  const prevEditRef = useRef<boolean>(edit);

  useEffect(() => {
    const wasEdit = prevEditRef.current;

    if (wasEdit && !edit) {
      if (!localSchedules.length) return;

      const payload = {
        days: localSchedules.map(({ date, blocks }) => ({
          date,
          blocks,
        })),
      };

      postMySchedule(baseDate, payload)
        .then(() => {
          onSaved?.(localSchedules);
        })
        .catch((err) => {
          console.error('Failed to save schedule', err);
        });
    }

    prevEditRef.current = edit;
  }, [edit, baseDate, onSaved]);

  // edit 모드 전환 시 동기화
  useEffect(() => {
    setLocalSchedules(weeklySchedules);
  }, [weeklySchedules, edit]);

  // edit 모드에서 schedule 토글 진행
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
      {localSchedules !== undefined &&
        localSchedules.slice(0, WEEK).map((day, weekIdx) => (
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
