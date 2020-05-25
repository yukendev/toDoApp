import React from "react";
import { View, Text, Modal } from "react-native";

export default AddModal = () => {
  const modalVisible = true;
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View>
        <Text>k</Text>
      </View>
    </Modal>
  );
};
