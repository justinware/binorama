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

  const maxPlaceValueWidth = Math.pow(radix, digits.length - 1).toString().length;

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
    const paddedPlaceValue = placeValue.padStart(maxPlaceValueWidth);

    return { flat: paddedPlaceValue, jsx: <>{paddedPlaceValue}</> };
  };

  // Compute sub-sums for each digit
  const subSums = digits.map((digit, index) => {
    const digitValue = parseInt(digit, radix);
    const exponent = digits.length - 1 - index;

    return digitValue * Math.pow(radix, exponent);
  });
  const subSumWidth = Math.max(...subSums.map(s => s.toString().length));

  // Build JSX terms
  const terms: ReactNode[] = digits.map((digit, index) => {
    const digitValue = parseInt(digit, radix);
    const paddedDigit = digitValue.toString().padEnd(digitWidth);
    const paddedSubSum = subSums[index].toString().padStart(subSumWidth);
    const isLast = index === digits.length - 1;

    return (
      <>
        <span className={termOpen}>(</span>
        <strong>{paddedDigit}</strong>
        {' x '}
        {getOperand(index).jsx}
        <span className={termClose}>)</span>
        {` = ${paddedSubSum}`}
        {isLast ? '' : ' +'}
      </>
    );
  });

  return {
    terms,
    digitWidth,
    divider: '',
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
