import styled from 'styled-components';
import { transparentize } from 'polished';

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;

  background-color: ${({ theme }) =>
    transparentize(0.5, theme.colors.BlackAndWhite.black)};

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1;
`;
