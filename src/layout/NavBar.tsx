import { useState } from 'react';
import * as S from './NavBar.styled';
import * as I from './BaseIcon';

const NavBarState = {
  CALENDAR: 'CALENDAR',
  MEET: 'MEET',
  MY: 'MY',
};

const NavBar = () => {
  const [navBarState, setNavBarState] = useState(NavBarState.CALENDAR);

  return (
    <S.NavBarContainer>
      <button onClick={() => setNavBarState(NavBarState.CALENDAR)}>
        {navBarState === NavBarState.CALENDAR ? (
          <I.CalendarOnIcon />
        ) : (
          <I.CalendarOffIcon />
        )}
      </button>
      <button onClick={() => setNavBarState(NavBarState.MEET)}>
        {navBarState === NavBarState.MEET ? (
          <I.MeetOnIcon />
        ) : (
          <I.MeetOffIcon />
        )}
      </button>
      <button onClick={() => setNavBarState(NavBarState.MY)}>
        {navBarState === NavBarState.MY ? <I.MyOnIcon /> : <I.MyOffIcon />}
      </button>
    </S.NavBarContainer>
  );
};

export default NavBar;
