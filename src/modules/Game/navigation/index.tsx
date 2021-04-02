import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { RootTabParamList, Screen } from 'src/layout/interfaces';
import NewGame from 'src/modules/Game/containers/NewGame';
import GameContainer from 'src/modules/Game/containers/Game';
import FinishedGame from 'src/modules/Game/containers/FinishedGame';
import { GameScreen } from 'src/modules/Game/interfaces';
import { selectTheme } from 'src/modules/Settings/store/selectors';

import DrawerContent from './components/DrawerContent';
import { styles } from './styles';

const Drawer = createDrawerNavigator();

type Props = {
  navigation: StackNavigationProp<RootTabParamList, Screen.Game>;
  route: RouteProp<RootTabParamList, Screen.Game>;
};

const GameTabContent: React.FC<Props> = () => {
  const themedStyles = styles(useSelector(selectTheme));

  return (
    <Drawer.Navigator
      initialRouteName={GameScreen.NewGame}
      drawerContent={(props) => (
        <DrawerContentScrollView style={themedStyles.container}>
          <DrawerContent {...props} />
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen name={GameScreen.NewGame} component={NewGame} />
      <Drawer.Screen name={GameScreen.Game} component={GameContainer} />
      <Drawer.Screen name={GameScreen.FinishedGame} component={FinishedGame} />
    </Drawer.Navigator>
  );
};

export default GameTabContent;