import { useState } from 'react';
import { motion } from 'motion/react';
import type { NumeralSystem } from '@shared/types/base';
import style from './baseView.module.css';

const {
  baseViewRoot,
  content,
  section,
  sectionTitle,
  sectionInput,
  sectionMath,
  sectionVisual,
  inputInvalid
} = style;

type BaseViewProps = NumeralSystem;

export const BaseView = ({ type, label, isValid }: BaseViewProps) => {
  const id = `${type}-view`;
  const [value, setValue] = useState('');
  const isInputValid = value === '' || isValid(value);

  return (
    <motion.div
      id={id}
      className={baseViewRoot}
      layout
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className={content}>
        <div className={`${section} ${sectionTitle}`}>{label}</div>
        <div className={`${section} ${sectionInput}`}>
          <input
            type="text"
            placeholder="Enter value..."
            value={value}
            onChange={e => setValue(e.target.value)}
            className={isInputValid ? '' : inputInvalid}
          />
        </div>
        <div className={`${section} ${sectionMath}`}>Mathematical breakdown</div>
        <div className={`${section} ${sectionVisual}`}>Visual breakdown</div>
      </div>
    </motion.div>
  );
};
