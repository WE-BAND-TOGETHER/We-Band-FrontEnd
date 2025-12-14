import { useState } from 'react';
import LeftArrow from '@assets/icons/left_arrow.svg?react';
import RightArrow from '@assets/icons/right_arrow.svg?react';
import Edit from '@assets/icons/edit.svg?react';

import * as S from './MyCalendar.styled';

import Calendar from '@components/Calendar/Calendar';
import { MONTHNAMES, MONTHWEEKTOGGLE } from '@constants/calendar.constants';
import myScheduleMock from '@mock/mySchedule.json';
import MonthCalendar from '@components/Calendar/MonthCalendar';
import { getStartOfWeek } from '@utils/calendar.util';

const MyCalendarPage = () => {
  const [weekMonthToggle, setWeekMonthToggle] = useState(0);

  const [currentDate, setCurrentDate] = useState(
    new Date(myScheduleMock.startDate),
  );

  const year = currentDate.getFullYear();
  const monthIndex = currentDate.getMonth();

  // 월간 달력 이동 핸들러
  const handlePrevMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1),
    );
  };
  const handleNextMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1),
    );
  };

  const handleSelectDate = (date: Date) => {
    const weekStartDate = getStartOfWeek(date);

    setCurrentDate(weekStartDate); // 주 기준 날짜
    setWeekMonthToggle(1); // 주간 모드로 전환
  };

  return (
    <>
      <S.HeaderContainer>
        <S.HeaderTextWrapper>
          <S.HeaderText>{year}</S.HeaderText>
          <S.HeaderText>{MONTHNAMES[monthIndex]}</S.HeaderText>
        </S.HeaderTextWrapper>

        <S.HeaderButtonWrapper>
          {weekMonthToggle ? (
            <Edit width="20px" height="20px" />
          ) : (
            <S.HeaderArrowWrapper>
              <LeftArrow onClick={handlePrevMonth} />
              <RightArrow onClick={handleNextMonth} />
            </S.HeaderArrowWrapper>
          )}
          <S.HeaderToggle
            onClick={() => setWeekMonthToggle((prev) => (prev === 0 ? 1 : 0))}
          >
            {MONTHWEEKTOGGLE[weekMonthToggle]}
          </S.HeaderToggle>
        </S.HeaderButtonWrapper>
      </S.HeaderContainer>

      {weekMonthToggle ? (
        <Calendar
          baseDate={currentDate}
          mode="MY"
          // 나중에 api로 교체
          weeklySchedules={myScheduleMock.days}
          totalUser={1}
        />
      ) : (
        <MonthCalendar baseDate={currentDate} onSelectDate={handleSelectDate} />
      )}
    </>
  );
};

export default MyCalendarPage;
