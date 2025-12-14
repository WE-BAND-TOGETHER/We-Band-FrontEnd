import styled from 'styled-components';

// Layout styles
export const LayoutContainer = styled.div`
  width: 400px;
  padding-bottom: 104px;
`;

export const Page = styled.div``;

// NavBar styles
export const NavBarContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  padding: 0px 37px 28px 37px;
  justify-content: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0px;

  border-radius: 16px 16px 0px 0px;
  background: ${({ theme }) => theme.colors.Gray.gray100};
`;

// Footer styles
export const FooterContainer = styled.div`
  display: flex;
  height: 120px;
  padding: 28px 36px;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 400px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.Gray.gray200};

  position: fixed;
  bottom: 0px;
`;

export const FooterLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 4px;
`;

export const FooterLink = styled.a`
  ${({ theme }) => theme.fontStyles.S01_Medium};
  color: ${({ theme }) => theme.colors.Gray.gray500};
`;

// baseIcon styles
export const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  width: 64px;
  padding-top: 13px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  border-top: 3px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.WBOrange.wbo400 : 'transparent'};
`;

export const Content = styled.div<{ $active: boolean }>`
  ${({ theme }) => theme.fontStyles.S02_Bold};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.WBOrange.wbo500 : theme.colors.Gray.gray500};
`;
