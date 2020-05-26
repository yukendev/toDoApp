import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default ToDoList = (props) => {
  const [checkVisible, setCheckVisible] = useState(false);

  return (
    <View style={styles.listItem}>
      <TouchableOpacity
        style={styles.checkBox}
        onPress={() => {
          setCheckVisible(!checkVisible);
        }}
      >
        {checkVisible && <Icon name="check" style={styles.check} />}
      </TouchableOpacity>
      <Text style={styles.toDoText}>{props.text}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => {
          props.DeleteList(props.index);
        }}
      >
        <Icon name="trash" style={styles.deleteButtonText} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
    borderColor: "#ddd",
    width: "95%",
    height: 70,
    borderWidth: 1,
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
  },
  checkBox: {
    borderColor: "#6495ed",
    borderWidth: 1,
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  toDoText: {
    fontSize: 20,
    lineHeight: 30,
  },
  deleteButton: {
    position: "absolute",
    right: 20,
  },
  deleteButtonText: {
    fontSize: 25,
  },
  check: {
    fontSize: 25,
  },
});
