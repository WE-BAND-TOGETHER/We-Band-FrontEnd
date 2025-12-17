import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import * as S from './Meet.styled';

interface MeetCreateModalProps {
  setCreateMeetToggle: Dispatch<SetStateAction<boolean>>;
}

const CURRENT_YEAR = new Date().getFullYear();

const MeetCreateModal = ({ setCreateMeetToggle }: MeetCreateModalProps) => {
  const [year, setYear] = useState(CURRENT_YEAR);
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  // 숫자만 허용
  const handleNumberInput =
    (setter: (value: string) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      // 숫자가 아니면 무시
      if (!/^\d*$/.test(value)) return;

      setter(value);
    };

  // 범위 검증
  const handleMonthBlur = () => {
    const num = Number(month);
    if (num < 1 || num > 12) setMonth('');
  };
  const handleDayBlur = () => {
    const num = Number(day);
    if (num < 1 || num > 31) setDay('');
  };

  return (
    <S.MeetCreateContainer>
      <S.MeetCreateHeader>모임 개설하기</S.MeetCreateHeader>

      {/* 연도 토글 */}
      <S.InputWrapper>
        <S.InputLabel>연도</S.InputLabel>
        <S.YearToggleWrapper>
          <S.YearToggleButton
            $active={year === CURRENT_YEAR}
            onClick={() => setYear(CURRENT_YEAR)}
          >
            {CURRENT_YEAR}
          </S.YearToggleButton>
          <S.YearToggleButton
            $active={year === CURRENT_YEAR + 1}
            onClick={() => setYear(CURRENT_YEAR + 1)}
          >
            {CURRENT_YEAR + 1}
          </S.YearToggleButton>
        </S.YearToggleWrapper>
      </S.InputWrapper>

      {/* 월 / 일 */}
      <S.InputWrapper>
        <S.InputLabel>날짜</S.InputLabel>
        <S.DateInputWrapper>
          <S.DateInput
            placeholder="MM"
            value={month}
            inputMode="numeric"
            maxLength={2}
            onChange={handleNumberInput(setMonth)}
            onBlur={handleMonthBlur}
          />
          <S.DateInput
            placeholder="DD"
            value={day}
            inputMode="numeric"
            maxLength={2}
            onChange={handleNumberInput(setDay)}
            onBlur={handleDayBlur}
          />
        </S.DateInputWrapper>
      </S.InputWrapper>

      {/* 팀 이름 */}
      <S.InputWrapper>
        <S.InputLabel>팀 이름</S.InputLabel>
        <S.InputText placeholder="이름을 입력해주세요." />
      </S.InputWrapper>

      {/* 버튼 */}
      <S.ButtonWrapper>
        <S.CancleButton onClick={() => setCreateMeetToggle(false)}>
          취소하기
        </S.CancleButton>
        <S.CreateButton>개설하기</S.CreateButton>
      </S.ButtonWrapper>
    </S.MeetCreateContainer>
  );
};

export default MeetCreateModal;
