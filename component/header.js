import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>to do</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ddd",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: 90,
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
  },
});
