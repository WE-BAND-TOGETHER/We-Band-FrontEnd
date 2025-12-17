import * as S from './Calendar.styled';
import { BLOCKNUM, STARTHOUR } from '@constants/calendar.constants';

const TimeBlock = ({ time }: { time: number }) => {
  return <S.CalendarTimeSection>{time}</S.CalendarTimeSection>;
};

const CalendarTimeList = () => {
  return (
    <S.CalendarTimeListContainer>
      {Array.from(
        { length: BLOCKNUM + 1 },
        (_, index) => STARTHOUR + index,
      ).map((hour) => (
        <TimeBlock key={hour} time={hour} />
      ))}
    </S.CalendarTimeListContainer>
  );
};

export default CalendarTimeList;
