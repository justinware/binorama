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
  TEN,
  THREE,
  TWO,
  ZERO,
} from '../constants/base';
import type { DecimalSymbol, NumeralSystem } from '../types/base';
import { convert, getMatchSymbols, isValid } from './utils';

const symbols: DecimalSymbol[] = [
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
];

const base10: NumeralSystem = {
  type: BASE_10,
  radix: TEN,
  label: DECIMAL,
  symbols,
  isValid: (value) => isValid(getMatchSymbols(symbols), value),
  convertTo: (value, targetRadix) => convert(value, TEN, targetRadix),
};

export default base10;
