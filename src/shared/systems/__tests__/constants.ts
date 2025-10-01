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
  bin: string;
  dec: string;
  hex: string;
};

export const CONVERSION_TEST_CASES: ConversionTestCase[] = [
  { bin: '0', dec: '0', hex: '0' },
  { bin: '1', dec: '1', hex: '1' },
  { bin: '10', dec: '2', hex: '2' },
  { bin: '11', dec: '3', hex: '3' },
  { bin: '101', dec: '5', hex: '5' },
  { bin: '1001', dec: '9', hex: '9' },
  { bin: '1010', dec: '10', hex: 'A' },
  { bin: '1111', dec: '15', hex: 'F' },
  { bin: '1011010', dec: '90', hex: '5A' },
  { bin: '10101010', dec: '170', hex: 'AA' },
  { bin: '11111111', dec: '255', hex: 'FF' },
  { bin: '10000000000', dec: '1024', hex: '400' },
];

// Special test cases specific to hexadecimal for larger numbers
export const HEX_EXTENDED_TEST_CASES: ConversionTestCase[] = [
  {
    bin: '1101111010101101',
    dec: '57005',
    hex: 'DEAD',
  },
  {
    bin: '1011111011101111',
    dec: '48879',
    hex: 'BEEF',
  },
];

const COMMON_INVALID_TEST_CASES: [string, boolean][] = [
  ['0', true],
  ['1', true],
  ['01', true],
  ['10', true],
  ['11', true],
  ['100', true],
  ['101', true],
  ['111', true],
  ['1010', true],
  ['1111', true],
];

export const BINARY_VALID_TEST_CASES: [string, boolean][] = [
  ...COMMON_INVALID_TEST_CASES,
  ['2', false],
  ['22', false],
  ['4114', false],
  ['00000000', true],
  ['11111111', true],
  ['FF01', false],
  ['99', false],
  ['Hello', false],
];

export const DECIMAL_VALID_TEST_CASES: [string, boolean][] = [
  ...COMMON_INVALID_TEST_CASES,
  ['9', true],
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
];

export const HEXADECIMAL_VALID_TEST_CASES: [string, boolean][] = [
  ...COMMON_INVALID_TEST_CASES,
  ['9', true],
  ['A', true],
  ['F', true],
  ['a', true],
  ['f', true],
  ['G', false],
  ['Z', false],
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
];
