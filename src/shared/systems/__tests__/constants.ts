// Test descriptions
export const INPUT_EQUALS_TEXT = 'input = %s, returns %s';
export const TEST_DESCRIPTIONS = {
  isValid: {
    main: 'isValid function',
    when: 'when',
  },
  convertTo: {
    main: 'convertTo function',
    toDecimal: 'when target radix = 10 (decimal) and',
    toBinary: 'when target radix = 2 (binary) and',
    toHexadecimal: 'when target radix = 16 (hexadecimal) and',
  },
} as const;

type ConversionTestCase = {
  binary: string;
  decimal: string;
  hexadecimal: string;
};

export const CONVERSION_TEST_CASES: ConversionTestCase[] = [
  { binary: '0', decimal: '0', hexadecimal: '0' },
  { binary: '1', decimal: '1', hexadecimal: '1' },
  { binary: '10', decimal: '2', hexadecimal: '2' },
  { binary: '11', decimal: '3', hexadecimal: '3' },
  { binary: '101', decimal: '5', hexadecimal: '5' },
  { binary: '1001', decimal: '9', hexadecimal: '9' },
  { binary: '1010', decimal: '10', hexadecimal: 'A' },
  { binary: '1111', decimal: '15', hexadecimal: 'F' },
  { binary: '1011010', decimal: '90', hexadecimal: '5A' },
  { binary: '10101010', decimal: '170', hexadecimal: 'AA' },
  { binary: '11111111', decimal: '255', hexadecimal: 'FF' },
  { binary: '10000000000', decimal: '1024', hexadecimal: '400' },
];

// Special test cases specific to hexadecimal for larger numbers
export const HEX_EXTENDED_TEST_CASES: ConversionTestCase[] = [
  {
    binary: '1101111010101101',
    decimal: '57005',
    hexadecimal: 'DEAD',
  },
  {
    binary: '1011111011101111',
    decimal: '48879',
    hexadecimal: 'BEEF',
  },
];

export const BINARY_VALID_TEST_CASES: [string, boolean][] = [
  ['0', true],
  ['1', true],
  ['2', false],
  ['01', true],
  ['11', true],
  ['22', false],
  ['4114', false],
  ['1010', true],
  ['1111', true],
  ['00000000', true],
  ['11111111', true],
  ['FF01', false],
  ['99', false],
  ['101', true],
  ['Hello', false],
];

export const DECIMAL_VALID_TEST_CASES: [string, boolean][] = [
  ['0', true],
  ['1', true],
  ['9', true],
  ['10', true],
  ['42', true],
  ['123', true],
  ['999', true],
  ['1A', false],
  ['FF', false],
  ['abc', false],
  ['12.34', false],
  ['-123', false],
  ['Hello', false],
  ['9999999', true],
  ['01', true],
];

export const HEXADECIMAL_VALID_TEST_CASES: [string, boolean][] = [
  ['0', true],
  ['9', true],
  ['A', true],
  ['F', true],
  ['a', true],
  ['f', true],
  ['G', false],
  ['Z', false],
  ['10', true],
  ['FF', true],
  ['ff', true],
  ['1A', true],
  ['ABC', true],
  ['DEF', true],
  ['GHI', false],
  ['12.34', false],
  ['-123', false],
  ['WXYZ', false],
  ['DEADBEEF', true],
  ['01', true],
];
