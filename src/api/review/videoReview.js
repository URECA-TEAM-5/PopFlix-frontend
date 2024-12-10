import axios from 'axios';

export const youtubeApi = async (movieTitle) => {
  try {
    const videoResponse = await axios.get('https://youtube.googleapis.com/youtube/v3/videos', {
      params: {
        part: 'snippet',
        q: movieTitle+'리뷰',
        maxResults: 5,
        type: 'video',
        reginonCode: 'KR',
        key: import.meta.env.VITE_YOUTUBE_API_KEY,
      },
    });
    return videoResponse.data.items;
    
  } catch (error) {
    console.error('youtube API ERROR: ',error);
  }
};
