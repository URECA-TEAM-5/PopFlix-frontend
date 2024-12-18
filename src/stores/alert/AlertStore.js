import { create } from 'zustand';

export const useAlert = create((set) => ({
  alertOpen: false,
  handleAlertOpen: () => set({ alertOpen: true }),
  handleAlertClose: () => set({ alertOpen: false }),
}));
