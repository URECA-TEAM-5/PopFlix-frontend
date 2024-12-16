import { create } from 'zustand';
import { apiGetSearchMovies } from '../../api/search/search';

export const useSearch = create((set) => ({
  searchResponse: '',
  searchByKeyword: async (keyword) => {
    set({ isLoading: true, error: null, message: null });
    try {
      console.log(`[ searchByKeyword ]`);
      const response = await apiGetSearchMovies(keyword);
      console.log(response);
      set({ isLoading: false, searchResponse: response });
    } catch (e) {
      set({ error: '[ searchByKeyword ] >> error', isLoading: false });
    }
  },
}));
