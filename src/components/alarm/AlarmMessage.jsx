import React from 'react';
import { MessageContainer, MessageText } from './style/AlarmStyle';
import { colors } from '../../global/globalStyle';
import { Avatar } from '@mui/material';

const AlarmMessage = ({ genre, review_type, review, create_at, nickname, profile_image }) => {
  return (
    <>
      <MessageContainer className="regular">
        <div className="inner__section">
          <div className="message__section">
            <MessageText className="alarm__event">
              선택하신 <span className="text__highlight">&nbsp;{genre ? `${genre}` : 'genre'}</span>장르에 새로운&nbsp;{' '}
              <span className="text__highlight">{review_type || 'review_type'}</span>가 등록되었습니다.
            </MessageText>
            <MessageText className="alarm__time" $fontColor={colors.cement_gray}>
              <span>&nbsp;{create_at ? ` ${create_at}` : 'create_at'}</span>
            </MessageText>
          </div>
          <div className="message__section">
            <div className="profileImage__section">
              <Avatar className="profileImage" alt="no images" src={profile_image} />
            </div>
            <MessageText className="alarm__nickname" $width={9} $fontColor={colors.orange}>
              <span className="text__highlight">&nbsp;{nickname ? `${nickname}` : 'nickname'}</span>
            </MessageText>
            <MessageText className="alarm__message" $fontColor={colors.cement_gray}>
              <span>&nbsp;{review ? ` ${review}` : 'review'}</span>
            </MessageText>
          </div>
        </div>
      </MessageContainer>
    </>
  );
};

export default AlarmMessage;
