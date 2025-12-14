import * as S from './Layout.styled';
import { useNavigate } from 'react-router';
import FooterLogo from '@assets/footer-logo.svg?react';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate(`/`);
  };

  return (
    <S.FooterContainer>
      <FooterLogo onClick={handleClickHome} width={'105px'} height={'24px'} />

      <S.FooterLinkContainer>
        <S.FooterLink
          href="https://glacier-borogovia-7b5.notion.site/We-Band-Lite-1ccdf3d703f28039b961c72d95d691d3"
          target="_blank"
        >
          WeBand 더 알아보기
        </S.FooterLink>
        <S.FooterLink
          href="mailto:qktjwl123@gmail.com?subject=WeBand 관련 문의드립니다."
          target="_blank"
        >
          문의 및 버그제보
        </S.FooterLink>
      </S.FooterLinkContainer>
    </S.FooterContainer>
  );
};

export default Footer;
