export enum DictionaryScreen {
  Home = 'Dictionary',
  TwoLettersWords = 'Two Letters Words',
}

export type DictionaryTabParamList = Record<DictionaryScreen, any>;

export type Letter =
  | '?'
  | 'a'
  | 'ą'
  | 'b'
  | 'c'
  | 'ć'
  | 'd'
  | 'e'
  | 'ę'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'ł'
  | 'm'
  | 'n'
  | 'ń'
  | 'o'
  | 'ó'
  | 'p'
  | 'r'
  | 's'
  | 'ś'
  | 't'
  | 'u'
  | 'w'
  | 'y'
  | 'z'
  | 'ż'
  | 'ź';

export interface IComment {
  author: string;
  date: string;
  content: string;
}

export interface IWordSearch {
  word: string;
  isAllowed: boolean;
  description?: string;
  comments: IComment[];
}
