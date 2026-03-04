import { create } from 'zustand';

export const LIGHT = 'light';
export const DARK = 'dark';

export const GRAY = 'gray';
export const GOLD = 'gold';
export const BRONZE = 'bronze';
export const BROWN = 'brown';
export const YELLOW = 'yellow';
export const AMBER = 'amber';
export const ORANGE = 'orange';
export const TOMATO = 'tomato';
export const RED = 'red';
export const RUBY = 'ruby';
export const CRIMSON = 'crimson';
export const PINK = 'pink';
export const PLUM = 'plum';
export const PURPLE = 'purple';
export const VIOLET = 'violet';
export const IRIS = 'iris';
export const INDIGO = 'indigo';
export const BLUE = 'blue';
export const CYAN = 'cyan';
export const TEAL = 'teal';
export const JADE = 'jade';
export const GREEN = 'green';
export const GRASS = 'grass';
export const LIME = 'lime';
export const MINT = 'mint';
export const SKY = 'sky';

type Theme = typeof LIGHT | typeof DARK;

export type Accent =
  | typeof GRAY
  | typeof GOLD
  | typeof BRONZE
  | typeof BROWN
  | typeof YELLOW
  | typeof AMBER
  | typeof ORANGE
  | typeof TOMATO
  | typeof RED
  | typeof RUBY
  | typeof CRIMSON
  | typeof PINK
  | typeof PLUM
  | typeof PURPLE
  | typeof VIOLET
  | typeof IRIS
  | typeof INDIGO
  | typeof BLUE
  | typeof CYAN
  | typeof TEAL
  | typeof JADE
  | typeof GREEN
  | typeof GRASS
  | typeof LIME
  | typeof MINT
  | typeof SKY;

interface ThemeState {
  theme: Theme;
  accent: Accent;
  exponentNotation: boolean;
  setTheme: (theme: Theme) => void;
  setAccent: (accent: Accent) => void;
  toggleTheme: () => void;
  toggleExponentNotation: () => void;
}

export const useThemeStore = create<ThemeState>(set => ({
  theme: DARK,
  accent: TEAL,
  exponentNotation: true,
  setTheme: theme => set({ theme }),
  setAccent: accent => set({ accent }),
  toggleTheme: () => set(state => ({ theme: state.theme === LIGHT ? DARK : LIGHT })),
  toggleExponentNotation: () => set(state => ({ exponentNotation: !state.exponentNotation }))
}));
