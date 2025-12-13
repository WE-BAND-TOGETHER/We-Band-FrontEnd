import { useState } from 'react';
import LeftArrow from '@assets/icons/left_arrow.svg?react';
import RightArrow from '@assets/icons/right_arrow.svg?react';
import Edit from '@assets/icons/edit.svg?react';

import * as S from './MyCalendar.styled';

import Calendar from '@components/Calendar/Calendar';
import { MONTHNAMES, MONTHWEEKTOGGLE } from '@constants/calendar.constants';
import myScheduleMock from '@mock/mySchedule.json';

const MyCalendarPage = () => {
  const [weekMonthToggle, setWeekMonthToggle] = useState(0);
  const today = new Date();

  const year = today.getFullYear();
  const monthIndex = today.getMonth();

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
              <LeftArrow />
              <RightArrow />
            </S.HeaderArrowWrapper>
          )}
          <S.HeaderToggle
            onClick={() => setWeekMonthToggle((prev) => (prev === 0 ? 1 : 0))}
          >
            {MONTHWEEKTOGGLE[weekMonthToggle]}
          </S.HeaderToggle>
        </S.HeaderButtonWrapper>
      </S.HeaderContainer>

      <Calendar
        startDate={myScheduleMock.startDate}
        mode="MY"
        weeklySchedules={myScheduleMock.days}
        totalUser={1}
      />
    </>
  );
};

export default MyCalendarPage;
