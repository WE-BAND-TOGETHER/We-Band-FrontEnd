import styled from 'styled-components';

export const MeetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;

  padding-top: 21px;
  margin: 0px 24px;
  gap: 8px;
`;

export const MeetHeaderContainer = styled.div`
  display: flex;
  padding: 8px 12px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const MeetHeader = styled.div`
  ${({ theme }) => theme.fontStyles.T02_Bold}
  color: ${({ theme }) => theme.colors.Gray.gray600};
`;
