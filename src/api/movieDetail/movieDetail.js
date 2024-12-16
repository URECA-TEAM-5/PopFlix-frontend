import axios from 'axios';

export const getMovieDetail = async (id) => {
  // const movieDetailData = await axios.get(`http://localhost:8080/api/movies/${id}/details`);
  const movieDetailData = await axios.get(`https://popflix.org/api/movies/${id}/details`);
  return movieDetailData.data;
};
export const getReviewsByMovie = async (id) =>{
  const movieDetailData = await axios.get(`https://popflix.org/api/reviews/movie/${movieId}`);
  return movieDetailData.data;
}