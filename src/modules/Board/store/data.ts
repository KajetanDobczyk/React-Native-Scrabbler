import { IBoardFields, INewWord } from '../interfaces';
import { IBoardState } from './interfaces';

export const initialBoardFields: IBoardFields = [
  [
    { letter: '', bonus: 'tw' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'tw' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'tw' },
  ],
  [
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dw' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'tl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'tl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dw' },
    { letter: '', bonus: 0 },
  ],
  [
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dw' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dw' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
  ],
  [
    { letter: '', bonus: 'dl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dw' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dw' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dl' },
  ],
  [
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dw' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dw' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
  ],
  [
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'tl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'tl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'tl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'tl' },
    { letter: '', bonus: 0 },
  ],
  [
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
  ],
  [
    { letter: '', bonus: 'tw' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dw' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'tw' },
  ],
  [
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
  ],
  [
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'tl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'tl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'tl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'tl' },
    { letter: '', bonus: 0 },
  ],
  [
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dw' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dw' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
  ],
  [
    { letter: '', bonus: 'dl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dw' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dw' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dl' },
  ],
  [
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dw' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dw' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
  ],
  [
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dw' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'tl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'tl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dw' },
    { letter: '', bonus: 0 },
  ],
  [
    { letter: '', bonus: 'tw' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'tw' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'dl' },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 0 },
    { letter: '', bonus: 'tw' },
  ],
];

export const initialNewWord: INewWord = {
  x: 0,
  y: 0,
  direction: 'horizontal',
  word: '',
  targetLength: 0,
};

export const initialLayout = {
  x: 0,
  y: 0,
  size: 0,
  tileSize: 0,
};

export const initialState: IBoardState = {
  boardFields: initialBoardFields,
  layout: initialLayout,
  newWord: initialNewWord,
  wordsHistory: [],
};
