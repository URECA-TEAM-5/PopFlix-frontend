import React, { useRef } from 'react';
import { CommentItemContainer, IconCheckLiked } from './style/CommentStyle';
import DefaultButton from '../../common/buttons/DefaultButton';
import OutlineButton from '../../common/buttons/OutlineButton';
import DefaultBadge from '../../common/badge/DefaultBadge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faHeart as heartEmpty } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartFilled } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../../global/globalStyle';
import { usePhotoReview } from '../../../stores/review/PhotoReviewStore';
import { useAlert } from '../../../stores/alert/AlertStore';
import AlertMessage from '../../common/alert/AlertMessage';

const CommentItem = ({ isBest, commentId, profileImageUrl, nickname, createdAt, comment, likeCount, isLiked }) => {
  const { setIsLiked } = usePhotoReview();
  const { handleAlertOpen, handleAlertClose } = useAlert();
  const likedState = useRef(isLiked);

  const handleIsLiked = async () => {
    console.log('[ handleIsLiked ]');
    likedState.current = !likedState.current;
    const response = await setIsLiked(commentId, likedState.current);
    response && handleAlertOpen('success', `[${commentId}]번 댓글에 ${likedState.current ? '좋아요' : '좋아요 해제'}가 등록되었습니다!`);
  };

  return (
    <>
      <AlertMessage handleClose={handleAlertClose} />
      <CommentItemContainer>
        <div className="comments__item">
          <div className="profile__section">
            <div className="profile">
              <img className="profile__image" src={profileImageUrl ? profileImageUrl : '/assets/profile_1.svg'} alt="프로필 이미지" />
            </div>
          </div>
          <div className="div__column">
            <div className="div__row">
              {isBest && <DefaultBadge title={'BEST'} w={3.4375} fontSize={0.875} fontWeight={'bold'} />}
              <span className="text__nickname">{nickname ? nickname : 'nickname'}</span>
              <span className="text__date">{createdAt ? new Date(createdAt).toLocaleDateString() : 'createAt'}</span>
            </div>
            <p className="text__review">{comment ? comment : 'comment'}</p>
            <div className="div__row">
              <div className="div__row">
                <OutlineButton
                  w={5}
                  h={1.5625}
                  name={
                    <div className="div__row icon__section">
                      <IconCheckLiked $isClicked={likedState.current}>
                        <FontAwesomeIcon icon={likedState.current ? heartFilled : heartEmpty} />
                      </IconCheckLiked>
                      <span>{likeCount + (likedState.current ? 1 : 0) * 1}</span>
                    </div>
                  }
                  onClick={handleIsLiked}
                />
              </div>
            </div>
          </div>
        </div>
        <DefaultButton
          onClick={() => handleAlertOpen('warning', '신고하기 버튼 클릭')}
          name={'신고'}
          w={2}
          h={1.5}
          bgColor={colors.navy_gray}
          fontColor={colors.orange}
          fontSize={0.75}
        />
      </CommentItemContainer>
    </>
  );
};

export default CommentItem;
