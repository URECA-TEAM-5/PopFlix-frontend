import React, { useEffect, useRef, useState } from 'react';
import AlarmMessage from '../../components/alarm/AlarmMessage';
import { AlarmContainer, ListContainer } from '../../components/alarm/style/AlarmStyle';
import TitleCheckBox from '../../components/alarm/TitleCheckBox';
import AlarmTop from '../../components/alarm/AlarmTop';
import AlaramEmpty from '../../components/alarm/AlaramEmpty';

const Alarm = () => {
  const [alarm, setAlarm] = useState([]);
  const isLoaded = useRef(false);

  useEffect(() => {
    if (!isLoaded.current) {
      isLoaded.current = true;
      setAlarm([]);
    }
  }, [alarm]);

  return (
    <>
      <AlarmContainer className="alarm-container">
        {alarm.length !== 0 ? (
          <AlaramEmpty />
        ) : (
          <div className="alarm-inner__section">
            {/* <div className="inner__wrap"> */}
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
            {/* </div> */}
          </div>
        )}
      </AlarmContainer>
    </>
  );
};

export default Alarm;
