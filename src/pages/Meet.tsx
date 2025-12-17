import * as S from './Meet.styled';
import Add from '@assets/icons/add.svg?react';

import MeetListMock from '@mocks/meetList.json';

import MeetList from '@components/Meet/MeetList';
import MeetCreate from '@components/Meet/MeetCreateModal';

import { useState } from 'react';
import Overlay from '@components/Overlay/Overlay';

const Meet = () => {
  const [createMeetToggle, setCreateMeetToggle] = useState(false);

  const handleCreateMeet = () => {
    setCreateMeetToggle((prev) => !prev);
  };

  return (
    <S.MeetContainer>
      {/* 모임 생성 모달 */}
      {createMeetToggle && (
        <Overlay>
          <MeetCreate setCreateMeetToggle={setCreateMeetToggle} />
        </Overlay>
      )}

      {/* 모임 헤더 */}
      <S.MeetHeaderContainer>
        <S.MeetHeader>모임 목록</S.MeetHeader>
        <Add width="24px" height="24px" onClick={handleCreateMeet} />
      </S.MeetHeaderContainer>

      {/* 모임 목록 */}
      <MeetList meets={MeetListMock.meets} />
    </S.MeetContainer>
  );
};

export default Meet;
