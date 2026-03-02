import { Moon, Sun } from 'lucide-react';
import * as Toolbar from '@radix-ui/react-toolbar';
import { Heading, Switch } from '@radix-ui/themes';
import { LIGHT, useThemeStore } from '../store/theme';
import styles from './navigation.module.css';

// const { navigationRoot, switchGroup, switchRoot, switchThumb, toolbar, toolbarSeparator, toolbarButton } = styles;
const { navigationRoot, switchGroup } = styles;

const THEME_ICON_SIZE = 18;

export const Navigation = () => {
  const theme = useThemeStore(state => state.theme);
  const exponentNotation = useThemeStore(state => state.exponentNotation);
  const toggleExponentNotation = useThemeStore(state => state.toggleExponentNotation);
  const toggleTheme = useThemeStore(state => state.toggleTheme);

  return (
    <header id="navigation" className={navigationRoot}>
      <Heading as="h1">Binorama</Heading>
      {/* <Toolbar.Root className={toolbar}> */}
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
      {/* <Toolbar.Separator className={toolbarSeparator} />
        <Toolbar.Button className={toolbarButton} onClick={toggleTheme}>
          {theme === LIGHT ? <Moon size={THEME_ICON_SIZE} /> : <Sun size={THEME_ICON_SIZE} />}
        </Toolbar.Button>
      </Toolbar.Root> */}
    </header>
  );
};
