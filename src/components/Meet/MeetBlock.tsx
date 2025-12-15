import * as S from './Meet.styled';
import Trash from '@assets/icons/trash.svg?react';

interface MeetProps {
  title: string;
  owner: string;
  memberCount: number;
}

const MeetBlock = ({ title, owner, memberCount }: MeetProps) => {
  return (
    <S.MeetBlockContainer>
      <S.MeetTextWrapper>
        <S.MeetTitle>{title}</S.MeetTitle>
        <S.MeetText>
          {owner}, 멤버 {memberCount}명
        </S.MeetText>
      </S.MeetTextWrapper>
      <Trash width="42px" height="42px" />
    </S.MeetBlockContainer>
  );
};

export default MeetBlock;
