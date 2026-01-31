import type { NumeralSystem } from '@shared/types/base';
import style from './baseView.module.css';

const { baseViewRoot, content } = style;

type BaseViewProps = NumeralSystem;

export const BaseView = ({ type, label }: BaseViewProps) => {
  const id = `${type}-view`;

  return (
    <div id={id} className={baseViewRoot}>
      <div className={content}>{label}</div>
    </div>
  );
};
