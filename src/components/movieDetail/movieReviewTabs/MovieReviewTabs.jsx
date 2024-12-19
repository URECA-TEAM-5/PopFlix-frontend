import { useState } from 'react';
import PhotoReviewTab from './PhotoReviewTab';
import ShortReviewTab from './ShortReviewTab';
import VideoReviewTab from './VideoReviewTab';
import { MovieReviewContainer, MovieReviewTabMenu, MovieReviewTab, Content } from './style/MovieReviewTabs';
const MovieReviewTabs = ({ movieId}) => {
  const [activeTab, setActiveTab] = useState('photos');
  const reviewTabSelect = () => {
    switch (activeTab) {
      case 'photos':
        return <PhotoReviewTab movieId={movieId} />;
      case 'shorts':
        return <ShortReviewTab movieId={movieId} />;
      case 'videos':
        return <VideoReviewTab movieId={movieId}/>;
      default:
        return null;
    }
  };
  return (
    <MovieReviewContainer>
      <MovieReviewTabMenu>
        <MovieReviewTab $isActive={activeTab === 'photos'} onClick={() => setActiveTab('photos')}>
          포토리뷰
        </MovieReviewTab>
        <MovieReviewTab $isActive={activeTab === 'shorts'} onClick={() => setActiveTab('shorts')}>
          한줄평💬
        </MovieReviewTab>
        <MovieReviewTab $isActive={activeTab === 'videos'} onClick={() => setActiveTab('videos')}>
          리뷰 영상
        </MovieReviewTab>
      </MovieReviewTabMenu>
      <Content>{reviewTabSelect()}</Content>
    </MovieReviewContainer>
  );
};
export default MovieReviewTabs;
