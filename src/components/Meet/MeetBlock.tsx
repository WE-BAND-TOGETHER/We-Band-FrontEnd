import { useNavigate } from 'react-router-dom';
import * as S from './Meet.styled';
import Trash from '@assets/icons/trash.svg?react';

interface MeetProps {
  meetId: number;
  title: string;
  owner: string;
  memberCount: number;
}

const MeetBlock = ({ meetId, title, owner, memberCount }: MeetProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/meet/${meetId}`);
  };

  return (
    <S.MeetBlockContainer onClick={handleClick}>
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
