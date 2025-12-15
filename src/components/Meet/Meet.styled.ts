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

//모임 개설 모달
export const MeetCreateContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 360px;
  padding: 32px 24px 20px;
  gap: 18px;

  border-radius: 12px;
  background: ${({ theme }) => theme.colors.Gray.gray200};
`;

export const MeetCreateHeader = styled.p`
  align-self: center;
  ${({ theme }) => theme.fontStyles.T02_Medium};
  color: ${({ theme }) => theme.colors.Gray.gray800};
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const InputLabel = styled.label`
  ${({ theme }) => theme.fontStyles.S02_Medium};
  color: ${({ theme }) => theme.colors.Gray.gray500};
`;

export const InputText = styled.input`
  width: 100%;
  padding: 12px 20px;

  box-sizing: border-box;
  border-radius: 4px;
  border: none;
  outline: none;

  ${({ theme }) => theme.fontStyles.S02_Regular};
`;

export const YearToggleWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const YearToggleButton = styled.button<{ $active: boolean }>`
  flex: 1;
  padding: 12px 0;

  border-radius: 4px;
  border: none;

  ${({ theme }) => theme.fontStyles.S02_Bold};

  background: ${({ $active, theme }) =>
    $active ? theme.colors.WBOrange.wbo100 : theme.colors.Gray.gray300};

  color: ${({ $active, theme }) =>
    $active ? theme.colors.WBOrange.wbo500 : theme.colors.Gray.gray600};
`;

export const DateInputWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const DateInput = styled.input`
  flex: 1;
  padding: 12px 0px;
  text-align: center;

  box-sizing: border-box;
  border-radius: 4px;
  border: none;
  outline: none;

  ${({ theme }) => theme.fontStyles.S02_Regular};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  gap: 12px;
`;

const BaseButton = styled.button`
  flex: 1;
  padding: 12px 12px;

  border-radius: 4px;
  border: none;
  cursor: pointer;

  ${({ theme }) => theme.fontStyles.S02_Bold};
`;

export const CreateButton = styled(BaseButton)`
  background: ${({ theme }) => theme.colors.WBOrange.wbo400};
  color: ${({ theme }) => theme.colors.Gray.gray50};
`;

export const CancleButton = styled(BaseButton)`
  background: ${({ theme }) => theme.colors.Gray.gray300};
  color: ${({ theme }) => theme.colors.Gray.gray600};
`;
