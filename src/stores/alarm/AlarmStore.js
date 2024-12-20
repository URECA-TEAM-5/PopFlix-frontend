import { create } from 'zustand';
import { apiGetAlarmList } from '../../api/alarm/alarm';

export const useAlarm = create((set) => ({
  alarmList: [],
  setAlarmList: async () => {
    set({ isLoading: true, error: null, message: null });
    try {
      console.log(`[ setAlarmList ]`);
      const response = apiGetAlarmList();
      set({ reviewData: response });
      return response;
    } catch (e) {
      set({ error: '[ setAlarmList ] >> error', isLoading: false });
    }
  },
}));
