import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.BlackAndWhite.white};
  padding: 24px 0 40px;
`;

export const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 0 18px;
`;

export const AvatarArea = styled.div`
  position: relative;
  width: 96px;
  height: 96px;
  margin-bottom: 14px;
`;

export const Avatar = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 999px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.Gray.gray200};
`;

export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NameRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const UserName = styled.h1`
  ${({ theme }) => theme.fontStyles.T03_Bold};
  color: ${({ theme }) => theme.colors.Gray.gray800};
`;

export const EditButton = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EditImg = styled.img`
  width: 18px;
  height: 18px;
  display: block;
`;

export const UserEmail = styled.p`
  margin-top: 8px;
  ${({ theme }) => theme.fontStyles.S02_Regular};
  color: ${({ theme }) => theme.colors.Gray.gray400};
  text-align: center;
`;

export const Section = styled.section`
  margin-top: 18px;
`;

export const SectionTitle = styled.p`
  ${({ theme }) => theme.fontStyles.T01_Medium};
  color: ${({ theme }) => theme.colors.Gray.gray400};

  /* 피그마: L 40 / R 36 + top/bottom 4 */
  padding: 4px 36px 4px 40px;
  margin: 0 0 8px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuItemButton = styled.button<{ $hasChevron?: boolean }>`
  width: 100%;
  border: none;
  background: transparent;

  /* 피그마: L/R 48 + top/bottom 4 */
  padding: 4px 48px;

  display: flex;
  align-items: center;
  justify-content: ${({ $hasChevron }) =>
    $hasChevron ? 'space-between' : 'flex-start'};

  cursor: pointer;

  &:active {
    background: ${({ theme }) => theme.colors.Gray.gray100};
  }
`;

export const MenuText = styled.span`
  ${({ theme }) => theme.fontStyles.T02_Medium};
  color: ${({ theme }) => theme.colors.Gray.gray700};
`;

export const ChevronIcon = styled.span`
  width: 10px;
  height: 10px;
  border-right: 2px solid ${({ theme }) => theme.colors.Gray.gray400};
  border-bottom: 2px solid ${({ theme }) => theme.colors.Gray.gray400};
  transform: rotate(-45deg);
`;
