import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Biodata Saya</Text>

      <Image
        source={require("./assets/her.jpg")} 
        style={styles.image}
      />
      <Text style={styles.name}>Umboh, Timothy Alexander</Text>
      <Text style={styles.info}>NIM: 105022310027</Text>
      <Text style={styles.info}>No Regist: S22310184</Text>
      <Text style={styles.info}>Umur: 19</Text>
      <Text style={styles.info}>Kelas: MAD</Text>
      <Text style={styles.info}>Jurusan: Informatika</Text>
      <Text style={styles.info}>Hobi: Bermain Game, Memasak</Text>
      <Text style={styles.info}>Cita-cita: Game Developer</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FFF294"
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333"
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: "#555"
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 10
  },
  info: {
    fontSize: 18,
    color: "#444",
    marginBottom: 5
  }
});
