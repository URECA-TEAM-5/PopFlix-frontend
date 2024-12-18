import React from 'react';
import { Grid2, Card, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useMovieDetail } from '../../../stores/movieDetail/MovieDetailStore';
import { useEffect } from 'react';
const photoReviews = [
  { id: 1, image: 'https://via.placeholder.com/300' },
  { id: 2, image: 'https://via.placeholder.com/300' },
  { id: 3, image: 'https://via.placeholder.com/300' },
  { id: 4, image: 'https://via.placeholder.com/300' },
  { id: 5, image: 'https://via.placeholder.com/300' },
  { id: 6, image: 'https://via.placeholder.com/300' },
];

const PhotoReviewTab = () => {
  const navigate = useNavigate();
  const {photoReviewData} = useMovieDetail();
  
 const handlePhotoDetail = (reviewId) => {
  navigate(`/photo-review/${reviewId}`)
  
 }
  return (
    
      <Grid2 container justifyContent="center" alignItems="center" spacing={1}>
        {photoReviewData.map((review,index) => (
          <Grid2 xs={4} sm={4} md={4} key={index}>
            <Card onClick={() => handlePhotoDetail(review.reviewId)}>
              <CardMedia
                component="img"
                sx={{
                  maxWidth:'300px',
                  maxHeight:'300px',
                  minHeight:'250px',
                  
                  // objectFit: 'cover',
                }}
                image={review.reviewImage}
                alt={`Photo Review ${review.id}`}
              />
            </Card>
          </Grid2>
        ))}
      </Grid2>
   
  );
};

export default PhotoReviewTab;
