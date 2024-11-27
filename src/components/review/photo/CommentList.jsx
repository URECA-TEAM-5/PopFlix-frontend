import React, { useState } from 'react';
import { CommentListContainer } from './style/PhotoReviewStyle';
import DefaultButton from '../../common/buttons/DefaultButton';
import { colors } from '../../../global/globalStyle';
import OutlineButton from '../../common/buttons/OutlineButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartEmpty } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartFilled } from '@fortawesome/free-solid-svg-icons';
import DefaultBadge from '../../common/badge/DefaultBadge';

const CommentList = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <CommentListContainer>
      <div className="inner__section">
        <div className="comments__section">
          <div className="comments__head">
            <span>전체 10개</span>
            <DefaultButton className="button__sort-by-likes" w={5} h={1.875} bgColor={colors.white} fontColor={colors.orange} name={'좋아요순'} />
          </div>
        </div>
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
          </div>
        </div>
      </div>
    </CommentListContainer>
  );
};

export default CommentList;
