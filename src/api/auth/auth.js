import request from '../axios';

const GET_AUTH_ME = '/auth/me';
const SIGNUP = '/api/users/register';
const CHECKDUPLICATE = '/api/users/check-nickname?nickname=';
const UPDATEUSER = '/api/users/';
const SIGNOUT = '/api/users/';

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
      'Content-Type': 'multipart/form-data',
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
