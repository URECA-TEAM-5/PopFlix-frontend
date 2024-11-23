import { create } from 'zustand';

export const useHeader = create((set) => ({
  category: '전체',
  keyword: '',
  setCategory: (val) => set({ category: val }),
  setKeyword: (val) => set({ keyword: val }),
}));
