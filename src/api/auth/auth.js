import request from '../axios';

const GET_AUTH_ME = '/auth/me'; // 현재 로그인 하고 있는 사람 정보
const SIGNUP = '/api/users/register'; // 회원가입
const CHECKDUPLICATE = '/api/users/check-nickname?nickname='; // 닉네임 중복 확인
const UPDATEUSER = '/api/users/'; // 유저정보 업데이트
const SIGNOUT = '/api/users/'; // 회원탈퇴

export const apiGetUserInfo = async () => {
  console.log('[ apiGetUserInfo ]');
  const response = await request.get(GET_AUTH_ME);
  console.log(response);
  return response;
};

export const apiPostSignup = async (formData) => {
  console.log('[ apiPostSignup ]');
  const response = await request.post(SIGNUP, formData, {
    headers: {
      'Content-Type': 'multipart/form-data', // FormData로 요청 시 필수 헤더
    },
  });
  console.log(response);
  return response;
};

export const apiCheckDuplicate = async (nickname) => {
  console.log('[ apiCheckDuplicate ]');
  try {
    const response = await request.get(CHECKDUPLICATE + nickname);
    console.log(response);
    return response.data.response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const apiUpdateUserInfo = async (userId, formData) => {
  console.log('[ apiUpdateUserInfo ]');
  const response = await request.patch(UPDATEUSER + userId, formData, {
    headers: {
      'content-Type': 'multipart/form-data',
    },
  });
  console.log(response);
  return response;
};

export const apiDeleteSignout = async (userId) => {
  console.log('[ apiDeleteSignout ]');

  const response = await request.delete(SIGNOUT + userId);
  console.log(response);
  return response;
};
