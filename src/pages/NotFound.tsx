import { useNavigate } from 'react-router';
import * as S from './NotFound.styled';

import Error404 from '@assets/404.svg';
import Logo from '@assets/logo.svg?react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Content>
        <Logo width={150} height={25} aria-label="WEBAND 로고" />
        <S.ErrorImage src={Error404} alt="404" />
        <S.Desc>이런, 페이지를 찾을 수 없어요!</S.Desc>
        <S.Button type="button" onClick={() => navigate(-1)}>
          이전 화면으로 돌아가기
        </S.Button>
      </S.Content>
    </S.Wrapper>
  );
};

export default NotFound;
