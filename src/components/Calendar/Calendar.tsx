import * as S from './Calendar.styled';

import CalendarDateList from './CalendarDateList';
import CalendarTimeList from './CalendarTimeList';
import CalendarScheduleBlocks from './CalendarScheduleBlocks';
import type { CalendarMode } from 'src/types/caledar.type';

interface CalendarProps {
  mode: CalendarMode;
  baseDate: Date;
  weeklySchedules: {
    date: string;
    blocks: number[];
  }[];
  totalUser: number;
}

const Calendar = ({
  baseDate,
  mode,
  weeklySchedules,
  totalUser,
}: CalendarProps) => {
  const editable = mode === 'EDIT';

  return (
    <S.CalendarContainer>
      <S.CalendarHeaderWrapper>
        <S.EmptyCell />
        <CalendarDateList noDays={false} baseDate={baseDate} />
      </S.CalendarHeaderWrapper>

      <S.CalendarScheduleContainer>
        <CalendarTimeList />

        <CalendarScheduleBlocks
          totalUser={totalUser}
          weeklySchedules={weeklySchedules}
          edit={editable}
        />
      </S.CalendarScheduleContainer>
    </S.CalendarContainer>
  );
};

export default Calendar;
