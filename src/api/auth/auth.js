import request from '../axios';

const GET_AUTH_ME = '/auth/me'; // 현재 로그인 하고 있는 사람 정보
const SIGNUP = '/api/users/register'; // 회원가입
const CHECKDUPLICATE = '/api/users/check-nickname'; // 닉네임 중복 확인

export const apiGetUserInfo = async () => {
  console.log('[ apiGetUserInfo ]');
  const response = await request.get(GET_AUTH_ME);
  console.log(response);
  return response;
};

export const apiPostSignup = async (data) => {
  console.log('[ apiPostSignup ]');
  const response = await request.post(SIGNUP, data);
  console.log(response);
  return response;
};

export const apiCheckDuplicate = async (nickname) => {
  console.log('[ apiCheckDuplicate ]');
  try {
    const response = await request.get(CHECKDUPLICATE, {
      params: { nickname },
    });
    console.log(response);
    return response.data.response;
  } catch (error) {
    throw error;
  }
};
