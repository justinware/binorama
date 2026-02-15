import type { ReactNode } from 'react';
import type { NumeralSystemRadix, NumeralSystemType } from '@shared/types/base';
import systems from '@shared/systems';
import style from './baseView.module.css';

const { termOpen, termClose } = style;

export type MathBreakdown = {
  terms: ReactNode[];
  digitWidth: number;
  divider: string;
  total: number;
};

export const getMathBreakdown = (
  value: string,
  radix: NumeralSystemRadix,
  exponentNotation: boolean
): MathBreakdown => {
  if (!value) {
    return { terms: [], digitWidth: 0, divider: '', total: 0 };
  }
  const digits = value.split('');
  const digitValues = digits.map(d => parseInt(d, radix));
  const digitWidth = Math.max(...digitValues.map(v => v.toString().length));

  const getOperand = (index: number): { flat: string; jsx: ReactNode } => {
    const exponent = digits.length - 1 - index;

    if (exponentNotation) {
      return {
        flat: `${radix}${exponent}`,
        jsx: (
          <>
            {radix}
            <sup>{exponent}</sup>
          </>
        )
      };
    }

    const placeValue = Math.pow(radix, exponent).toString();

    return { flat: placeValue, jsx: <>{placeValue}</> };
  };

  // Compute flat term strings for divider width calculation
  const flatTerms = digits.map((digit, index) => {
    const digitValue = parseInt(digit, radix);
    const paddedDigit = digitValue.toString().padEnd(digitWidth);

    return `(${paddedDigit} x ${getOperand(index).flat})`;
  });

  const maxFlatLength = Math.max(...flatTerms.map(t => t.length));
  const dividerWidth = digits.length > 1 ? maxFlatLength + 2 : maxFlatLength;

  // Build JSX terms
  const terms: ReactNode[] = digits.map((digit, index) => {
    const digitValue = parseInt(digit, radix);
    const paddedDigit = digitValue.toString().padEnd(digitWidth);
    const isLast = index === digits.length - 1;

    return (
      <>
        <span className={termOpen}>(</span>
        <strong>{paddedDigit}</strong>
        {' x '}
        {getOperand(index).jsx}
        <span className={termClose}>
          {')'}
          {isLast ? '' : ' +'}
        </span>
      </>
    );
  });

  return {
    terms,
    digitWidth,
    divider: '-'.repeat(dividerWidth),
    total: parseInt(value, radix)
  };
};

export const getDisplayValue = (
  sourceSystem: NumeralSystemType | undefined,
  sourceValue: string | undefined,
  type: NumeralSystemType,
  radix: NumeralSystemRadix
): string => {
  if (!sourceValue) {
    return '';
  }

  if (sourceSystem === type) {
    return sourceValue;
  }

  const activeSystem = systems.find(s => s.type === sourceSystem);
  if (activeSystem) {
    return activeSystem.convertTo(sourceValue, radix);
  }

  return '';
};
