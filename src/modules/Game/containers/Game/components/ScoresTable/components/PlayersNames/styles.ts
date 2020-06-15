import { StyleSheet } from 'react-native';

import { Theme } from 'src/theme/interfaces';

export const styles = ({ color, font }: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: color.green,
    },
    name: {
      flexGrow: 1,
      textAlign: 'center',
      fontSize: font.size.xs,
      color: color.lightGreen,
      paddingBottom: 5,
    },
    currentName: {
      color: color.white,
    },
  });
