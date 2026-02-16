import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import type { NumeralSystem } from '@shared/types/base';
import { useLayoutStore } from '../store/layout';
import { useThemeStore } from '../store/theme';
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
  mathTerms,
  mathTotal
} = style;

type BaseViewProps = NumeralSystem & { position: number };

export const BaseView = ({ type, label, radix, isValid, position }: BaseViewProps) => {
  const id = `${type}-view`;
  const inputRef = useRef<HTMLInputElement>(null);
  const { sourceSystem, sourceValue, updateSourceSystem, updateSourceValue } = useValueStore();
  const exponentNotation = useThemeStore(state => state.exponentNotation);
  const updateSystemOrder = useLayoutStore(state => state.updateSystemOrder);

  useEffect(() => {
    if (position === 0) {
      inputRef.current?.focus();
    }
  }, [position, updateSystemOrder]);

  const displayValue = getDisplayValue(sourceSystem, sourceValue, type, radix);
  const { terms: mathBreakdown, total } = getMathBreakdown(displayValue, radix, exponentNotation);

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
            ref={inputRef}
            type="text"
            placeholder={`${(42).toString(radix).toUpperCase()}...`}
            value={displayValue}
            onChange={e => handleChange(e.target.value)}
          />
        </div>
        <div className={sectionRow}>
          <div className={`${section} ${sectionMath}`}>
            <div className={mathTerms}>
              {mathBreakdown.map((term, index) => (
                <div key={index}>{term}</div>
              ))}
              {displayValue && (
                <div
                  className={mathTotal}
                  style={{ paddingRight: mathBreakdown.length > 1 ? '2ch' : undefined }}
                >
                  {total}
                </div>
              )}
            </div>
          </div>
          <div className={`${section} ${sectionVisual}`}>Visual breakdown</div>
        </div>
      </div>
    </motion.div>
  );
};
