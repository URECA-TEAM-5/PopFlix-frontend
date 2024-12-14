import { create } from 'zustand';
import { apiGetSearchMovies } from '../../api/search/search';

export const useSearch = create((set) => ({
  searchResponse: '',
  searchByKeyword: (keyword) => {
    set({ isLoading: true, error: null, message: null });
    try {
      console.log(`[ searchByKeyword ]`);
      const response = apiGetSearchMovies(keyword);
      set({ searchResponse: response });
    } catch (e) {
      set({ error: '[ searchByKeyword ] >> error', isLoading: false });
    }
  },
}));
