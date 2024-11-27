import React from 'react';
import { ImageContainer } from './style/PhotoReviewStyle';

const ReviewImage = () => {
  return (
    <ImageContainer className="ImageContainer">
      <div className="inner__section">
        <div className="text__date">2024.11.05</div>
        <img
          className="image__thumbnail"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtcGQ-qPMlTtBGAtWSTfx-hqZRcYbfqhbi2Q&s"
          alt="썸네일 이미지"
        />
      </div>
    </ImageContainer>
  );
};

export default ReviewImage;
