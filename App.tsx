import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const App = () => {
  // Base64 image
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menampilkan 3 Jenis Gambar</Text>

      <Text style={styles.subtitle}>1. Gambar dari Lokal</Text>
      <Image
        source={require("./assets/her.jpg")} 
        style={styles.image}
      />

      <Text style={styles.subtitle}>2. Gambar dari Internet</Text>
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={styles.image}
      />

      <Text style={styles.subtitle}>3. Gambar dari Base64</Text>
      <Image
        source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' }}
        style={styles.image}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f4f4"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333"
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
    color: "#555"
  },
  image: {
    width: 200,
    height: 250,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ccc"
  }
});