import React from 'react';
import { View, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgProps } from 'react-native-svg';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  hasCheckBox?: boolean;
  checked?: boolean;
};

export function Category({ title, icon: Icon, hasCheckBox = false, checked = false, ...rest }: Props) {
  const { secondary40, secondary50, secondary60, secondary85 } = theme.colors;

  return (
    <RectButton {...rest}>
      <LinearGradient style={styles.container} colors={[secondary50, secondary60]}>
        <LinearGradient
          style={[
            styles.content,
            {
              opacity: checked ? 1 : 0.5
            }
          ]}
          colors={[checked ? secondary85 : secondary50, secondary40]}
        >
          {/* checked square */}
          { hasCheckBox && 
            <View style={checked ? styles.checked : styles.check} />
          }
          <Icon width={48} height={48} />
          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
}
