import React from 'react';
import { Switch, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { selectTheme } from 'src/modules/Settings/store/selectors';

import * as S from './styles';

type Props = {
  label: string;
  value: boolean;
  onChange: () => void;
};

const Toggle: React.FC<Props> = ({ label, value, onChange }) => {
  const { color } = useSelector(selectTheme);

  return (
    <S.ToggleWrapper>
      <Text>{label}</Text>
      <Switch
        trackColor={{ false: color.grayLight, true: color.boardField }}
        thumbColor={value ? color.board : color.grayMedium}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onChange}
        value={value}
      />
    </S.ToggleWrapper>
  );
};

export default Toggle;
