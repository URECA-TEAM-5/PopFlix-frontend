import React, { useState } from 'react';
import { CommentItemContainer } from './style/CommentStyle';
import DefaultButton from '../../common/buttons/DefaultButton';
import OutlineButton from '../../common/buttons/OutlineButton';
import DefaultBadge from '../../common/badge/DefaultBadge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faHeart as heartEmpty } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartFilled } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../../global/globalStyle';

const CommentItem = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <CommentItemContainer>
      <div className="comments__item">
        <div className="profile__section">
          <div className="profile">
            <img className="profile__image" src="/assets/profile_1.svg" alt="프로필 이미지" />
          </div>
        </div>
        <div className="div__column">
          <div className="div__row">
            <DefaultBadge title={'BEST'} w={3.4375} h={1.25} fontSize={0.875} fontWeight={'bold'} />
            <span className="text__nickname">디용</span>
            <span className="text__date">2024. 11. 10</span>
          </div>
          <p className="text__review">쿠키영상 개수 알려주셔서 감사해요~</p>

          <div className="div__row">
            <div className="div__row">
              <OutlineButton
                w={5}
                h={1.5625}
                name={
                  <div className="div__row">
                    <FontAwesomeIcon className="icon" icon={isClicked ? heartFilled : heartEmpty} onClick={() => setIsClicked(!isClicked)} />
                    <span>300</span>
                  </div>
                }
              />
            </div>
            <div className="div__row">
              <OutlineButton
                w={5}
                h={1.5625}
                name={
                  <div className="div__row">
                    <FontAwesomeIcon icon={faMessage} />
                    <span>10</span>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
      <DefaultButton onClick={() => alert('신고하기 버튼')} name={'신고'} w={2} h={1.5} bgColor={colors.navy_gray} fontColor={colors.orange} fontSize={0.75} />
    </CommentItemContainer>
  );
};

export default CommentItem;
