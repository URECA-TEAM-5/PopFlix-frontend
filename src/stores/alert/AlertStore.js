import { create } from 'zustand';

export const useAlert = create((set) => ({
  alertOpen: false,

  handleAlertOpen: (type, message) => {
    set({ alertType: type, alertMessage: message });
    set({ alertOpen: true });
  },

  handleAlertClose: (redirectPath) => {
    set({ alertOpen: false });
    redirectPath && (window.location.href = redirectPath);
  },
}));
