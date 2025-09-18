import { BASE_2, BINARY, ONE, TWO, ZERO } from '../constants/base';
import type { BinarySymbol, NumeralSystem } from '../types/base';
import { convert, getMatchSymbols, isValid } from './utils';

const symbols: BinarySymbol[] = [ZERO, ONE];

const base2: NumeralSystem = {
  type: BASE_2,
  radix: TWO,
  label: BINARY,
  symbols,
  isValid: (value) => isValid(getMatchSymbols(symbols), value),
  convertTo: (value, targetRadix) => convert(value, TWO, targetRadix),
};

export default base2;
