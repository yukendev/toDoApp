import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Modal,
  TouchableOpacity,
} from "react-native";
import Header from "./component/header";
import Button from "./component/button";
import ToDoList from "./component/toDoList";
import AddModal from "./component/addModal";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.toDoListContainer}>
        <ToDoList text="ゴミ出し" />
        <ToDoList text="課題" />
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Text>Hello World</Text>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text>追加する</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
        style={styles.buttonWrapper}
      >
        <Button buttonTitle="+" />
      </TouchableOpacity>
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
  toDoListContainer: {
    flex: 1,
    marginTop: 70,
    width: "100%",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#6495ed",
    opacity: 0.3,
    justifyContent: "center",
    height: 200,
    width: "80%",
    alignItems: "center",
    marginTop: 300,
    marginRight: "auto",
    marginLeft: "auto",
  },
  buttonWrapper: {
    position: "absolute",
    right: -10,
    bottom: 0,
  },
});
