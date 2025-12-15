import MeetList from '@components/Meet/MeetList';
import * as S from './Meet.styled';
import Add from '@assets/icons/add.svg?react';

import MeetListMock from '@mocks/meetList.json';

const Meet = () => {
  return (
    <S.MeetContainer>
      {/* 모임 헤더 */}
      <S.MeetHeaderContainer>
        <S.MeetHeader>모임 목록</S.MeetHeader>
        <Add width="24px" height="24px" />
      </S.MeetHeaderContainer>

      {/* 모임 목록 */}
      <MeetList meets={MeetListMock.meets} />
    </S.MeetContainer>
  );
};

export default Meet;
