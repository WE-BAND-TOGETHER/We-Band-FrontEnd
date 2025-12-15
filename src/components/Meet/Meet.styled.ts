import styled from 'styled-components';

export const MeetContainer = styled.div`
  display: flex;
  height: wrap-content;
  flex-direction: column;
  gap: 12px;
`;

export const MeetBlockContainer = styled.div`
  display: flex;
  padding: 12px 16px;
  justify-content: space-between;
  align-items: center;

  border-radius: 4px;
  background: ${({ theme }) => theme.colors.Gray.gray100};
`;

export const MeetTextWrapper = styled.div`
  display: flex;
  padding: 4px 0;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

export const MeetTitle = styled.div`
  ${({ theme }) => theme.fontStyles.T02_Bold}
  color: ${({ theme }) => theme.colors.Gray.gray800};
`;

export const MeetText = styled.div`
  ${({ theme }) => theme.fontStyles.T01_Medium}
  color: ${({ theme }) => theme.colors.Gray.gray600};
`;
