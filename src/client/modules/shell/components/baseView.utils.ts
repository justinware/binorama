import type { NumeralSystemRadix, NumeralSystemType } from '@shared/types/base';
import systems from '@shared/systems';

export const getMathBreakdown = (value: string, radix: NumeralSystemRadix): string[] => {
  if (!value) {
    return [];
  }

  const digits = value.split('');
  const baseTerms = digits.map((digit, index) => {
    const digitValue = parseInt(digit, radix);
    const placeValue = Math.pow(radix, digits.length - 1 - index);

    return `(${digitValue} x ${placeValue})`;
  });

  const maxLength = Math.max(...baseTerms.map((t) => t.length));

  return baseTerms.map((term, index) => {
    const isLast = index === baseTerms.length - 1;

    return `${term.padEnd(maxLength)}${isLast ? '' : ' +'}`;
  });
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
