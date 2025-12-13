// src/components/CalendarHeader.tsx
import React from 'react';
import * as S from './CalendarHeader.styled';
import { CALENDAR_MONTH_LABELS } from '../constants/calendar';

type CalendarHeaderProps = {
  year: number;
  monthIndex: number; // 0 ~ 11
  onClickPrev: () => void;
  onClickNext: () => void;
};

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  year,
  monthIndex,
  onClickPrev,
  onClickNext,
}) => {
  return (
    <S.HeaderWrapper>
      <S.HeaderLeft>
        <S.YearText>{year}</S.YearText>
        <S.MonthText>{CALENDAR_MONTH_LABELS[monthIndex]}</S.MonthText>
      </S.HeaderLeft>

      <S.HeaderRight>
        <S.ArrowButton onClick={onClickPrev}>
          {'<'}
        </S.ArrowButton>
        <S.ArrowButton onClick={onClickNext}>
          {'>'}
        </S.ArrowButton>
        {/* 피그마 기준 "월"만 있는 버튼 */}
        <S.ViewModeButton>월</S.ViewModeButton>
      </S.HeaderRight>
    </S.HeaderWrapper>
  );
};

export default CalendarHeader;
