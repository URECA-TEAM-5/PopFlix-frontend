export const chkUserInfo = () => {
  if (sessionStorage.getItem('accessToekn')) {
    console.log(`[ accessToken ] >> ${sessionStorage.getItem('accessToken')}`);
    return sessionStorage.getItem('user');
  }
  console.log('[ 사용자 정보가 없습니다 ]');
  return false;
};
