import styled from 'styled-components';

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
  gap: 16px;

  /* logo.svg?react 처럼 SVG 컴포넌트가 들어올 때 안정적으로 보이도록 */
  svg {
    display: block;
  }
`;

export const ErrorImage = styled.img`
  width: 160px;
`;

export const Desc = styled.p`
  ${({ theme }) => theme.fontStyles.T02_Medium};
  color: ${({ theme }) => theme.colors.Gray.gray800};
  text-align: center;
`;

export const Button = styled.button`
  margin-top: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  padding: 8px 12px;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.WBOrange.wbo500};
  background: ${({ theme }) => theme.colors.Gray.gray50};

  color: ${({ theme }) => theme.colors.WBOrange.wbo500};

  ${({ theme }) => theme.fontStyles.S02_Medium};

  cursor: pointer;
`;
