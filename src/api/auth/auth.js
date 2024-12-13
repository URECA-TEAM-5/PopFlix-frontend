import request from '../axios';

const GET_AUTH_ME = '/auth/me';
const SIGNUP = '/api/users/register';

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
