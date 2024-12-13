import request from '../axios';

const GET_AUTH_ME = '/auth/me';

export const getUserInfo = async () => {
  console.log('[ getUserInfo ]');
  const response = request.get(GET_AUTH_ME);
  console.log(response);
  return response;
};
