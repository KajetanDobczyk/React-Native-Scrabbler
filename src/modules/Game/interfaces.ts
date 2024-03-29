import { Letter } from 'src/modules/Dictionary/interfaces';
import { FetchStatus } from 'src/api/interfaces';
import { PlayerId } from '../Players/interfaces';

export enum GameScreen {
  NewGame = 'New Game',
  Game = 'Game',
  FinishedGame = 'Finished Game',
}

export type GameTabParamList = Record<GameScreen, any>;

export type GameStatus = FetchStatus;

export type GameView = 'points' | 'board';

export interface ITilesListElement {
  amountLeft: number;
}

export type ITilesList = Record<Letter, ITilesListElement>;

export type FieldBonus = 'dl' | 'tl' | 'dw' | 'tw' | 0;

export interface ICoordinates {
  x: number;
  y: number;
}

export interface IBoardField extends ICoordinates {
  letter: Letter | null;
  blankLetter?: Letter;
  bonus: FieldBonus;
}

export interface IBoardTile extends ICoordinates {
  letter: Letter;
  blankLetter?: Letter;
}

export interface INewMove {
  target?: ICoordinates;
  direction: WordDirection;
  tiles: IBoardTile[];
}

export type IBoardFields = IBoardField[][];

export type WordDirection = 'h' | 'v';

export type PlayedMoveType = 'skipped' | 'loss';

export type IPlayedMove = {
  type?: PlayedMoveType;
  tiles: IBoardTile[];
  words: IBoardField[][];
};

export interface IPlayer {
  name: string;
  moves: IPlayedMove[];
  finalTiles: Letter[];
}

export type ICurrentPlayers = Partial<Record<PlayerId, IPlayer>>;

export type IFinalPlayersTiles = Record<PlayerId, Letter[]>;
