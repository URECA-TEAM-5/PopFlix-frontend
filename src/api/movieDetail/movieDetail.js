import axios from 'axios';

export const getMovieDetail = async (id) => {
  const movieDetailData = await axios.get(`http://localhost:8080/api/movies/${id}/details`);
  // const movieDetailData = await axios.get(`https://popflix.org/api/movies/${id}/details`);
  return movieDetailData.data;
};
export const getReviewsByMovie = async (movieid) =>{
  const movieDetailData = await axios.get(`https://popflix.org/api/reviews/movie/${movieId}`);
  return movieDetailData.data;
}
export const getMovieRating = async (movieId) =>{
  // const movieRatingData = await axios.get(`https://popflix.org/api/movies/${movieId}/rating`);
  const movieRatingData = await axios.get(`http://localhost:8080/api/movies/${movieId}/ratings`);
  return movieRatingData.data;
}