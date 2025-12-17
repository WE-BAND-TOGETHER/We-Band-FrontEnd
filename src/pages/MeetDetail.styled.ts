import styled from 'styled-components';

export const MeetDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MeetDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 32px 32px 12px;
`;

export const MeetTitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;

  ${({ theme }) => theme.fontStyles.T03_Bold};
  color: ${({ theme }) => theme.colors.WBOrange.wbo400};
`;

// 헤더
export const MeetHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;

  padding: 12px;
`;

export const MeetDetailHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
`;

export const JoinMeetButtonWrapper = styled.div`
  display: flex;
  padding: 4px 8px;
  align-items: center;
  gap: 4px;

  border-radius: 4px;
  background: ${({ theme }) => theme.colors.Gray.gray200};
`;

export const JoinMeetText = styled.p`
  color: ${({ theme }) => theme.colors.Gray.gray500};
  ${({ theme }) => theme.fontStyles.S03_Bold};
`;

export const MeetMemberWrapper = styled.div`
  display: flex;
  padding: 4px 4px 4px 8px;
  align-items: center;
  gap: 16px;
`;

export const MeetMemberText = styled.p`
  ${({ theme }) => theme.fontStyles.T01_Bold}
`;
