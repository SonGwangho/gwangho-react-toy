import { create } from "zustand";

interface DarkModeStore {
  isDark: boolean;
  toggleDarkmode: () => void;
  setDarkmode: (isLight: boolean) => void;
}

export const useDarkModeStore = create<DarkModeStore>((set) => ({
  isDark: localStorage.getItem("darkMode") === "dark",
  toggleDarkmode: () => {
    set((state) => {
      const s = !state.isDark;
      localStorage.setItem("darkMode", s ? "dark" : "light");
      return { isDark: s };
    });
  },
  setDarkmode: (isLight) => {
    localStorage.setItem("darkMode", isLight ? "light" : "dark");
    set({ isDark: !isLight });
  },
}));
