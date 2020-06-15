import React, { useState } from 'react';
import { Text, ScrollView, View } from 'react-native';
import Modal from 'react-native-modal';
import { useSelector, useDispatch } from 'react-redux';
import SegmentedControlTab from 'react-native-segmented-control-tab';

import { PlayerId } from 'src/modules/Players/interfaces';
import { Letter } from 'src/modules/Dictionary/interfaces';
import {
  setEndingPlayerId as setEndingPlayerIdAction,
  updateFinalPlayersTiles,
} from 'src/modules/Game/store/players/slice';
import FlatButton from 'src/theme/components/FlatButton';
import {
  selectPreviousPlayerId,
  selectPlayers,
} from 'src/modules/Game/store/players/selectors';
import { selectTilesList } from 'src/modules/Game/store/board/selectors';
import { IFinalPlayersTiles } from 'src/modules/Game/interfaces';
import { selectTheme } from 'src/modules/Settings/store/selectors';

import PlayerTilesLeft from './components/PlayerTilesLeft';
import { styles } from './styles';

type Props = {
  onFinish: () => void;
  onClose: () => void;
};

const EndGameModal: React.FC<Props> = ({ onFinish, onClose }) => {
  const dispatch = useDispatch();

  const previousPlayerId = useSelector(selectPreviousPlayerId);
  const players = useSelector(selectPlayers);
  const themedStyles = styles(useSelector(selectTheme));

  const playersIds = Object.keys(players) as PlayerId[];

  const initialPlayersTiles = playersIds.reduce(
    (acc, playerId) => ({
      ...acc,
      [playerId]: [],
    }),
    {} as IFinalPlayersTiles,
  );

  const [tilesLeft, setTilesLeft] = useState(useSelector(selectTilesList));
  const [endingPlayerId, setEndingPlayerId] = useState(previousPlayerId);
  const [finalPlayersTiles, setFinalPlayersTiles] = useState<
    IFinalPlayersTiles
  >(initialPlayersTiles);

  const handleSelectEndingPlayer = (playerId: any) => {
    setEndingPlayerId(playerId.toString());
    setFinalPlayersTiles(initialPlayersTiles);
  };

  const addPlayerTileLeft = (playerId: PlayerId, letter: Letter) => {
    setFinalPlayersTiles({
      ...finalPlayersTiles,
      [playerId]: [...finalPlayersTiles[playerId], letter],
    });
    setTilesLeft({
      ...tilesLeft,
      [letter]: {
        amountLeft: tilesLeft[letter].amountLeft - 1,
      },
    });
  };

  const removePlayerTileLeft = (
    playerId: PlayerId,
    letter: Letter,
    index: number,
  ) => {
    setFinalPlayersTiles({
      ...finalPlayersTiles,
      [playerId]: finalPlayersTiles[playerId].filter(
        (_letter, i) => i !== index,
      ),
    });
    setTilesLeft({
      ...tilesLeft,
      [letter]: {
        amountLeft: tilesLeft[letter].amountLeft + 1,
      },
    });
  };

  const finish = () => {
    dispatch(setEndingPlayerIdAction(endingPlayerId));
    dispatch(updateFinalPlayersTiles(finalPlayersTiles));
    onFinish();
    onClose();
  };

  const notEndingPlayersIds = playersIds.filter(
    (playerId) => playerId !== endingPlayerId,
  );

  return (
    <Modal isVisible onBackdropPress={onClose} onSwipeCancel={onClose}>
      <ScrollView contentContainerStyle={themedStyles.container}>
        <Text style={themedStyles.header}>Kto zakończył grę?</Text>
        <SegmentedControlTab
          values={playersIds.map((playerId) => players[playerId]?.name)}
          selectedIndex={parseInt(endingPlayerId)}
          onTabPress={handleSelectEndingPlayer}
          tabsContainerStyle={themedStyles.controlTabWrapper}
          tabStyle={themedStyles.controlTab}
          tabTextStyle={themedStyles.controlTabText}
          activeTabStyle={themedStyles.activeControlTab}
        />
        <Text style={themedStyles.header}>
          Zaznacz płytki pozostałych graczy
        </Text>
        {notEndingPlayersIds.map((playerId) => (
          <PlayerTilesLeft
            key={playerId}
            playerId={playerId}
            playerName={players[playerId]!.name}
            tilesLeft={tilesLeft}
            playerTilesLeft={finalPlayersTiles[playerId]}
            onListTilePressed={addPlayerTileLeft}
            onPlayerTilePressed={removePlayerTileLeft}
          />
        ))}
        <View style={themedStyles.buttonsWrapper}>
          <FlatButton label="Anuluj" onPress={onClose} />
          <FlatButton label="Zakończ" onPress={finish} />
        </View>
      </ScrollView>
    </Modal>
  );
};

export default EndGameModal;
