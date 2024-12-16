// import request from "../axios";
import axios from 'axios';

export const getMovieList = async (page,size,genre) => {
  if(genre == null){
    genre='';
  }
  else if(genre == 'All'){
    genre='';
  }
  // const movieData = await axios.get(`http://localhost:8080/api/movies?page=${page}&size=${size}&genre=${genre}`);
  const movieData = await axios.get(`https://popflix.org/api/movies?page=${page}&size=${size}&genre=${genre}`);
//   const movieData = await axios.get('https://popflix.org/api/movies?page=0&size=200');
  return movieData.data;
};
