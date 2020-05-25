import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Header from "./component/header";
import Button from "./component/button";
import ToDoList from "./component/toDoList";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ToDoList text="ゴミ出し" />

      <Button buttonTitle="+" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
