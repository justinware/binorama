import { describe, expect, test } from 'vitest';
import base16 from './base16';
import { TWO, TEN } from '../constants/base';
import {
  HEXADECIMAL_VALID_TEST_CASES,
  CONVERSION_TEST_CASES,
  HEX_EXTENDED_TEST_CASES,
  INPUT_EQUALS_TEXT,
  TEST_DESCRIPTIONS,
} from './__tests__/constants';

describe('The base16', () => {
  describe(TEST_DESCRIPTIONS.isValid.main, () => {
    describe(TEST_DESCRIPTIONS.isValid.when, () => {
      test.each(HEXADECIMAL_VALID_TEST_CASES)(
        INPUT_EQUALS_TEXT,
        (input, expected) => {
          const { isValid } = base16;

          expect(isValid(input)).toBe(expected);
        }
      );
    });
  });

  describe(TEST_DESCRIPTIONS.convertTo.main, () => {
    describe(TEST_DESCRIPTIONS.convertTo.toBinary, () => {
      test.each([...CONVERSION_TEST_CASES, ...HEX_EXTENDED_TEST_CASES])(
        'input = $hex, returns $bin',
        ({ hex, bin }) => {
          const { convertTo } = base16;

          expect(convertTo(hex, TWO)).toBe(bin);
        }
      );
    });

    describe(TEST_DESCRIPTIONS.convertTo.toDecimal, () => {
      test.each([...CONVERSION_TEST_CASES, ...HEX_EXTENDED_TEST_CASES])(
        'input = $hex, returns $dec',
        ({ hex: hex, dec: dec }) => {
          const { convertTo } = base16;

          expect(convertTo(hex, TEN)).toBe(dec);
        }
      );
    });
  });
});
