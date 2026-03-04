import { Moon, Sun } from 'lucide-react';
import { Heading, IconButton, Switch } from '@radix-ui/themes';
import { LIGHT, useThemeStore } from '../store/theme';
import { AccentPicker } from './accentPicker';
import styles from './navigation.module.css';

const { navigationRoot, controls, switchGroup, separator } = styles;

const THEME_ICON_SIZE = 18;

export const Navigation = () => {
  const theme = useThemeStore(state => state.theme);
  const exponentNotation = useThemeStore(state => state.exponentNotation);
  const toggleExponentNotation = useThemeStore(state => state.toggleExponentNotation);
  const toggleTheme = useThemeStore(state => state.toggleTheme);

  return (
    <header id="navigation" className={navigationRoot}>
      <Heading as="h1">Binorama</Heading>
      <div className={controls}>
        <div className={switchGroup}>
          <span>100</span>
          <Switch
            defaultChecked
            checked={exponentNotation}
            onCheckedChange={toggleExponentNotation}
          />
          <span>
            10<sup>2</sup>
          </span>
        </div>
        <span className={separator} />
        <AccentPicker />
        <IconButton variant="ghost" onClick={toggleTheme}>
          {theme === LIGHT ? <Moon size={THEME_ICON_SIZE} /> : <Sun size={THEME_ICON_SIZE} />}
        </IconButton>
      </div>
    </header>
  );
};
