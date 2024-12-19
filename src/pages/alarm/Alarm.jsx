import React, { useEffect, useRef } from 'react';
import AlarmMessage from '../../components/alarm/AlarmMessage';
import { AlarmContainer, ListContainer } from '../../components/alarm/style/AlarmStyle';
import TitleCheckBox from '../../components/alarm/TitleCheckBox';
import AlarmTop from '../../components/alarm/AlarmTop';
import AlaramEmpty from '../../components/alarm/AlaramEmpty';
import { useQuery } from '@tanstack/react-query';
import { chkUserInfo } from '../../components/userInfo/modal/chkUserInfo';
import AlertMessage from '../../components/common/alert/AlertMessage';
import { useAlarm } from '../../stores/alarm/AlarmStore';
import { useAlert } from '../../stores/alert/AlertStore';

const Alarm = () => {
  const { setAlarmList } = useAlarm();
  const { handleAlertOpen, handleAlertClose } = useAlert();
  const isLoaded = useRef(false);

  useEffect(() => {
    if (!isLoaded.current) {
      isLoaded.current = true;
      if (!chkUserInfo()) {
        handleAlertOpen('warning', '로그인 후 사용이 가능합니다');
      }
    }
  });

  const { data } = useQuery({
    queryKey: ['userAlarmList'],
    queryFn: async () => {
      return await setAlarmList();
    },
    staleTime: 1000 * 10,
  });

  return (
    <>
      <AlertMessage
        type={'warning'}
        message={'로그인 후 사용이 가능합니다'}
        handleClose={() => {
          handleAlertClose('/');
        }}
      />
      {data && (
        <AlarmContainer className="alarm-container">
          {data.length === 0 ? (
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
