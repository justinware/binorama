import { create } from 'zustand';

export const LIGHT = 'light';
export const DARK = 'dark';

type Theme = typeof LIGHT | typeof DARK;

interface ThemeState {
  theme: Theme;
  exponentNotation: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  toggleExponentNotation: () => void;
}

export const useThemeStore = create<ThemeState>(set => ({
  theme: LIGHT,
  exponentNotation: true,
  setTheme: theme => set({ theme }),
  toggleTheme: () => set(state => ({ theme: state.theme === LIGHT ? DARK : LIGHT })),
  toggleExponentNotation: () => set(state => ({ exponentNotation: !state.exponentNotation }))
}));
