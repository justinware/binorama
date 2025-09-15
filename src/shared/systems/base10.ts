import {
  BASE_10,
  DECIMAL,
  EIGHT,
  FIVE,
  FOUR,
  NINE,
  ONE,
  SEVEN,
  SIX,
  SIXTEEN,
  TEN,
  THREE,
  TWO,
  ZERO,
} from '@shared/constants/base';
import type { DecimalSymbol, NumeralSystem, NumeralSystemRadix } from '@shared/types/base';
import { getMatchSymbols, isValid } from '@shared/utils/validation';

const symbols: DecimalSymbol[] = [ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE];
const matchSymbols = getMatchSymbols(symbols);

const convertTo = (value: string, targetRadix: NumeralSystemRadix): string => {
  // Assumes a valid decimal number string, which has already been validated using isValid()
  const decimalValue = parseInt(value);

  // To Binary
  if (targetRadix === TWO) {
    return decimalValue.toString(TWO);
  }

  // To Hexadecimal
  if (targetRadix === SIXTEEN) {
    return decimalValue.toString(SIXTEEN);
  }

  return '';
};

const base10: NumeralSystem = {
  type: BASE_10,
  radix: TEN,
  label: DECIMAL,
  symbols,
  isValid: input => isValid(matchSymbols, input),
  convertTo
};

export default base10;
