import React from 'react';
import { MessageContainer, MessageText } from './style/AlarmStyle';
import { colors } from '../../global/globalStyle';

const AlarmMessage = () => {
  return (
    <>
      <MessageContainer className="regular">
        <div className="inner__section">
          <div className="message__section">
            <MessageText className="alarm__event" $width={24.375}>
              선택하신 스릴러 장르에 새로운 리뷰가 등록되었습니다.
            </MessageText>
            <MessageText className="alarm__time" $fontColor={colors.cement_gray}>
              10분전
            </MessageText>
          </div>
          <div className="message__section">
            <MessageText className="alarm__nickname" $width={9} $fontColor={colors.orange}>
              나이트 플라이트
            </MessageText>
            <MessageText className="alarm__message" $fontColor={colors.cement_gray}>
              무모함과 운의 조합.
            </MessageText>
          </div>
        </div>
      </MessageContainer>
    </>
  );
};

export default AlarmMessage;
