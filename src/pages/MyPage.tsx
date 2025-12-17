import * as S from './MyPage.styled';

const MyPage = () => {
  const userName = '유저 이름';
  const userEmail = '유저 카카오 계정@kakao.com';

  return (
    <S.Wrapper>
      <S.ProfileSection>
        <S.AvatarArea>
          <S.Avatar>
            <S.AvatarImg
              src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?auto=format&fit=crop&w=300&q=80"
              alt="프로필 이미지"
            />
          </S.Avatar>
        </S.AvatarArea>

        <S.NameRow>
          <S.UserName>{userName}</S.UserName>
        </S.NameRow>

        <S.UserEmail>{userEmail}</S.UserEmail>
      </S.ProfileSection>

      <S.Section>
        <S.SectionTitle>계정 관리</S.SectionTitle>
        <S.Menu>
          <S.MenuItemButton type="button">
            <S.MenuText>로그아웃하기</S.MenuText>
          </S.MenuItemButton>
          <S.MenuItemButton type="button">
            <S.MenuText>회원탈퇴하기</S.MenuText>
          </S.MenuItemButton>
        </S.Menu>
      </S.Section>

      <S.Section>
        <S.SectionTitle>이용 약관</S.SectionTitle>
        <S.Menu>
          <S.MenuItemButton type="button">
            <S.MenuText>앱 이용 약관</S.MenuText>
          </S.MenuItemButton>
          <S.MenuItemButton type="button">
            <S.MenuText>개인정보처리방침</S.MenuText>
          </S.MenuItemButton>
        </S.Menu>
      </S.Section>

      <S.Section>
        <S.SectionTitle>앱 정보 및 문의</S.SectionTitle>
        <S.Menu>
          <S.MenuItemButton type="button" $hasChevron>
            <S.MenuText>위밴드 팀에 문의하기</S.MenuText>
            <S.ChevronIcon />
          </S.MenuItemButton>
          <S.MenuItemButton type="button">
            <S.MenuText>오픈소스 라이센스</S.MenuText>
          </S.MenuItemButton>
        </S.Menu>
      </S.Section>
    </S.Wrapper>
  );
};

export default MyPage;
