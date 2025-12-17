import { useEffect, useState } from 'react';
import LeftArrow from '@assets/icons/left_arrow.svg?react';
import RightArrow from '@assets/icons/right_arrow.svg?react';
import EditOff from '@assets/icons/edit_off.svg?react';
import EditOn from '@assets/icons/edit_on.svg?react';

import * as S from './MyCalendar.styled';

import Calendar from '@components/Calendar/Calendar';
import {
  MONTHNAMES,
  MONTHWEEKTOGGLE,
  CALENDARMODE,
} from '@constants/calendar.constants';
import myScheduleMock from '@mocks/mySchedule.json';
import MonthCalendar from '@components/Calendar/MonthCalendar';
import { getStartOfWeek } from '@utils/calendar.util';
import type { CalendarMode } from 'src/types/caledar.type';
import { getMySchedule } from '@api/calendar';

const MyCalendar = () => {
  const [weekMonthToggle, setWeekMonthToggle] = useState(0);
  const [calendarMode, setCalendarMode] = useState<CalendarMode>(
    CALENDARMODE.MY,
  );

  const [currentDate, setCurrentDate] = useState(
    new Date(myScheduleMock.startDate),
  );

  const year = currentDate.getFullYear();
  const monthIndex = currentDate.getMonth();

  const [weeklySchedules, setWeeklySchedules] = useState<
    {
      date: string;
      blocks: number[];
    }[]
  >([]);
  const [loading, setLoading] = useState(false);

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

  // 날짜 선택
  const handleSelectDate = (date: Date) => {
    const weekStartDate = getStartOfWeek(date);

    setCurrentDate(weekStartDate); // 주 기준 날짜
    setWeekMonthToggle(1); // 주간 모드로 전환
  };

  // edit모드 전환
  const handleEditToggle = () => {
    setCalendarMode((prev) =>
      prev === CALENDARMODE.MY ? CALENDARMODE.EDIT : CALENDARMODE.MY,
    );
  };

  // 월, 일 변할 시 호출
  useEffect(() => {
    if (!weekMonthToggle) return;
    fetchSchedule();
  }, [currentDate, weekMonthToggle]);

  // 스케줄 edit 및 post 이후 refetch
  const fetchSchedule = async () => {
    try {
      setLoading(true);
      const data = await getMySchedule(currentDate);
      setWeeklySchedules(data.days);
    } catch (e) {
      console.error('Failed to fetch mySchedule', e);
    } finally {
      setLoading(false);
    }
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
            calendarMode == CALENDARMODE.EDIT ? (
              <EditOn width="20px" height="20px" onClick={handleEditToggle} />
            ) : (
              <EditOff width="20px" height="20px" onClick={handleEditToggle} />
            )
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

      {loading ? (
        '로딩중'
      ) : weekMonthToggle ? (
        <Calendar
          baseDate={currentDate}
          mode={calendarMode}
          // 나중에 api로 교체
          weeklySchedules={weeklySchedules}
          totalUser={1}
          onSaved={fetchSchedule}
        />
      ) : (
        <MonthCalendar baseDate={currentDate} onSelectDate={handleSelectDate} />
      )}
    </>
  );
};

export default MyCalendar;
