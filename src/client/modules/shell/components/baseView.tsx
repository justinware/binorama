import { motion } from 'motion/react';
import type { NumeralSystem } from '@shared/types/base';
import { useValueStore } from '../store/value';
import { getDisplayValue, getMathBreakdown } from './baseView.utils';
import style from './baseView.module.css';

const {
  baseViewRoot,
  content,
  section,
  sectionTitle,
  sectionInput,
  sectionRow,
  sectionMath,
  sectionVisual,
} = style;

type BaseViewProps = NumeralSystem;

export const BaseView = ({ type, label, radix, isValid }: BaseViewProps) => {
  const id = `${type}-view`;
  const { sourceSystem, sourceValue, updateSourceSystem, updateSourceValue } = useValueStore();

  const displayValue = getDisplayValue(sourceSystem, sourceValue, type, radix);
  const mathBreakdown = getMathBreakdown(displayValue, radix);

  const handleChange = (input: string) => {
    if (input === '' || isValid(input)) {
      updateSourceSystem(type);
      updateSourceValue(input.toUpperCase());
    }
  };

  return (
    <motion.div
      id={id}
      className={baseViewRoot}
      layout
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className={content}>
        <h2 className={`${section} ${sectionTitle}`}>{label}</h2>
        <div className={`${section} ${sectionInput}`}>
          <input
            type="text"
            placeholder={`${(42).toString(radix).toUpperCase()}...`}
            value={displayValue}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        <div className={sectionRow}>
          <div className={`${section} ${sectionMath}`}>
            {mathBreakdown.map((term, index) => (
              <div key={index}>{term}</div>
            ))}
          </div>
          <div className={`${section} ${sectionVisual}`}>Visual breakdown</div>
        </div>
      </div>
    </motion.div>
  );
};
