import React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from './components/Title';
import TextInput from './components/TextInput';
import Button from './components/Button';

const Exercise5 = () => {
  return (
    <View style={styles.container}>
      <Title text="Welcome" />

      <TextInput placeholder="Masukan username anda" label="Username" />
      <TextInput
        placeholder="Masukan password anda"
        label="Password"
        secureTextEntry={true}
      />

      {/* Default Buttons */}
      <Button label="Sign In" />
      <Button label="Create New Account" color="#797171" colorText="#ffffff" />

      {/* Social Media Buttons */}
      <Button label="Sign in Google" color="#DB4437" colorText="#ffffff" />
      <Button label="Sign in Facebook" color="#1877F2" colorText="#ffffff" />
      <Button label="Sign in Apple" color="#000000" colorText="#ffffff" />
    </View>
  );
};

export default Exercise5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
});
