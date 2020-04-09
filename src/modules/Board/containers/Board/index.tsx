import React, { useState } from 'react';
import { View, Animated, Platform } from 'react-native';
import {
  LongPressGestureHandler,
  LongPressGestureHandlerGestureEvent,
  State,
} from 'react-native-gesture-handler';
import isEmpty from 'lodash/isEmpty';
import { useDispatch } from 'react-redux';

import { Letter } from 'src/modules/Dictionary/interfaces';

import DraggedTile from './components/DraggedTile';
import GameBoard from './components/GameBoard';
import TilesList from './components/TilesList';
import { boardPadding, styles } from './styles';
import { cleanBoardHighlights } from '../../store/slice';
import { updateBoardHighlights, dropBoardTile } from '../../store/thunks';
import NewWordConfirmationButtons from './components/NewWordConfirmationButtons';

const MEASURE_TIMEOUT = Platform.select({
  android: 300,
  ios: 100,
});

let x0 = 0;
let y0 = 0;

let tilesMeasurements: Record<
  string,
  { x: number; y: number; size: number }
> = {};
let measureTimeouts: Record<string, number> = {};

const Board = () => {
  const dispatch = useDispatch();
  const [draggedTile, setDraggedTile] = useState<Letter | null>(null);

  let translate = new Animated.ValueXY({ x: 0, y: 0 });

  const tilesRefs: Record<string, View | null> = {};

  const findTouchedTile = (touchX: number) => {
    if (isEmpty(tilesMeasurements)) {
      return;
    }

    return Object.keys(tilesRefs).find((letter) => {
      const { x, size } = tilesMeasurements[letter];

      return touchX + boardPadding - x >= 0 && touchX + boardPadding - x < size;
    });
  };

  const onDragStart = (event: LongPressGestureHandlerGestureEvent) => {
    const { x, y } = event.nativeEvent;
    const tile = findTouchedTile(x);

    if (tile && tile !== draggedTile) {
      x0 = x;
      y0 = y;
      setDraggedTile(tile as Letter);
    }
  };

  const onDragEnd = (x: number, y: number, state: State) => {
    x0 = 0;
    y0 = 0;

    if (state === State.END && draggedTile) {
      dispatch(dropBoardTile(x, y, draggedTile));
    }

    setDraggedTile(null);
    dispatch(cleanBoardHighlights());
  };

  const onGestureEvent = (event: LongPressGestureHandlerGestureEvent) => {
    const { x, y } = event.nativeEvent;

    translate.setValue({ x: x - x0, y: y - y0 });

    dispatch(updateBoardHighlights(x, y));
  };

  const onHandlerStateChange = (event: LongPressGestureHandlerGestureEvent) => {
    const { x, y, state } = event.nativeEvent;

    if (state === State.ACTIVE) {
      onDragStart(event);
    } else if (state === State.END || state === State.CANCELLED) {
      onDragEnd(x, y, state);
    }
  };

  const measureAllTiles = () => {
    const itemKeys = Object.keys(tilesRefs);
    itemKeys.forEach(measureTile);
  };

  const measureTile = (letter: string) => {
    // setTimeout is required, otherwise all measurements will be 0
    if (measureTimeouts[letter]) {
      clearTimeout(measureTimeouts[letter]);
    }

    measureTimeouts[letter] = setTimeout(() => {
      const element = tilesRefs[letter];

      if (!element || draggedTile) {
        return;
      }

      element.measureInWindow((x: number, y: number, width: number) => {
        tilesMeasurements[letter] = { x, y, size: width };
      });
    }, MEASURE_TIMEOUT);
  };

  const setTileRef = (letter: string) => (ref: View | null) => {
    tilesRefs[letter] = ref;
    measureTile(letter);
  };

  return (
    <LongPressGestureHandler
      minDurationMs={200}
      maxDist={Number.MAX_SAFE_INTEGER}
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onHandlerStateChange}
    >
      <View style={styles.container}>
        <GameBoard />
        <TilesList
          onMomentumScrollEnd={measureAllTiles}
          onSetTileRef={setTileRef}
        />
        <NewWordConfirmationButtons />
        <DraggedTile
          letter={draggedTile}
          measurements={
            draggedTile
              ? tilesMeasurements[draggedTile]
              : { x: 0, y: 0, size: 0 }
          }
          translate={translate}
        />
      </View>
    </LongPressGestureHandler>
  );
};

export default Board;
