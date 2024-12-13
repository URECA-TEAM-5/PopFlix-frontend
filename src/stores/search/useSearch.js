import { create } from 'zustand';
import { searchMovies } from '../../api/search/search';

export const useSearch = create((set) => ({
  searchResponse: '',
  searchByKeyword: (keyword) => {
    set({ isLoading: true, error: null, message: null });
    try {
      console.log(`[ searchByKeyword ]`);
      const response = searchMovies(keyword);
      set({ searchResponse: response });
    } catch (e) {
      set({ error: '[ searchByKeyword ] >> error', isLoading: false });
    }
  },
}));
