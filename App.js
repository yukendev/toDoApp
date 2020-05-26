import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import Header from "./component/header";
import Button from "./component/button";
import ToDoList from "./component/toDoList";

export default function App() {
  const [content, setContent] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [list, setList] = useState([]);
  const [id, setId] = useState(0);

  AddList = () => {
    if (content == "") {
      return false;
    }
    setId(id + 1);
    setList(list.concat({ id: id, content: content }));
    setContent("");
  };

  DeleteList = (index) => {
    const newList = list.filter(function (todo) {
      return todo.id !== index;
    });
    setList(newList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.toDoListContainer}>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <ToDoList
              text={item.content}
              DeleteList={(index) => {
                this.DeleteList(index);
              }}
              index={item.id}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.modalText}
            onChangeText={(text) => {
              setContent(text);
            }}
            value={content}
          />
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
              AddList();
            }}
          >
            <Text style={styles.addButton}>追加する</Text>
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
    borderRadius: 9,
  },
  buttonWrapper: {
    position: "absolute",
    right: -10,
    bottom: 0,
  },
  modalText: {
    borderWidth: 1,
    borderColor: "#ddd",
    height: 40,
    width: "80%",
    backgroundColor: "#fff",
  },
  addButton: {
    fontSize: 20,
    marginTop: 40,
    color: "black",
    opacity: 1.0,
  },
});
