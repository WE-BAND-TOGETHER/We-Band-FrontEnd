import Logo from '@assets/logo.svg?react';
import * as S from './Onboarding.styled';
import KaKaoLogin from '@components/Kakao/KakaoLogin';

const OnBoarding = () => {
  return (
    <S.OnboardingContainer>
      <S.OnboardingSection>
        <Logo width={'245px'} height={'56px'} />
        <S.OnBoardingText>우리가 만나는 시간을 더 즐겁게</S.OnBoardingText>
      </S.OnboardingSection>
      <KaKaoLogin />
    </S.OnboardingContainer>
  );
};

export default OnBoarding;
