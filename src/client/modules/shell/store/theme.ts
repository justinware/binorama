import { create } from 'zustand';

export const LIGHT = 'light';
export const DARK = 'dark';

type Theme = typeof LIGHT | typeof DARK;

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>(set => ({
  theme: LIGHT,
  setTheme: theme => set({ theme }),
  toggleTheme: () => set(state => ({ theme: state.theme === LIGHT ? DARK : LIGHT }))
}));
