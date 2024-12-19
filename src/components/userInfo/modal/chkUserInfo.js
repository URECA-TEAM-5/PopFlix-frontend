export const chkUserInfo = () => {
  if (sessionStorage.getItem('accessToken')) {
    return JSON.parse(sessionStorage.getItem('user'));
  }
  console.log('[ 사용자 정보가 없습니다 ]');
  return false;
};
