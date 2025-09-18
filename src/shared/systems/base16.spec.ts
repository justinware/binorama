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
        'input = $hexadecimal, returns $binary',
        ({ hexadecimal, binary }) => {
          const { convertTo } = base16;

          expect(convertTo(hexadecimal, TWO)).toBe(binary);
        }
      );
    });

    describe(TEST_DESCRIPTIONS.convertTo.toDecimal, () => {
      test.each([...CONVERSION_TEST_CASES, ...HEX_EXTENDED_TEST_CASES])(
        'input = $hexadecimal, returns $decimal',
        ({ hexadecimal, decimal }) => {
          const { convertTo } = base16;

          expect(convertTo(hexadecimal, TEN)).toBe(decimal);
        }
      );
    });
  });
});
