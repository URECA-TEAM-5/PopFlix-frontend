import { create } from 'zustand';
import { getMovieDetail, getMovieRating } from '../../api/movieDetail/movieDetail';

export const useMovieDetail = create((set) => ({
  movieData: '',
  ratingData: '',

  setMovieData: async (id) => {
    set({ isLoading: true, error: null, message: null });
    try {
      console.log(`[ setMovieData ]`);
      const response = await getMovieDetail(id);
      set({ isLoading: false, movieData: response });
      return response;
    } catch (e) {
      set({ error: '[ setMovieData ] >> error', isLoading: false });
    }
  },

  setRatingData: async (id) => {
    set({ isLoading: true, error: null, message: null });
    try {
      console.log(`[ setRatingData ]`);
      const response = await getMovieRating(id);
      set({ isLoading: false, ratingData: response });
      return response;
    } catch (e) {
      set({ error: '[ setRatingData ] >> error', isLoading: false });
    }
  },
}));
