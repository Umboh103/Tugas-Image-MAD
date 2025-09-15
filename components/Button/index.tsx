import React from 'react';
import { TouchableOpacity, StyleSheet, Text, GestureResponderEvent } from 'react-native';

const Button = ({
  label,
  color = 'orange',
  colorText = 'black',
  onPress,
}: {
  label: string;
  color?: string;
  colorText?: string;
  onPress?: (event: GestureResponderEvent) => void;
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={[styles.buttonText, { color: colorText }]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 45,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
