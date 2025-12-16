import styled from 'styled-components';
import fontStyles from '@styles/theme/typography';

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Logo = styled.img`
  width: 92px;
  margin-bottom: 4px;
`;

export const ErrorImage = styled.img`
  width: 160px;
`;

export const Desc = styled.p`
  ${fontStyles.T02_Medium};
  color: var(--Gray-Gray800, #1a202c);
  text-align: center;
  margin-top: 4px;
`;

export const Button = styled.button`
  margin-top: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  padding: 8px 12px;

  border-radius: 4px;
  border: 1px solid var(--WBOrange-WB0500, #ff5c3a);
  background: var(--Gray-Gray50, #f7fafc);

  color: var(--WBOrange-WB0500, #ff5c3a);

  ${fontStyles.S02_Medium};

  cursor: pointer;
`;
