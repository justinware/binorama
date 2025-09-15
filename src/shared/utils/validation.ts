import type { NumeralSystemSymbol } from '@shared/types/base';

export const getMatchSymbols = (symbols: NumeralSystemSymbol[]) => symbols.map(s => String(s));

export const isValid = (matchSymbols: string[], value: string) => {
  const inputSymbols = value.split('');

  return inputSymbols.every(s => matchSymbols.includes(s));
}
