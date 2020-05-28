import EStyleSheet from 'react-native-extended-stylesheet';

import { color } from 'src/theme';

export const styles = EStyleSheet.create({
  container: {
    backgroundColor: color.green,
  },
  bottomContent: {
    flexGrow: 1,
    backgroundColor: color.green,
  },
});
