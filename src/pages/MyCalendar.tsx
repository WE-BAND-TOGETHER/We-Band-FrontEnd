import Calendar from '@components/Calendar/Calendar';
import myScheduleMock from '@mock/mySchedule.json';

const MyCalendarPage = () => {
  return (
    <Calendar
      startDate={myScheduleMock.startDate}
      mode="MY"
      weeklySchedules={myScheduleMock.days}
      totalUser={1}
    />
  );
};

export default MyCalendarPage;
