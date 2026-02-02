import { describe, test, expect } from 'vitest';
import { BASE_2, BASE_10, BASE_16, TEN, TWO, SIXTEEN } from '@shared/constants/base';
import type { NumeralSystemRadix, NumeralSystemType } from '@shared/types/base';
import { getDisplayValue, getMathBreakdown } from './baseView.utils';

const RETURNS_EMPTY = 'returns empty string';
const inputReturns = (input: string, expected: string) => `input = ${input}, returns ${expected}`;

type MathBreakdownCase = {
  value: string;
  radix: NumeralSystemRadix;
  expected: string;
};

const MATH_BREAKDOWN_CASES: MathBreakdownCase[] = [
  { value: '', radix: TEN, expected: '' },
  { value: '5', radix: TEN, expected: '(5 x 1)' },
  { value: '112', radix: TEN, expected: '(1 x 100) + (1 x 10) + (2 x 1)' },
  { value: '101', radix: TWO, expected: '(1 x 4) + (0 x 2) + (1 x 1)' },
  { value: 'FF', radix: SIXTEEN, expected: '(15 x 16) + (15 x 1)' },
  { value: 'A3', radix: SIXTEEN, expected: '(10 x 16) + (3 x 1)' }
];

type DisplayValueCase = {
  sourceSystem: NumeralSystemType | undefined;
  sourceValue: string | undefined;
  type: NumeralSystemType;
  radix: NumeralSystemRadix;
  expected: string;
};

const DISPLAY_VALUE_EMPTY_CASES: DisplayValueCase[] = [
  { sourceSystem: BASE_10, sourceValue: undefined, type: BASE_10, radix: TEN, expected: '' },
  { sourceSystem: BASE_10, sourceValue: '', type: BASE_10, radix: TEN, expected: '' },
  { sourceSystem: undefined, sourceValue: '123', type: BASE_10, radix: TEN, expected: '' }
];

const DISPLAY_VALUE_SAME_SYSTEM_CASES: DisplayValueCase[] = [
  { sourceSystem: BASE_10, sourceValue: '123', type: BASE_10, radix: TEN, expected: '123' },
  { sourceSystem: BASE_2, sourceValue: '101', type: BASE_2, radix: TWO, expected: '101' },
  { sourceSystem: BASE_16, sourceValue: 'FF', type: BASE_16, radix: SIXTEEN, expected: 'FF' }
];

const DISPLAY_VALUE_CONVERSION_CASES: DisplayValueCase[] = [
  { sourceSystem: BASE_10, sourceValue: '5', type: BASE_2, radix: TWO, expected: '101' },
  { sourceSystem: BASE_10, sourceValue: '255', type: BASE_16, radix: SIXTEEN, expected: 'FF' },
  { sourceSystem: BASE_2, sourceValue: '101', type: BASE_10, radix: TEN, expected: '5' },
  { sourceSystem: BASE_16, sourceValue: 'FF', type: BASE_10, radix: TEN, expected: '255' }
];

describe('getMathBreakdown', () => {
  test.each(MATH_BREAKDOWN_CASES)(
    'value = $value, radix = $radix, returns $expected',
    ({ value, radix, expected }) => {
      const result = getMathBreakdown(value, radix);

      expect(result).toBe(expected);
    }
  );
});

describe('getDisplayValue', () => {
  describe('when sourceValue is empty or undefined', () => {
    test.each(DISPLAY_VALUE_EMPTY_CASES)(
      RETURNS_EMPTY,
      ({ sourceSystem, sourceValue, type, radix, expected }) => {
        const result = getDisplayValue(sourceSystem, sourceValue, type, radix);

        expect(result).toBe(expected);
      }
    );
  });

  describe('when sourceSystem matches type', () => {
    test.each(DISPLAY_VALUE_SAME_SYSTEM_CASES)(
      inputReturns('$sourceValue', '$expected'),
      ({ sourceSystem, sourceValue, type, radix, expected }) => {
        const result = getDisplayValue(sourceSystem, sourceValue, type, radix);

        expect(result).toBe(expected);
      }
    );
  });

  describe('when sourceSystem differs from type', () => {
    test.each(DISPLAY_VALUE_CONVERSION_CASES)(
      '$sourceSystem $sourceValue → $type $expected',
      ({ sourceSystem, sourceValue, type, radix, expected }) => {
        const result = getDisplayValue(sourceSystem, sourceValue, type, radix);

        expect(result).toBe(expected);
      }
    );
  });
});
