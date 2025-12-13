import * as S from './NavBar.styled';
import * as I from './BaseIcon';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar = () => {
  const { pathname } = useLocation();

  const isCalendar = pathname === '/';
  const isMeet = pathname.startsWith('/meet');
  const isMy = pathname.startsWith('/mypage');

  return (
    <S.NavBarContainer>
      <NavLink to="/">
        {isCalendar ? <I.CalendarOnIcon /> : <I.CalendarOffIcon />}
      </NavLink>

      <NavLink to="/meet">
        {isMeet ? <I.MeetOnIcon /> : <I.MeetOffIcon />}
      </NavLink>

      <NavLink to="/mypage">{isMy ? <I.MyOnIcon /> : <I.MyOffIcon />}</NavLink>
    </S.NavBarContainer>
  );
};

export default NavBar;
