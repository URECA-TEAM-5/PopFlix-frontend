import axios from 'axios';

export const getMovieDetail = async (id) => {
  const movieDetailData = await axios.get(`https://popflix.org/api/movies/${id}/details`);
  console.log(movieDetailData.data);
  return movieDetailData.data;
};