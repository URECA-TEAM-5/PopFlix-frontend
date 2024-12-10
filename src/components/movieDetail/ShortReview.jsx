import { ShortReviewContainer, ShortReviewTopContainer, ShortReviewCardContainer, ShortReviewCard, ShortReviewText, UserName } from './style/ShortReview';
import { PoppleText } from './style/PoppleTip';
import { moviesData } from '../main/data';
import { GenreButton } from './style/MovieIntro';
import { shortReviewData } from '../main/data';
const ShortReview = ({ movieId }) => {
  const movie = moviesData[movieId - 1];
  return (
    <ShortReviewContainer>
      <ShortReviewTopContainer>
        <PoppleText style={{ padding: '0' }}>
          <p style={{ fontWeight: 'bold' }}> {movie.title} 한줄평💬</p>
        </PoppleText>
        <GenreButton style={{ backgroundColor: '#F09605', color: 'white' }}>Best</GenreButton>
      </ShortReviewTopContainer>
      <ShortReviewCardContainer>
        {shortReviewData.map((review) => (
           <ShortReviewCard key={review.id}>
           <ShortReviewText>{review.review}</ShortReviewText>
           <UserName>{review.userName}</UserName>
         </ShortReviewCard>
      ))}
      </ShortReviewCardContainer>
    </ShortReviewContainer>
  );
};
export default ShortReview;