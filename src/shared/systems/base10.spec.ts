import { describe, expect, test } from 'vitest';
import base10 from './base10';
import { SIXTEEN, TWO } from '../constants/base';
import {
  DECIMAL_VALID_TEST_CASES,
  CONVERSION_TEST_CASES,
  INPUT_EQUALS_TEXT,
  TEST_DESCRIPTIONS,
} from './__tests__/constants';

describe('The base10', () => {
  describe(TEST_DESCRIPTIONS.isValid.main, () => {
    describe(TEST_DESCRIPTIONS.isValid.when, () => {
      test.each(DECIMAL_VALID_TEST_CASES)(
        INPUT_EQUALS_TEXT,
        (input, expected) => {
          const { isValid } = base10;

          expect(isValid(input)).toBe(expected);
        }
      );
    });
  });

  describe(TEST_DESCRIPTIONS.convertTo.main, () => {
    describe(TEST_DESCRIPTIONS.convertTo.toBinary, () => {
      test.each(CONVERSION_TEST_CASES)(
        'input = $dec, returns $bin',
        ({ dec, bin }) => {
          const { convertTo } = base10;

          expect(convertTo(dec, TWO)).toBe(bin);
        }
      );
    });

    describe(TEST_DESCRIPTIONS.convertTo.toHexadecimal, () => {
      test.each(CONVERSION_TEST_CASES)(
        'input = $dec, returns $hex',
        ({ dec, hex }) => {
          const { convertTo } = base10;

          expect(convertTo(dec, SIXTEEN)).toBe(hex);
        }
      );
    });
  });
});
