import { LetterPL } from './interfaces';

export const alphabet: LetterPL[] = [
  '?',
  'a',
  'ą',
  'b',
  'c',
  'ć',
  'd',
  'e',
  'ę',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'ł',
  'm',
  'n',
  'ń',
  'o',
  'ó',
  'p',
  'r',
  's',
  'ś',
  't',
  'u',
  'w',
  'y',
  'z',
  'ż',
  'ź',
];

export const tilesPoints: Record<LetterPL, number> = {
  ['?']: 0,
  ['a']: 1,
  ['ą']: 5,
  ['b']: 3,
  ['c']: 2,
  ['ć']: 6,
  ['d']: 2,
  ['e']: 1,
  ['ę']: 5,
  ['f']: 5,
  ['g']: 3,
  ['h']: 3,
  ['i']: 1,
  ['j']: 3,
  ['k']: 2,
  ['l']: 2,
  ['ł']: 3,
  ['m']: 2,
  ['n']: 1,
  ['ń']: 7,
  ['o']: 1,
  ['ó']: 5,
  ['p']: 2,
  ['r']: 1,
  ['s']: 1,
  ['ś']: 5,
  ['t']: 2,
  ['u']: 3,
  ['w']: 1,
  ['y']: 2,
  ['z']: 1,
  ['ż']: 5,
  ['ź']: 9,
};

export const initialTilesAmount: Record<LetterPL, number> = {
  ['?']: 2,
  ['a']: 9,
  ['ą']: 1,
  ['b']: 2,
  ['c']: 3,
  ['ć']: 1,
  ['d']: 3,
  ['e']: 7,
  ['ę']: 1,
  ['f']: 1,
  ['g']: 2,
  ['h']: 2,
  ['i']: 8,
  ['j']: 2,
  ['k']: 3,
  ['l']: 3,
  ['ł']: 2,
  ['m']: 3,
  ['n']: 5,
  ['ń']: 1,
  ['o']: 6,
  ['ó']: 1,
  ['p']: 3,
  ['r']: 4,
  ['s']: 4,
  ['ś']: 1,
  ['t']: 3,
  ['u']: 2,
  ['w']: 4,
  ['y']: 4,
  ['z']: 5,
  ['ż']: 1,
  ['ź']: 1,
};

export const twoLettersWords: Partial<Record<LetterPL, string[]>> = {
  a: ['aa', 'ad', 'ag', 'aj', 'al', 'am', 'ar', 'as', 'at', 'au', 'aż'],
  b: ['ba', 'be', 'bi', 'bo', 'bu', 'by'],
  c: ['ce', 'ci', 'co'],
  d: ['da', 'de', 'do', 'dy'],
  e: [
    'ee',
    'ef',
    'eh',
    'ej',
    'el',
    'eł',
    'em',
    'en',
    'eń',
    'eo',
    'er',
    'es',
    'eś',
    'et',
    'ew',
    'ez',
  ],
  f: ['fa', 'fe', 'fi', 'fu'],
  g: ['gę', 'go', 'gu'],
  h: ['ha', 'he', 'hę', 'hi', 'hm', 'ho', 'hu'],
  i: ['id', 'ii', 'il', 'ił', 'im', 'in', 'iw', 'iż'],
  j: ['ja', 'ją', 'je'],
  k: ['ka', 'ki', 'ko', 'ku'],
  l: ['la', 'li', 'lu'],
  m: ['ma', 'mą', 'me', 'mi', 'mu', 'my'],
  n: ['na', 'ni', 'no', 'nu', 'ny'],
  o: [
    'od',
    'oh',
    'oj',
    'ok',
    'om',
    'on',
    'oń',
    'oo',
    'op',
    'or',
    'os',
    'oś',
    'ot',
    'oz',
    'oż',
  ],
  ó: ['ód', 'ós', 'ów'],
  p: ['pa', 'pe', 'pi', 'po'],
  r: ['re', 'ro'],
  s: ['są', 'se', 'si', 'su'],
  t: ['ta', 'tą', 'te', 'tę', 'to', 'ts', 'tu', 'ty'],
  u: ['ud', 'uf', 'ul', 'ut', 'uu', 'uz'],
  w: ['we', 'wu', 'wy'],
  y: ['yh', 'yo'],
  z: ['za', 'ze'],
  ż: ['że'],
};