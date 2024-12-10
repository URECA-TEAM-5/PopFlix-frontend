import { alarm_data } from '../../components/alarm/data/alarmData';
import request from '../axios';

export const getAlarmList = async () => {
  console.log('[ getAlarmList ]');
  return alarm_data.reviews;
};
