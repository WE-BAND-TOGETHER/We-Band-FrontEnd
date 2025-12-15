import * as S from './Calendar.styled';

import { getMonthCalendarDays, isToday } from '@utils/calendar.util';
import CalendarDateList from './CalendarDateList';
import type { MonthDay } from 'src/types/caledar.type';

interface MonthGridProps {
  days: MonthDay[];
  onSelectDate: (date: Date) => void;
}

const MonthGrid = ({ days, onSelectDate }: MonthGridProps) => {
  return (
    <S.Grid>
      {days.map((day, idx) =>
        day ? (
          <S.Cell
            key={idx}
            $isToday={isToday(day.year, day.month, day.date)}
            onClick={() =>
              onSelectDate(new Date(day.year, day.month - 1, day.date))
            }
          >
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
  baseDate: Date;
  onSelectDate: (date: Date) => void;
}

const MonthCalendar = ({ baseDate, onSelectDate }: MonthCalendarProps) => {
  const date = new Date(baseDate);
  const days = getMonthCalendarDays(date);

  return (
    <S.MonthCalendarContainer>
      <CalendarDateList noDays={true} baseDate={baseDate} />
      <MonthGrid days={days} onSelectDate={onSelectDate} />
    </S.MonthCalendarContainer>
  );
};

export default MonthCalendar;
