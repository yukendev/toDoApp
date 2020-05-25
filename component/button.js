import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";

export default Button = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.button}>
      <Text style={styles.buttonTitle}>{props.buttonTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    right: 40,
    bottom: 40,
    backgroundColor: "#6495ed",
    height: 50,
    width: 50,
    alignItems: "center",
    borderRadius: 25,
  },
  buttonTitle: {
    fontSize: 40,
    color: "#fff",
    position: "absolute",
    top: -2,
  },
});
