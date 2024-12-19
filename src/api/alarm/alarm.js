import { chkUserInfo } from '../../components/userInfo/modal/chkUserInfo';
import request from '../axios';

const GET_ALARM_LIST = '/api/notifications?userId=';

export const apiGetAlarmList = async () => {
  console.log('[ apiGetAlarmList ]');
  const userId = chkUserInfo().userId;
  try {
    const response = await request.get(GET_ALARM_LIST + `${userId}`);
    console.log(response);
    return response.data.response;
  } catch (e) {
    console.log(`[ apiGetAlarmList ] >> ${e}`);
  }
};
