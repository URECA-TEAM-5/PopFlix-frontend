import { create } from 'zustand';

export const useLanding = create((set) => ({
  streaming: false,
  setStreaming: (state) => set({ streaming: state }),
}));
