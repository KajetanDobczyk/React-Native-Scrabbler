import { StyleSheet } from 'react-native';

import { Theme } from 'src/theme/interfaces';

type StylesProps = {
  opacity: number;
};

export const styles = ({ color, font }: Theme, { opacity }: StylesProps) =>
  StyleSheet.create({
    container: {
      aspectRatio: 1,
      position: 'relative',
      backgroundColor: color.tile,
      borderRadius: 2,
    },
    highlightOverlay: {
      backgroundColor: color.white,
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: 0,
    },
    content: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      zIndex: 1,
    },
    letter: {
      textTransform: 'uppercase',
      opacity,
    },
    points: {
      position: 'absolute',
      bottom: 0,
      right: 2,
      fontSize: font.size.xxs,
    },
  });