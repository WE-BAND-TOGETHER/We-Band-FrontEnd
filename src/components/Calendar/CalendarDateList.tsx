import * as S from './Calendar.styled';
import { getWeekDates, isToday, parseDateString } from '@utils/calendar.util';

interface CalendarDateProps {
  index: number;
  year: number;
  month: number;
  date: number;
  day: string;
  noDays: boolean;
}

const CalendarDate = ({
  year,
  month,
  date,
  day,
  index,
  noDays,
}: CalendarDateProps) => {
  const today = isToday(year, month, date);

  return (
    <S.CalendarDateSection>
      <S.CalendarText>{day}</S.CalendarText>
      {noDays ? (
        ''
      ) : (
        <S.Cell $isToday={today}>
          {(date == 1 || index == 0) && month + '/'}
          {date}
        </S.Cell>
      )}
    </S.CalendarDateSection>
  );
};

interface CalendarDateListProps {
  startDate: string;
  noDays: boolean;
}

const CalendarDateList = ({ startDate, noDays }: CalendarDateListProps) => {
  const { year, month, date } = parseDateString(startDate);

  const weekDates: {
    year: number;
    month: number;
    date: number;
    day: string;
  }[] = getWeekDates(year, month, date);

  return (
    <S.CalendarDateListContainer>
      {weekDates.map(({ year, month, date, day }, idx) => (
        <CalendarDate
          key={idx}
          year={year}
          index={idx}
          month={month}
          date={date}
          day={day}
          noDays={noDays}
        />
      ))}
    </S.CalendarDateListContainer>
  );
};

export default CalendarDateList;
