import { useState } from 'react';
import { Palette } from 'lucide-react';
import { IconButton, Popover } from '@radix-ui/themes';
import {
  type Accent,
  AMBER,
  BLUE,
  BRONZE,
  BROWN,
  CRIMSON,
  CYAN,
  GOLD,
  GRASS,
  GRAY,
  GREEN,
  INDIGO,
  IRIS,
  JADE,
  LIME,
  MINT,
  ORANGE,
  PINK,
  PLUM,
  PURPLE,
  RED,
  RUBY,
  SKY,
  TEAL,
  TOMATO,
  VIOLET,
  YELLOW,
  useThemeStore,
} from '../store/theme';
import styles from './accentPicker.module.css';

const { picker, grid, swatch, swatchActive, swatchBox, swatchLabel } = styles;

const ICON_SIZE = 18;

const ALL_ACCENTS: Accent[] = [
  GRAY, GOLD, BRONZE, BROWN, YELLOW, AMBER,
  ORANGE, TOMATO, RED, RUBY, CRIMSON, PINK,
  PLUM, PURPLE, VIOLET, IRIS, INDIGO, BLUE,
  CYAN, TEAL, JADE, GREEN, GRASS, LIME, MINT, SKY,
];

export const AccentPicker = () => {
  const [open, setOpen] = useState(false);
  const accent = useThemeStore(state => state.accent);
  const setAccent = useThemeStore(state => state.setAccent);

  const handleSelect = (color: Accent) => {
    setAccent(color);
    setOpen(false);
  };

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger>
        <IconButton variant="ghost">
          <Palette size={ICON_SIZE} />
        </IconButton>
      </Popover.Trigger>
      <Popover.Content className={picker} side="bottom" align="end" sideOffset={8}>
        <div className={grid}>
          {ALL_ACCENTS.map(color => (
            <button
              key={color}
              className={`${swatch}${color === accent ? ` ${swatchActive}` : ''}`}
              onClick={() => handleSelect(color)}
              aria-label={color}
            >
              <span className={swatchBox} style={{ backgroundColor: `var(--${color}-9)` }} />
              <span className={swatchLabel}>{color}</span>
            </button>
          ))}
        </div>
      </Popover.Content>
    </Popover.Root>
  );
};
