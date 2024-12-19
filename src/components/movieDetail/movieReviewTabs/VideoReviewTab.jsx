import { useEffect, useState, useRef } from 'react';
// import { moviesData } from '../../main/data';
// import { youtubeApi } from '../../../api/review/videoReview';
import { useVideoReviewStore } from '../../../stores/review/videoReviewStore';
import { VideoReviewTabContainer } from './style/VideoReviewTab';
import { useMovieDetail } from '../../../stores/movieDetail/MovieDetailStore';

const VideoReviewTab = ({ movieId}) => {
  const [isLoading, setIsLoading] = useState(true);

  const { youtubeVideos, setYoutubeVideos, setLoading } = useVideoReviewStore();
  // const fetchVideo = async () => {
  //   if (youtubeVideos.length === 0) {
  //     setLoading(true);
  //     try {
  //       const videoData = await youtubeApi(movieData.title);
  //       console.log('영상리뷰 데이터 : ', videoData);
  //       setYoutubeVideos(videoData);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching YouTube video:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  // };
  useEffect(() => {
   if(isLoading){
    
    console.log('movieId : ',movieId);
    
    // fetchVideo();
   }
  }, [isLoading]);

  return (
    <VideoReviewTabContainer>
      {youtubeVideos.length > 0 ? (
        youtubeVideos.map((video,index) => (
          <div key={index}>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <p>{video.snippet.title}</p>
          </div>
        ))
      ) : (
        <p>영화 리뷰 영상이 없습니다.</p>
      )}
    </VideoReviewTabContainer>
  );
};

export default VideoReviewTab;
