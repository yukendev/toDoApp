import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default ToDoList = (props) => {
  return (
    <View style={styles.listItem}>
      <View style={styles.checkBox}></View>
      <Text style={styles.toDoText}>{props.text}</Text>
      <View style={styles.deleteButton}>
        <Icon name="trash" style={styles.deleteButtonText} />
      </View>
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
  },
  checkBox: {
    borderColor: "#6495ed",
    borderWidth: 1,
    width: 30,
    height: 30,
    marginRight: 15,
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
});
