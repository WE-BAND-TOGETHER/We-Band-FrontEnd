import styled from 'styled-components';
import { transparentize } from 'polished';

//Container
export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;

  padding: 0px 12px 0px 0px;
  margin: 0 auto;
`;

export const CalendarHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

// Date List
export const CalendarDateListContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 8px;
  gap: 16px;
`;

export const CalendarDateSection = styled.div`
  display: flex;
  width: 28px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 4px;
`;

export const CalendarDate = styled.h6`
  ${({ theme }) => theme.fontStyles.S01_Bold};
  color: ${({ theme }) => theme.colors.Gray.gray500};
`;

export const CalendarText = styled.h6`
  ${({ theme }) => theme.fontStyles.S01_Bold};
  color: ${({ theme }) => theme.colors.Gray.gray400};
  text-align: center;
`;

//Time List
export const CalendarTimeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  align-self: flex-start;

  padding: 0px 8px 16px 8px;
  gap: 16px;
`;

export const CalendarTimeSection = styled.div`
  color: ${({ theme }) => theme.colors.Gray.gray400};
  ${({ theme }) => theme.fontStyles.S01_Regular};

  display: flex;
  width: 24px;
  height: 24px;
  flex-direction: column;
  align-items: center;

  gap: 10px;
`;

// Schedule List
export const CalendarScheduleContainer = styled.div`
  display: flex;
`;

export const CalendarScheduleLine = styled.div``;

export const CalendarScheduleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.colors.Gray.gray100};
`;

export const CalendarSchedule = styled.div<{ $num: number; $total: number }>`
  width: 44px;
  height: 21px;

  background-color: ${({ theme, $num, $total }) =>
    transparentize(1 - $num / $total, theme.colors.Alpha.alpha)};
`;

//month calendar
export const MonthCalendarContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 18px 0 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px; /* ← 이미지에 보이는 8px */
`;

export const Cell = styled.div<{ $isToday: boolean }>`
  ${({ theme }) => theme.fontStyles.S03_Medium}
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;
  background: white;
  color: ${({ theme }) => theme.colors.Gray.gray600};

  ${({ $isToday }) =>
    $isToday &&
    `
      border-radius: 18px;
      background: var(--WBOrange-WBO100, #FFDED9);
    `}
`;

export const EmptyCell = styled.div`
  aspect-ratio: 1 / 1;
`;
