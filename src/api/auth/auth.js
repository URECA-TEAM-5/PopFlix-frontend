import { chkUserInfo } from '../../components/userInfo/modal/chkUserInfo';
import request from '../axios';

const GET_AUTH_ME = '/auth/me';
const SIGNUP = '/api/users/register';
const CHECKDUPLICATE = '/api/users/check-nickname?nickname=';
const UPDATEUSER = '/api/users/';
const SIGNOUT = '/api/users/';

export const apiGetUserInfo = async () => {
  const response = await request.get(GET_AUTH_ME);
  return response;
};

export const apiPostSignup = async (formData) => {
  const response = await request.post(SIGNUP, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
};

export const apiCheckDuplicate = async (nickname) => {
  try {
    const response = await request.get(CHECKDUPLICATE + nickname);
    return response.data.response;
  } catch (error) {
    throw error;
  }
};

export const apiUpdateUserInfo = async (formData) => {
  const userId = chkUserInfo().userId;
  const response = await request
    .patch(UPDATEUSER + userId, formData, {
      headers: {
        'content-Type': 'multipart/form-data',
      },
    })
    .then(async () => await apiGetUserInfo());
  sessionStorage.setItem('user', JSON.stringify(response.data.response));
  return response.data.response;
};

export const apiDeleteSignout = async (userId) => {
  const response = await request.delete(SIGNOUT + userId);
  return response;
};
