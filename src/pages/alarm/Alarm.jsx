import React, { useEffect, useRef, useState } from 'react';
import AlarmMessage from '../../components/alarm/AlarmMessage';
import { AlarmContainer, ListContainer } from '../../components/alarm/style/AlarmStyle';
import TitleCheckBox from '../../components/alarm/TitleCheckBox';
import AlarmTop from '../../components/alarm/AlarmTop';
import AlaramEmpty from '../../components/alarm/AlaramEmpty';
import { useQuery } from '@tanstack/react-query';
import { useAlarm } from '../../stores/alarm/AlarmStore';

const Alarm = () => {
  const { setAlarmList } = useAlarm();

  const { data } = useQuery({
    queryKey: ['userAlarmList'],
    queryFn: async () => {
      return await setAlarmList();
    },
    staleTime: 1000 * 10,
  });

  return (
    <>
      {data && (
        <AlarmContainer className="alarm-container">
          {data.length == 0 ? (
            <AlaramEmpty />
          ) : (
            <div className="alarm-inner__section">
              <AlarmTop />
              <div className="alarm-current alarm-list__wrap">
                <TitleCheckBox title={'오늘 받은 알림'} />
                <ListContainer className="alarm-list">
                  <AlarmMessage />
                  <AlarmMessage />
                </ListContainer>
              </div>
              <div className="alarm__previous ">
                <TitleCheckBox title={'이전 알림'} />
                <ListContainer>
                  <AlarmMessage />
                  <AlarmMessage />
                </ListContainer>
              </div>
            </div>
          )}
        </AlarmContainer>
      )}
    </>
  );
};

export default Alarm;
