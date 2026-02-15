import { describe, test, expect, beforeEach } from 'vitest';
import { DARK, LIGHT, useThemeStore } from './theme';

const initialTheme = (theme: string) => `initial theme is ${theme}`;
const setsThemeTo = (theme: string) => `sets theme to ${theme}`;
const togglesFrom = (from: string, to: string) => `toggles from ${from} to ${to}`;

describe('useThemeStore', () => {
  beforeEach(() => {
    useThemeStore.setState({ theme: LIGHT, exponentNotation: false });
  });

  test(initialTheme(LIGHT), () => {
    expect(useThemeStore.getState().theme).toBe(LIGHT);
  });

  describe('setTheme', () => {
    test(setsThemeTo(DARK), () => {
      useThemeStore.getState().setTheme(DARK);

      expect(useThemeStore.getState().theme).toBe(DARK);
    });

    test(setsThemeTo(LIGHT), () => {
      useThemeStore.setState({ theme: DARK });
      useThemeStore.getState().setTheme(LIGHT);

      expect(useThemeStore.getState().theme).toBe(LIGHT);
    });
  });

  describe('toggleTheme', () => {
    test(togglesFrom(LIGHT, DARK), () => {
      useThemeStore.getState().toggleTheme();

      expect(useThemeStore.getState().theme).toBe(DARK);
    });

    test(togglesFrom(DARK, LIGHT), () => {
      useThemeStore.setState({ theme: DARK });
      useThemeStore.getState().toggleTheme();

      expect(useThemeStore.getState().theme).toBe(LIGHT);
    });
  });

  test('initial exponentNotation is false', () => {
    expect(useThemeStore.getState().exponentNotation).toBe(false);
  });

  describe('toggleExponentNotation', () => {
    test('toggles from false to true', () => {
      useThemeStore.getState().toggleExponentNotation();

      expect(useThemeStore.getState().exponentNotation).toBe(true);
    });

    test('toggles from true to false', () => {
      useThemeStore.setState({ exponentNotation: true });
      useThemeStore.getState().toggleExponentNotation();

      expect(useThemeStore.getState().exponentNotation).toBe(false);
    });
  });
});
