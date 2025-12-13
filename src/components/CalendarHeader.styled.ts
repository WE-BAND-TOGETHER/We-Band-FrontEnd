import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px 12px;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: baseline;
  gap: 24px;
`;

// 연도 텍스트 (2025)
export const YearText = styled.span`
  ${({ theme }) => theme.fontStyles.T04_Bold};   
  color: ${({ theme }) => theme.colors.WBOrange.wbo500}; 
`;

// 월 텍스트 (MAR)
export const MonthText = styled.span`
  ${({ theme }) => theme.fontStyles.T04_Bold};
  color: ${({ theme }) => theme.colors.WBOrange.wbo500};
  text-transform: uppercase;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ArrowButton = styled.button`
  border: none;
  background: transparent;
  padding: 4px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  color: ${({ theme }) => theme.colors.Gray.gray500};
`;

export const ViewModeButton = styled.button`
  ${({ theme }) => theme.fontStyles.S01_Medium}; 
  padding: 6px 14px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.Gray.gray300};
  background-color: ${({ theme }) => theme.colors.BlackAndWhite.white};
  color: ${({ theme }) => theme.colors.Gray.gray600};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;
