// import request from "../axios";
import axios from 'axios';
const localURL = 'http://localhost:8080';
const popflixURL = 'https://popflix.org';
export const getMovieList = async (page,size,genre,sort) => {
  if(genre == null){
    genre='';
  }
  else if(genre == 'All'){
    genre='';
  }
  // const movieData = await axios.get(localURL+`/api/movies?page=${page}&size=${size}&genre=${genre}`);
  const movieData = await axios.get(popflixURL+`/api/movies?page=${page}&size=${size}&genre=${genre}&sort=${sort}`);
//   const movieData = await axios.get('https://popflix.org/api/movies?page=0&size=200');
  return movieData.data;
};
