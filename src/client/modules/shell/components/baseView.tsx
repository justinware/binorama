import type { NumeralSystem } from '@shared/types/base';
import style from './baseView.module.css';
import type { CSSProperties } from 'react';

const { baseViewRoot, content } = style;

type BaseViewPros = NumeralSystem & { position: 1 | 2 | 3 };

const positionMap = new Map<number, CSSProperties>([
  [1, { left: 0 }],
  [2, { left: '50%', transform: 'translateX(-50%)' }],
  [3, { right: 0 }],
]);

export const BaseView = ({ position, type, label }: BaseViewPros) => {
  const id = `${type}-view`;

  return (
    <div id={id} className={baseViewRoot} style={positionMap.get(position)}>
      <div className={content}>{label}</div>
    </div>
  );
};
