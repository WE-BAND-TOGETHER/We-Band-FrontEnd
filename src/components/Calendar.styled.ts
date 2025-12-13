// src/components/Calendar.styled.ts
import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.BlackAndWhite.white};
`;

/* ---------- 요일 라인 ---------- */

export const WeekdayRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 0 24px;
  margin-bottom: 12px;
`;

export const Weekday = styled.div`
  text-align: center;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.Gray.gray400};
`;

/* ---------- 날짜 그리드 ---------- */

export const DatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 12px;
  padding: 0 24px;
`;

export const EmptyCell = styled.div``;

export const DateCell = styled.button<{ isSelected?: boolean; isToday?: boolean }>`
  width: 100%;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    width: 32px;
    height: 32px;
    border-radius: 999px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 14px;

    /* 기본(그 외 날짜): 연한 회색 글자 */
    background-color: transparent;
    color: ${({ theme }) => theme.colors.Gray.gray400};

    /* 선택된 날짜: 회색 원 */
    ${({ isSelected, isToday, theme }) =>
      isSelected &&
      !isToday &&
      `
        background-color: ${theme.colors.Gray.gray100};
        color: ${theme.colors.Gray.gray600};
      `}

    /* 오늘 날짜: 항상 오렌지 유지 (최우선) */
    ${({ isToday, theme }) =>
      isToday &&
      `
        background-color: ${theme.colors.WBOrange.wbo50};
        color: ${theme.colors.WBOrange.wbo500};
      `}
  }
`;
