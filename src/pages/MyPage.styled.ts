import styled from 'styled-components';
import fontStyles from '@styles/theme/typography';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  padding: 24px 20px 40px;
`;

export const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 0 18px;
`;

export const AvatarArea = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  margin-bottom: 14px;
`;

export const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 999px;
  overflow: hidden;
  background: #e2e8f0;
`;

export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const UserName = styled.h1`
  ${fontStyles.T03_Bold};
  color: var(--Gray-Gray800, #1a202c);
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
  ${fontStyles.S02_Regular};
  color: var(--Gray-Gray400, #a0aec0);
  text-align: center;
`;

export const Section = styled.section`
  margin-top: 18px;
`;

export const SectionTitle = styled.p`
  ${fontStyles.T01_Medium};
  color: var(--Gray-Gray400, #a0aec0);
  padding: 0 36px 0 40px;
  margin: 0 0 10px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuItemButton = styled.button<{ $hasChevron?: boolean }>`
  width: 100%;
  border: none;
  background: transparent;
  padding: 12px 48px;

  display: flex;
  align-items: center;
  justify-content: ${({ $hasChevron }) => ($hasChevron ? 'space-between' : 'flex-start')};

  cursor: pointer;

  &:active {
    background: rgba(15, 23, 42, 0.04);
  }
`;

export const MenuText = styled.span`
  ${fontStyles.T02_Medium};
  color: var(--Gray-Gray700, #2d3748);
`;

export const ChevronIcon = styled.span`
  width: 10px;
  height: 10px;
  border-right: 2px solid #a0aec0;
  border-bottom: 2px solid #a0aec0;
  transform: rotate(-45deg);
`;
