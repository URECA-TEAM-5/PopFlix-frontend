import request from '../axios';

const SEARCH_MOVIES_BY_KEYWORD = '/api/movies?page=0&size=10&keyword=';

export const searchMovies = async (keyword) => {
  try {
    const response = await request.get(SEARCH_MOVIES_BY_KEYWORD + keyword);
    console.log(response);
    return response;
  } catch (e) {
    console.log(`[ searchMovies ] >> ${e}`);
  }
};
