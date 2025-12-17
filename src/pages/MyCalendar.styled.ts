import styled from 'styled-components';

export const MyCalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 32px 32px 12px 32px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const HeaderTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const HeaderText = styled.p`
  ${({ theme }) => theme.fontStyles.T04_Bold};
  color: ${({ theme }) => theme.colors.WBOrange.wbo500};
`;

export const HeaderButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const HeaderArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const HeaderToggle = styled.button`
  display: flex;
  width: 36px;
  padding: 4px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  ${({ theme }) => theme.fontStyles.S01_Bold}
  color: ${({ theme }) => theme.colors.Gray.gray500};

  border-radius: 12px;
  border: 1.5px solid ${({ theme }) => theme.colors.Gray.gray500};
`;
