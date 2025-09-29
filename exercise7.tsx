import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.blackkBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
      <View style={styles.container2}>
        <Image
                source={require("./assets/logo-with-motto-3.png")} 
                style={styles.image}
              />
      
      </View>
      <View style={styles.container3}>
        <View style={styles.blackkBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
    </>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1 / 3,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'flex-start', // main axis
    alignItems: 'center', // cross axis
  },

  blackkBox: {
    height: 80,
    width: 80,
    backgroundColor: 'black',
    marginHorizontal: 8, // kiri ke kanan
  },

  yellowBox: {
    height: 80,
    width: 80,
    backgroundColor: 'yellow',
    marginHorizontal: 8,
  },

  blackBox: {
    height: 80,
    width: 80,
    backgroundColor: 'black',
    marginHorizontal: 8,
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center', // main axis
    alignItems: 'center', // cross axis
    backgroundColor: 'white',
  },

  image: {
    width: 350,
    height: 150,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  container3: {
    flex: 1 / 3,
    flexDirection: 'row',
    justifyContent: 'space-around', // main axis
    alignItems: 'center', // cross axis
    backgroundColor: 'blue',
  },
});