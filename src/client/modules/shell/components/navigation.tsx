import * as Switch from '@radix-ui/react-switch';
import { useThemeStore } from '../store/theme';
import styles from './navigation.module.css';

const { navigationRoot, switchGroup, switchRoot, switchThumb } = styles;

export const Navigation = () => {
  const exponentNotation = useThemeStore(state => state.exponentNotation);
  const toggleExponentNotation = useThemeStore(state => state.toggleExponentNotation);

  return (
    <header id="navigation" className={navigationRoot}>
      <h1>Binorama</h1>
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
    </header>
  );
};
