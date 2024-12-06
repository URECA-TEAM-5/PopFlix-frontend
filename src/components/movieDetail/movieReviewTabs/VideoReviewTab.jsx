import { useEffect, useState, useRef } from 'react';
import { moviesData } from '../../main/data';
import { youtubeApi } from '../../../api/review/videoReview';
import { useVideoReviewStore } from '../../../stores/review/videoReviewStore';
import { VideoReviewTabContainer } from './style/VideoReviewTab';
const VideoReviewTab = ({ movieId }) => {
  const movie = moviesData[movieId - 1];
  const { youtubeVideos, setYoutubeVideos, setLoading } = useVideoReviewStore();

  useEffect(() => {
    const fetchVideo = async () => {
      if (youtubeVideos.length === 0) {
        setLoading(true);
        try {
          const videoData = await youtubeApi(movie.title);
          console.log('영상리뷰 데이터 : ', videoData);
          setYoutubeVideos(videoData);
        } catch (error) {
          console.error('Error fetching YouTube video:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchVideo();
  }, [movie.title, youtubeVideos.length, setYoutubeVideos, setLoading]);

  return (
    <VideoReviewTabContainer>
      {youtubeVideos.length > 0 ? (
        youtubeVideos.map((video) => (
          <div key={video.id.videoId}>
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
