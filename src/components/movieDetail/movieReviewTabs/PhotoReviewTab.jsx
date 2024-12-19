import React from 'react';
import { Grid2, Card, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useMovieDetail } from '../../../stores/movieDetail/MovieDetailStore';
import { useEffect } from 'react';
import EmptyResult from '../../common/emptyResult/EmptyResult';
import { EmptyComments } from '../../review/comments/style/CommentStyle';
import ErrorEmpty from '../../error/ErrorEmpty';


const PhotoReviewTab = () => {
  const navigate = useNavigate();
  const { photoReviewData } = useMovieDetail();

  const handlePhotoDetail = (reviewId) => {
    navigate(`/photo-review/${reviewId}`);
  };
  return (
    <>
      {photoReviewData && photoReviewData.length > 0 ? (
        <Grid2 container justifyContent="center" alignItems="center" spacing={1}>
          {photoReviewData.map((review, index) => (
            <Grid2 xs={4} sm={4} md={4} key={index}>
              <Card onClick={() => handlePhotoDetail(review.reviewId)}>
                <CardMedia
                  component="img"
                  sx={{
                    maxWidth: '300px',
                    maxHeight: '300px',
                    minHeight: '250px',
                  }}
                  image={review.reviewImage}
                  alt={`Photo Review ${review.id}`}
                />
              </Card>
            </Grid2>
          ))}
        </Grid2>
      ) : (
        <EmptyComments className="empty-comments" style={{ border: 'none' }}>
          <ErrorEmpty message={'작성된 포토리뷰가 없습니다.'} description={'회원님의 리뷰를 작성해주세요!'} />
          <div className="line"></div>
        </EmptyComments>
      )}
    </>
  );
};

export default PhotoReviewTab;
