import { describe, expect, test } from 'vitest';
import base2 from './base2';
import { SIXTEEN, TEN } from '../constants/base';
import {
  BINARY_VALID_TEST_CASES,
  CONVERSION_TEST_CASES,
  INPUT_EQUALS_TEXT,
  TEST_DESCRIPTIONS,
} from './__tests__/constants';

describe('The base2', () => {
  describe(TEST_DESCRIPTIONS.isValid.main, () => {
    describe(TEST_DESCRIPTIONS.isValid.when, () => {
      test.each(BINARY_VALID_TEST_CASES)(
        INPUT_EQUALS_TEXT,
        (input, expected) => {
          const { isValid } = base2;

          expect(isValid(input)).toBe(expected);
        }
      );
    });
  });

  describe(TEST_DESCRIPTIONS.convertTo.main, () => {
    describe(TEST_DESCRIPTIONS.convertTo.toDecimal, () => {
      test.each(CONVERSION_TEST_CASES)(
        'input = $binary, returns $decimal',
        ({ binary, decimal }) => {
          const { convertTo } = base2;

          expect(convertTo(binary, TEN)).toBe(decimal);
        }
      );
    });

    describe(TEST_DESCRIPTIONS.convertTo.toHexadecimal, () => {
      test.each(CONVERSION_TEST_CASES)(
        'input = $binary, returns $hexadecimal',
        ({ binary, hexadecimal }) => {
          const { convertTo } = base2;

          expect(convertTo(binary, SIXTEEN)).toBe(hexadecimal);
        }
      );
    });
  });
});
