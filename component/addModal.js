import React from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default AddModal = (props) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modalContainer}>
        <TextInput
          style={styles.modalText}
          onChangeText={(text) => {
            setContent(text);
          }}
          value=""
        />
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
            props.add();
          }}
        >
          <Text style={styles.addButton}>追加する</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
