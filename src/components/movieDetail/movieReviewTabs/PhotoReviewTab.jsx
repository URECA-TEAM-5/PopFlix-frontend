import React from 'react';
import { Grid, Card, CardMedia } from '@mui/material';

const photoReviews = [
  { id: 1, image: 'https://via.placeholder.com/300' },
  { id: 2, image: 'https://via.placeholder.com/300' },
  { id: 3, image: 'https://via.placeholder.com/300' },
  { id: 4, image: 'https://via.placeholder.com/300' },
  { id: 5, image: 'https://via.placeholder.com/300' },
  { id: 6, image: 'https://via.placeholder.com/300' },
];

const PhotoReviewTab = () => {
  return (
    <PhotoReviewTabContainer>
      <Grid2 container justifyContent="center" alignItems="center" spacing={0.5}>
        {photoReviews.map((review) => (
          <Grid2 xs={4} sm={4} md={4} key={review.id}>
            <Card>
              <CardMedia
                component="img"
                sx={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                }}
                image={review.image}
                alt={`Photo Review ${review.id}`}
              />
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </PhotoReviewTabContainer>
  );
};

export default PhotoReviewTab;
