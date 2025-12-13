import * as S from './Calendar.styled';

import CalendarDateList from './CalendarDateList';
import CalendarTimeList from './CalendarTimeList';
import CalendarScheduleBlocks from './CalendarScheduleBlocks';

type CalendarMode = 'MEET' | 'MY' | 'EDIT';

interface CalendarProps {
  mode: CalendarMode;
  startDate: string;
  weeklySchedules: {
    date: string;
    blocks: number[];
  }[];
  totalUser: number;
}

const Calendar = ({
  startDate,
  mode,
  weeklySchedules,
  totalUser,
}: CalendarProps) => {
  const editable = mode === 'EDIT';

  return (
    <S.LiteCalendarContainer>
      <CalendarDateList startDate={startDate} />

      <S.CalendarScheduleContainer>
        <CalendarTimeList />

        <CalendarScheduleBlocks
          totalUser={totalUser}
          weeklySchedules={weeklySchedules}
          edit={editable}
        />
      </S.CalendarScheduleContainer>
    </S.LiteCalendarContainer>
  );
};

export default Calendar;
