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
  THREE,
  TWO,
  ZERO,
} from '../constants/base';
import type { HexadecimalSymbol, NumeralSystem } from '../types/base';
import { convert, getMatchSymbols, isValid } from './utils';

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

const base16: NumeralSystem = {
  type: BASE_16,
  radix: SIXTEEN,
  label: HEXADECIMAL,
  symbols,
  isValid: (value) => isValid(getMatchSymbols(symbols), value),
  convertTo: (value, targetRadix) => convert(value, SIXTEEN, targetRadix),
};

export default base16;
