import api from './api';

interface KakaoLoginResponse {
  accessToken: string;
  refreshToken: string;
}

export const postKakaoLogin = async (
  code: string,
): Promise<KakaoLoginResponse> => {
  const response = await api.post(`/api/auth/kakao-login`, {
    code,
  });

  return response.data;
};
