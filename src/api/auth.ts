import api from './api';

interface KakaoLoginResponse {
  accessToken: string;
  refreshToken: string;
}

export const postKakaoLogin = async (
  code: string,
): Promise<KakaoLoginResponse> => {
  const response = await api.post(`/auth/kakao-login`, {
    code,
  });

  return response.data;
};
