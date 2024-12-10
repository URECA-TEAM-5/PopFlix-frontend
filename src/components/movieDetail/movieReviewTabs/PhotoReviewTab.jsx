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
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={0.5}
    >
      {photoReviews.map((review) => (
        <Grid item xs={4} sm={4} md={4} key={review.id}>
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
        </Grid>
      ))}
    </Grid>
  );
};

export default PhotoReviewTab;
