import * as S from './Layout.styled';

import MeetOn from '@assets/icons/meet_on.svg?react';
import MeetOff from '@assets/icons/meet_off.svg?react';

import CalendarOn from '@assets/icons/calendar_on.svg?react';
import CalendarOff from '@assets/icons/calendar_off.svg?react';

import MyOn from '@assets/icons/my_on.svg?react';
import MyOff from '@assets/icons/my_off.svg?react';

type IconProps = {
  svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  active: boolean;
  content: string;
};

const BaseIcon = ({ svg: SVG, active, content }: IconProps) => {
  return (
    <S.IconWrapper $active={active}>
      <SVG width="32px" height="32px" />
      <S.Content $active={active}>{content}</S.Content>
    </S.IconWrapper>
  );
};

export const MeetOnIcon = () => (
  <BaseIcon svg={MeetOn} active={true} content="모임" />
);
export const MeetOffIcon = () => (
  <BaseIcon svg={MeetOff} active={false} content="모임" />
);

export const CalendarOnIcon = () => (
  <BaseIcon svg={CalendarOn} active={true} content="캘린더" />
);
export const CalendarOffIcon = () => (
  <BaseIcon svg={CalendarOff} active={false} content="캘린더" />
);

export const MyOnIcon = () => (
  <BaseIcon svg={MyOn} active={true} content="MY" />
);
export const MyOffIcon = () => (
  <BaseIcon svg={MyOff} active={false} content="MY" />
);
