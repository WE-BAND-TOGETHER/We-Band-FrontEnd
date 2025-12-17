import api from './api';

export interface MyScheduleResponse {
  startDate: string;
  days: {
    date: string;
    blocks: number[];
  }[];
}

export const getMySchedule = async (
  baseDate: Date,
): Promise<MyScheduleResponse> => {
  const nextDay = new Date(baseDate);
  nextDay.setDate(nextDay.getDate() + 1);

  const day = nextDay.toISOString().slice(0, 10);

  const response = await api.get('/calendar/week', {
    params: { day },
  });

  return response.data;
};

interface UpdateMyScheduleRequest {
  days: {
    date: string;
    blocks: number[];
  }[];
}

export const postMySchedule = async (
  baseDate: Date,
  payload: UpdateMyScheduleRequest,
) => {
  const nextDay = new Date(baseDate);
  nextDay.setDate(nextDay.getDate() + 1);

  const day = nextDay.toISOString().slice(0, 10);

  return api.post('/calendar/week', payload, {
    params: { day },
  });
};
