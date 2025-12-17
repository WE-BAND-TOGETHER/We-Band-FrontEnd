import { postKakaoLogin } from '@api/auth';
import Logo from '@assets/logo.svg?react';
import * as S from './Auth.styled';
import { useAuthStore } from '@store/auth';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import LoadingOnboarding from '@assets/loading.svg?react';

const Auth = () => {
  const login = useAuthStore((state) => state.login);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loginFail, setLoginFail] = useState(false);

  useEffect(() => {
    const code = searchParams.get('code');

    if (code) {
      postKakaoLogin(code)
        .then((data) => {
          if (data) {
            login(data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            navigate('/');
          }
        })
        .catch((err) => {
          setLoginFail(true);
          console.error(err);
        });
    }
  }, [searchParams, navigate]);

  useEffect(() => {
    if (loginFail) {
      setTimeout(() => {
        navigate('/onboarding');
      }, 5000);
    }
  }, [loginFail, navigate]);

  return (
    <S.AuthContainer>
      <S.AuthSection>
        <Logo width={'245px'} height={'56px'} />

        {loginFail ? (
          <S.AuthText>
            로그인에 실패했습니다. <br /> 잠시 후 로그인 페이지로 넘어갑니다.
          </S.AuthText>
        ) : (
          <>
            <LoadingOnboarding width={'50px'} height={'50px'} />
            <S.AuthText>로그인중입니다...</S.AuthText>
          </>
        )}
      </S.AuthSection>
    </S.AuthContainer>
  );
};

export default Auth;
