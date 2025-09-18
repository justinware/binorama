import type { NumeralSystemRadix, NumeralSystemSymbol } from '../types/base';

export const getMatchSymbols = (symbols: NumeralSystemSymbol[]) =>
  symbols.map((s) => String(s));

export const isValid = (matchSymbols: string[], value: string) => {
  const inputSymbols = value.toUpperCase().split('');

  return inputSymbols.every((s) => matchSymbols.includes(s));
};

export const convert = (
  value: string,
  inputRadix: NumeralSystemRadix,
  outputRadix: NumeralSystemRadix
) => parseInt(value, inputRadix).toString(outputRadix).toUpperCase();
