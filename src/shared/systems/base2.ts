import { BASE_2, BINARY, ONE, SIXTEEN, TEN, TWO, ZERO } from '@shared/constants/base';
import type { BinarySymbol, NumeralSystem, NumeralSystemRadix } from '@shared/types/base';
import { getMatchSymbols, isValid } from '@shared/utils/validation';

const symbols: BinarySymbol[] = [ZERO, ONE];
const matchSymbols = getMatchSymbols(symbols);

const convertTo = (value: string, targetRadix: NumeralSystemRadix): string => {
  // Assumes a valid binary number string, which has already been validated using isValid()
  const decimalValue = parseInt(value, TWO);

  // To Decimal
  if (targetRadix === TEN) {
    return decimalValue.toString(TEN);
  }

  // To Hexadecimal
  if (targetRadix === SIXTEEN) {
    return decimalValue.toString(SIXTEEN);
  }

  return '';
};

const base2: NumeralSystem = {
  type: BASE_2,
  radix: TWO,
  label: BINARY,
  symbols,
  isValid: input => isValid(matchSymbols, input),
  convertTo,
};

export default base2;
