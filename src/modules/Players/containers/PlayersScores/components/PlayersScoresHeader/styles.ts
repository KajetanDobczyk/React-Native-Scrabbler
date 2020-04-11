import { StyleSheet } from 'react-native';

import { color, font } from 'src/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: color.black,
  },
  playerHeader: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: color.white,
    borderRightWidth: 1,
    borderColor: color.black,
  },
  'playerHeader:last-child': {
    borderRightWidth: 0,
  },
  playerName: {
    fontSize: font.size.sm,
    color: color.black,
  },
});
