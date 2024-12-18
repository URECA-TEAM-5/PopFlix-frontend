import { create } from 'zustand';
import { getMovieDetail, getMovieRating,getPhotoReviewsByMovie } from '../../api/movieDetail/movieDetail';

export const useMovieDetail = create((set) => ({
  movieData: '',
  ratingData: '',
  photoReviewData: '',
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
  setPhotoReviewData: async (id) => {
    set({ isLoading: true, error: null, message: null });
    try {
      console.log(`[ getPhotoReviewsByMovie ]`);
      const response = await getPhotoReviewsByMovie(id);
      set({ isLoading: false, photoReviewData: response });
      return response;
    } catch (e) {
      set({ error: '[ getPhotoReviewsByMovie ] >> error', isLoading: false });
    }
  },
  
}));
