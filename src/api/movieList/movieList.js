// import request from "../axios";
import axios from 'axios';

export const getMovieList = async (page,size) => {
//   const movieData = await axios.get(`https://popflix.org/api/movies?page=${page}&size=${size}`);
  const movieData = await axios.get('https://popflix.org/api/movies?page=0&size=20');
  console.log(movieData.data);
  return movieData.data;
};
