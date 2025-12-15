import KakaoLoginBTN from '@assets/kakao-login.svg?react';
import * as S from './KakaoLogin.styled';

const KaKaoLogin = () => {
  const clientId = import.meta.env.VITE_KAKAO_CLIENT_KEY;
  const redirectUrl = import.meta.env.VITE_KAKAO_REDIRECT_URL;

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=code`;

  return (
    <S.KakaoLoginContainer href={KAKAO_AUTH_URL}>
      <KakaoLoginBTN width={'336px'} height={'56px'} />
    </S.KakaoLoginContainer>
  );
};

export default KaKaoLogin;
