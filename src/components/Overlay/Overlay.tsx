import type { ReactNode } from 'react';
import * as S from './Overlay.styled';

interface OverlayProps {
  children: ReactNode;
}

const Overlay = ({ children }: OverlayProps) => {
  return <S.ModalOverlay>{children}</S.ModalOverlay>;
};

export default Overlay;
