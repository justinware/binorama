import type { NumeralSystem } from '@shared/types/base';
import style from './baseView.module.css';

const { baseViewRoot } = style;

export const BaseView = ({ type, label }: NumeralSystem) => {
  const id = `${type}-view`;

  return (
    <div id={id} className={baseViewRoot}>
      {label}
    </div>
  );
};
