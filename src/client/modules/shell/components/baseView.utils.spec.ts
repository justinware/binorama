import { describe, test, expect } from 'vitest';
import { BASE_2, BASE_10, BASE_16, TEN, TWO, SIXTEEN } from '@shared/constants/base';
import type { NumeralSystemRadix, NumeralSystemType } from '@shared/types/base';
import { getDisplayValue, getMathBreakdown } from './baseView.utils';

const RETURNS_EMPTY = 'returns empty string';
const inputReturns = (input: string, expected: string) => `input = ${input}, returns ${expected}`;

type MathBreakdownCase = {
  value: string;
  radix: NumeralSystemRadix;
  expectedTermCount: number;
  expectedDigitWidth: number;
  expectedDividerLength: number;
  expectedTotal: number;
};

const MATH_BREAKDOWN_CASES: MathBreakdownCase[] = [
  { value: '', radix: TEN, expectedTermCount: 0, expectedDigitWidth: 0, expectedDividerLength: 0, expectedTotal: 0 },
  { value: '5', radix: TEN, expectedTermCount: 1, expectedDigitWidth: 1, expectedDividerLength: 9, expectedTotal: 5 },
  { value: '112', radix: TEN, expectedTermCount: 3, expectedDigitWidth: 1, expectedDividerLength: 13, expectedTotal: 112 },
  { value: '101', radix: TWO, expectedTermCount: 3, expectedDigitWidth: 1, expectedDividerLength: 11, expectedTotal: 5 },
  { value: 'FF', radix: SIXTEEN, expectedTermCount: 2, expectedDigitWidth: 2, expectedDividerLength: 13, expectedTotal: 255 },
  { value: 'A3', radix: SIXTEEN, expectedTermCount: 2, expectedDigitWidth: 2, expectedDividerLength: 13, expectedTotal: 163 }
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
    'value = $value, radix = $radix',
    ({ value, radix, expectedTermCount, expectedDigitWidth, expectedDividerLength, expectedTotal }) => {
      const { terms, digitWidth, divider, total } = getMathBreakdown(value, radix, false);

      expect(terms).toHaveLength(expectedTermCount);
      expect(digitWidth).toBe(expectedDigitWidth);
      expect(divider).toBe('-'.repeat(expectedDividerLength));
      expect(total).toBe(expectedTotal);
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
