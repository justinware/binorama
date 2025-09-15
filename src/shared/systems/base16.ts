import {
  A,
  B,
  BASE_16,
  C,
  D,
  E,
  EIGHT,
  F,
  FIVE,
  FOUR,
  HEXADECIMAL,
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
import type { HexadecimalSymbol, NumeralSystem, NumeralSystemRadix } from '@shared/types/base';
import { getMatchSymbols, isValid } from '@shared/utils/validation';

const symbols: HexadecimalSymbol[] = [
    ZERO,
    ONE,
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
    A,
    B,
    C,
    D,
    E,
    F,
  ];
const matchSymbols = getMatchSymbols(symbols);

const convertTo = (value: string, targetRadix: NumeralSystemRadix): string => {
  // Assumes a valid hexadecimal number string, which has already been validated using isValid()
  const decimalValue = parseInt(value, SIXTEEN);

  // To Binary
  if (targetRadix === TWO) {
    return decimalValue.toString(TWO);
  }

  // To Decimal
  if (targetRadix === TEN) {
    return decimalValue.toString(TEN);
  }

  return '';
};

const base16: NumeralSystem = {
  type: BASE_16,
  radix: SIXTEEN,
  label: HEXADECIMAL,
  symbols,
  isValid: input => isValid(matchSymbols, input),
  convertTo
};

export default base16;
