import { Letter } from './interfaces';

export const twoLettersWords: Partial<Record<Letter, string[]>> = {
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
  g: ['gę', 'go ', 'gu'],
  h: ['ha', 'he ', 'hę', 'hi', 'hm', 'ho', 'hu'],
  i: ['id', 'ii ', 'il', 'ił', 'im', 'in', 'iw', 'iż'],
  j: ['ja', 'ją ', 'je'],
  k: ['ka', 'ki ', 'ko', 'ku'],
  l: ['la', 'li ', 'lu'],
  m: ['ma', 'mą ', 'me', 'mi', 'mu', 'my'],
  n: ['na', 'ni ', 'no', 'nu', 'ny'],
  o: [
    'od',
    'oh ',
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
  ó: ['ód', 'ós ', 'ów'],
  p: ['pa', 'pe ', 'pi', 'po'],
  r: ['re', 'ro'],
  s: ['są', 'se', 'si', 'su'],
  t: ['ta', 'tą', 'te', 'tę', 'to', 'ts', 'tu', 'ty'],
  u: ['ud', 'uf', 'ul', 'ut', 'uu', 'uz'],
  w: ['we', 'wu', 'wy'],
  y: ['yh', 'yo'],
  z: ['za', 'ze'],
  ż: ['że'],
};
