import type { Meet } from 'src/types/meet.type';
import * as S from './Meet.styled';
import MeetBlock from './MeetBlock';

interface MeetListProps {
  meets: Meet[];
}

const MeetList = ({ meets }: MeetListProps) => {
  return (
    <S.MeetContainer>
      {meets.map((meet) => (
        <MeetBlock
          key={meet.meetId}
          title={meet.meetName}
          owner={meet.owner}
          memberCount={meet.memberCount}
        />
      ))}
    </S.MeetContainer>
  );
};

export default MeetList;
