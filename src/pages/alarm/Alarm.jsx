import React from 'react';
import AlarmMessage from '../../components/alarm/AlarmMessage';
import { AlarmContainer, ListContainer } from '../../components/alarm/style/AlarmStyle';
import TitleCheckBox from '../../components/alarm/TitleCheckBox';
import AlarmTop from '../../components/alarm/AlarmTop';

const Alarm = () => {
  return (
    <>
      <AlarmContainer>
        <AlarmTop />
        <div className="alarm__current">
          <TitleCheckBox title={'오늘 받은 알림'} />
          <ListContainer>
            <AlarmMessage />
            <AlarmMessage />
          </ListContainer>
        </div>
        <div className="alarm__previous">
          <TitleCheckBox title={'이전 알림'} />
          <ListContainer>
            <AlarmMessage />
            <AlarmMessage />
          </ListContainer>
        </div>
      </AlarmContainer>
    </>
  );
};

export default Alarm;
