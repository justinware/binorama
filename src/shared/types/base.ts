import {
  A,
  B,
  BASE_10,
  BASE_16,
  BASE_2,
  BINARY,
  C,
  D,
  DECIMAL,
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
import type { Prettify } from './core';

export type NumeralSystemType = typeof BASE_2 | typeof BASE_10 | typeof BASE_16;

export type NumeralSystemRadix = typeof TWO | typeof TEN | typeof SIXTEEN;

export type NumeralSystemLabel =
  | typeof BINARY
  | typeof DECIMAL
  | typeof HEXADECIMAL;

export type BinarySymbol = typeof ZERO | typeof ONE;

export type DecimalSymbol = Prettify<
  | BinarySymbol
  | typeof TWO
  | typeof THREE
  | typeof FOUR
  | typeof FIVE
  | typeof SIX
  | typeof SEVEN
  | typeof EIGHT
  | typeof NINE
>;

export type HexadecimalSymbol = Prettify<
  | DecimalSymbol
  | typeof A
  | typeof B
  | typeof C
  | typeof D
  | typeof E
  | typeof F
>;

export type NumeralSystemSymbol =
  | BinarySymbol
  | DecimalSymbol
  | HexadecimalSymbol;

export interface NumeralSystem {
  type: NumeralSystemType;
  radix: NumeralSystemRadix;
  label: NumeralSystemLabel;
  symbols: NumeralSystemSymbol[];

  isValid: (value: string) => boolean;
  convertTo: (value: string, targetRadix: NumeralSystemRadix) => string;
}
