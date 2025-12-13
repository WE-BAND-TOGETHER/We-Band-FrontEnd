import * as S from './Calendar.styled';
import { getWeekDates, parseDateString } from '@utils/calendar.util';

interface CalendarDateProps {
  index: number;
  month: number;
  date: number;
  day: string;
}

const CalendarDate: React.FC<CalendarDateProps> = ({
  month,
  date,
  day,
  index,
}) => {
  return (
    <S.CalendarDateSection>
      <S.CalendarDate>
        {(date == 1 || index == 0) && month + '/'}
        {date}
      </S.CalendarDate>
      <S.CalendarText>{day}</S.CalendarText>
    </S.CalendarDateSection>
  );
};

interface CalendarDateListProps {
  startDate: string;
}

const CalendarDateList: React.FC<CalendarDateListProps> = ({ startDate }) => {
  const { year, month, date } = parseDateString(startDate);

  const weekDates: { month: number; date: number; day: string }[] =
    getWeekDates(year, month, date);

  return (
    <S.CalendarDateListContainer>
      {weekDates.map(({ month, date, day }, idx) => (
        <CalendarDate
          key={idx}
          index={idx}
          month={month}
          date={date}
          day={day}
        />
      ))}
    </S.CalendarDateListContainer>
  );
};

export default CalendarDateList;
