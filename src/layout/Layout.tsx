import { Outlet } from 'react-router';
import * as S from './Layout.styled';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <S.LayoutContainer>
      <S.Page>
        <Outlet />
      </S.Page>
      <NavBar />
    </S.LayoutContainer>
  );
};

export default Layout;
