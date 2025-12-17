import * as S from './MeetDetail.styled';

import CopyUrl from '@assets/icons/copy_url.svg?react';
import ArrowUp from '@assets/icons/arrow_up.svg?react';
import ArrowDown from '@assets/icons/arrow_down.svg?react';
import Enter from '@assets/icons/enter.svg?react';
import Withdraw from '@assets/icons/withdraw.svg?react';

import Calendar from '@components/Calendar/Calendar';

import meetMock from '@mocks/meet.json';
import { CALENDARMODE } from '@constants/calendar.constants';

import { aggregateWeeklySchedules } from '@utils/calendar.util';

const MeetDetail = () => {
  const baseDate = new Date(meetMock.startDate);
  const schedule = aggregateWeeklySchedules(meetMock.member);
  // const [memberListToggle, setMemberListToggle] = useState(false);

  return (
    <S.MeetDetailContainer>
      <S.MeetDetailWrapper>
        <S.MeetTitleContainer>{meetMock.meetName}</S.MeetTitleContainer>
        <S.MeetHeaderContainer>
          <CopyUrl width="48px" height="48px" />
          <S.MeetDetailHeaderWrapper>
            <S.JoinMeetButtonWrapper>
              {meetMock.participate ? (
                <>
                  <S.JoinMeetText>모임 탈퇴</S.JoinMeetText>
                  <Withdraw width="20px" height="20px" />
                </>
              ) : (
                <>
                  <S.JoinMeetText>모임 참여</S.JoinMeetText>
                  <Enter width="20px" height="20px" />
                </>
              )}
            </S.JoinMeetButtonWrapper>
            <S.MeetMemberWrapper>
              <S.MeetMemberText> 모임원</S.MeetMemberText>
              {false ? (
                <ArrowUp width="20px" height="20px" />
              ) : (
                <ArrowDown width="20px" height="20px" />
              )}
            </S.MeetMemberWrapper>
          </S.MeetDetailHeaderWrapper>
        </S.MeetHeaderContainer>
      </S.MeetDetailWrapper>

      <Calendar
        baseDate={baseDate}
        mode={CALENDARMODE.MEET}
        weeklySchedules={schedule}
        totalUser={meetMock.member.length}
      />
    </S.MeetDetailContainer>
  );
};

export default MeetDetail;
