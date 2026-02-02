import type { NumeralSystemRadix, NumeralSystemType } from '@shared/types/base';
import systems from '@shared/systems';

export const getMathBreakdown = (value: string, radix: NumeralSystemRadix): string => {
  if (!value) {
    return '';
  }

  const digits = value.split('');
  const terms = digits.map((digit, index) => {
    const digitValue = parseInt(digit, radix);
    const placeValue = Math.pow(radix, digits.length - 1 - index);

    return `(${digitValue} x ${placeValue})`;
  });

  return terms.join(' + ');
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
