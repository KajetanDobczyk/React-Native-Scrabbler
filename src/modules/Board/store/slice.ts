import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './data';
import { ICoordinatesWithLetter } from './interfaces';
import { boardPadding } from '../containers/Board/styles';
import { IBoardLayout } from '../interfaces';

const board = createSlice({
  name: 'board',
  initialState,
  reducers: {
    initBoardLayout(state, action: PayloadAction<IBoardLayout>) {
      state.layout = action.payload;

      const { tileSize } = action.payload;

      state.boardFields = state.boardFields.map((row, y) =>
        row.map((field, x) => ({
          ...field,
          x: boardPadding + x * tileSize,
          y: boardPadding + y * tileSize,
        })),
      );
    },
    placeTile(state, action: PayloadAction<ICoordinatesWithLetter>) {
      const { x, y, letter } = action.payload;

      state.newMove.push(action.payload);
      state.boardFields[y][x].letter = letter;
      state.tilesAmount[letter]--;
    },
    acceptNewMove(state) {
      state.movesHistory.push({
        playerId: 0,
        tiles: state.newMove,
      });

      state.newMove = [];
    },
    cancelNewMove(state) {
      state.newMove.forEach((move) => {
        state.boardFields[move.y][move.x].letter = '';
      });

      state.newMove = [];
    },
  },
});

export const {
  initBoardLayout,
  placeTile,
  acceptNewMove,
  cancelNewMove,
} = board.actions;

export * from './thunks';
export * from './selectors';

export default board.reducer;
