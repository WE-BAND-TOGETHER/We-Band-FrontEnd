// src/components/Calendar.tsx
import React, { useMemo, useState } from 'react';
import * as S from './Calendar.styled';
import CalendarHeader from './CalendarHeader';
import { CALENDAR_WEEKDAYS } from '../constants/calendar';

type CalendarProps = {
  /** 초기 기준 날짜 (기본값: 오늘) */
  initialDate?: Date;
  /** 선택한 날짜 변경 콜백 */
  onChangeDate?: (date: Date) => void;
};

const Calendar: React.FC<CalendarProps> = ({ initialDate = new Date(), onChangeDate }) => {
  const [current, setCurrent] = useState({
    year: initialDate.getFullYear(),
    month: initialDate.getMonth(), // 0 ~ 11
  });

  // "선택한 날짜" (회색으로 표시할 날짜)
  const [selectedDate, setSelectedDate] = useState(initialDate.getDate());

  // 오늘 날짜 정보 (렌더링 중에 바뀌지 않게 memo)
  const today = useMemo(() => new Date(), []);

  const { daysInMonth, firstDayOfWeek } = useMemo(() => {
    const { year, month } = current;

    const first = new Date(year, month, 1);
    const firstDay = first.getDay(); // 0(일) ~ 6(토)

    const last = new Date(year, month + 1, 0);
    const days = last.getDate();

    return { daysInMonth: days, firstDayOfWeek: firstDay };
  }, [current]);

  const handlePrevMonth = () => {
    setCurrent((prev) => {
      const newMonth = prev.month - 1;
      if (newMonth < 0) return { year: prev.year - 1, month: 11 };
      return { ...prev, month: newMonth };
    });
    setSelectedDate(1);
  };

  const handleNextMonth = () => {
    setCurrent((prev) => {
      const newMonth = prev.month + 1;
      if (newMonth > 11) return { year: prev.year + 1, month: 0 };
      return { ...prev, month: newMonth };
    });
    setSelectedDate(1);
  };

  const handleSelectDate = (day: number) => {
    setSelectedDate(day);

    if (onChangeDate) {
      const { year, month } = current;
      onChangeDate(new Date(year, month, day));
    }
  };

  const dateCells = useMemo(() => {
    const cells: React.ReactNode[] = [];

    for (let i = 0; i < firstDayOfWeek; i += 1) {
      cells.push(<S.EmptyCell key={`empty-${i}`} />);
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
      const isSelected = day === selectedDate;

      const isToday =
        current.year === today.getFullYear() &&
        current.month === today.getMonth() &&
        day === today.getDate();

      cells.push(
        <S.DateCell
          key={day}
          type="button"
          isSelected={isSelected}
          isToday={isToday}
          onClick={() => handleSelectDate(day)}
        >
          <span>{day}</span>
        </S.DateCell>,
      );
    }

    return cells;
  }, [daysInMonth, firstDayOfWeek, selectedDate, current, today]);

  return (
    <S.CalendarWrapper>
      <CalendarHeader
        year={current.year}
        monthIndex={current.month}
        onClickPrev={handlePrevMonth}
        onClickNext={handleNextMonth}
      />

      <S.WeekdayRow>
        {CALENDAR_WEEKDAYS.map((label) => (
          <S.Weekday key={label}>{label}</S.Weekday>
        ))}
      </S.WeekdayRow>

      <S.DatesGrid>{dateCells}</S.DatesGrid>
    </S.CalendarWrapper>
  );
};

export default Calendar;
