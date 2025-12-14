import * as S from './Calendar.styled';

import { getMonthCalendarDays, isToday } from '@utils/calendar.util';
import CalendarDateList from './CalendarDateList';
import type { MonthDay } from 'src/types/caledar.type';

interface MonthGridProps {
  days: MonthDay[];
}

const MonthGrid = ({ days }: MonthGridProps) => {
  return (
    <S.Grid>
      {days.map((day, idx) =>
        day ? (
          <S.Cell key={idx} $isToday={isToday(day.year, day.month, day.date)}>
            {day.date}
          </S.Cell>
        ) : (
          <S.EmptyCell key={idx} />
        ),
      )}
    </S.Grid>
  );
};

//--- month calendar component
interface MonthCalendarProps {
  startDate: string;
}

const MonthCalendar = ({ startDate }: MonthCalendarProps) => {
  const date = new Date(startDate);
  const days = getMonthCalendarDays(date);

  return (
    <S.MonthCalendarContainer>
      <CalendarDateList noDays={true} startDate={startDate} />
      <MonthGrid days={days} />
    </S.MonthCalendarContainer>
  );
};

export default MonthCalendar;
