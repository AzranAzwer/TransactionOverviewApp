import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import {styles} from './Button.style';
import {T_ButtonProps} from './ButtonTypes';

export const Button = ({
  title,
  onClick,
  height,
  width,
  borderRadius,
  backgroundColor,
  disabled,
  textColor,
  marginTop,
}: T_ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      disabled={disabled}
      style={{
        ...styles.buttonContainer,
        height,
        width,
        borderRadius,
        backgroundColor,
        marginTop,
      }}>
      <View>
        <Text
          style={{
            ...styles.titleStyle,
            color: textColor,
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
