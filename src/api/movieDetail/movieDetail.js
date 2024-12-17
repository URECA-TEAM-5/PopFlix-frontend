import axios from 'axios';
import request from '../axios';
const localURL = 'http://localhost:8080';
const popflixURL = 'https://popflix.org';

const GET_MOVIE_DETAIL = '/api/movies/';
const GET_MOVIE_RATING = '/api/movies/';

export const getMovieDetail = async (id) => {
  console.log('[ getMovieDetail ]');
  // const movieDetailData = await axios.get(localURL+`/api/movies/${id}/details`);
  // const movieDetailData = await request.get(`/api/movies/${id}/details`);

  // return movieDetailData.data;

  try {
    const response = await request.get(GET_MOVIE_DETAIL + `${id}/details`);
    console.log(response.data.response);
    return response.data.response;
  } catch (e) {
    console.log(`[ getMovieDetail ] >> ${e}`);
    // window.location.href = `/error`;
  }
  return response;
};
export const getReviewsByMovie = async (movieid) => {
  const movieDetailData = await axios.get(`https://popflix.org/api/reviews/movie/${movieId}`);
  return movieDetailData.data;
};
export const getMovieRating = async (movieId) => {
  // const movieRatingData = await axios.get(popflixURL + `/api/movies/${movieId}/ratings`);
  // const movieRatingData = await axios.get(localURL+`/api/movies/${movieId}/ratings`);

  try {
    const response = await request.get(GET_MOVIE_RATING + `${movieId}/ratings`);
    console.log('[ getMovieRating ]');
    console.log(response.data.response);
    return response.data.response;
  } catch (e) {
    console.log(`[ getMovieRating ] >> ${e}`);
    // window.location.href = `/error`;
  }

  return movieRatingData.data;
};
export const addRating = async (data) => {
  console.log(data);
  try {
    const movieAddRating = await axios.post(`${popflixURL}/api/movies/rating`, data);
    // const movieAddRating = await axios.post(`${localURL}/api/movies/rating`, data);
    return movieAddRating.data; // 서버의 응답 데이터 반환
  } catch (error) {
    console.error('Error adding rating:', error);
    throw error; // 에러를 호출한 곳으로 전달
  }
};
