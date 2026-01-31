import { motion } from 'motion/react';
import type { NumeralSystem } from '@shared/types/base';
import style from './baseView.module.css';

const { baseViewRoot, content } = style;

type BaseViewProps = NumeralSystem;

export const BaseView = ({ type, label }: BaseViewProps) => {
  const id = `${type}-view`;

  return (
    <motion.div
      id={id}
      className={baseViewRoot}
      layout
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className={content}>{label}</div>
    </motion.div>
  );
};
