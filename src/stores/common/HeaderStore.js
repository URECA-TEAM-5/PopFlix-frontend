import { create } from 'zustand';

export const useHeader = create((set) => ({
  category: '전체',
  setCategory: (val) => set({ category: val }),
}));
