import { Moon, Sun } from 'lucide-react';
import * as Switch from '@radix-ui/react-switch';
import * as Toolbar from '@radix-ui/react-toolbar';
import { LIGHT, useThemeStore } from '../store/theme';
import styles from './navigation.module.css';

const { navigationRoot, switchGroup, switchRoot, switchThumb, toolbar, toolbarSeparator, toolbarButton } = styles;

const THEME_ICON_SIZE = 18;

export const Navigation = () => {
  const theme = useThemeStore(state => state.theme);
  const exponentNotation = useThemeStore(state => state.exponentNotation);
  const toggleExponentNotation = useThemeStore(state => state.toggleExponentNotation);
  const toggleTheme = useThemeStore(state => state.toggleTheme);

  return (
    <header id="navigation" className={navigationRoot}>
      <h1>Binorama</h1>
      <Toolbar.Root className={toolbar}>
        <div className={switchGroup}>
          <span>100</span>
          <Switch.Root
            className={switchRoot}
            checked={exponentNotation}
            onCheckedChange={toggleExponentNotation}
          >
            <Switch.Thumb className={switchThumb} />
          </Switch.Root>
          <span>10<sup>2</sup></span>
        </div>
        <Toolbar.Separator className={toolbarSeparator} />
        <Toolbar.Button className={toolbarButton} onClick={toggleTheme}>
          {theme === LIGHT ? <Moon size={THEME_ICON_SIZE} /> : <Sun size={THEME_ICON_SIZE} />}
        </Toolbar.Button>
      </Toolbar.Root>
    </header>
  );
};
