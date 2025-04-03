import { create } from "zustand";

interface DarkModeState {
  theme: string;
  setTheme: (theme: 'light' | 'dark') => void;
}

const useDarkModeStore = create<DarkModeState>((set) => ({
  theme: 'light',
  setTheme: (theme: 'light' | 'dark') => set({ theme }),
}));

export default useDarkModeStore;