import React from "react";
import { Modal, View, StyleSheet, TouchableOpacity, Text, FlatList, Dimensions, ScrollView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const TimeSlotSelectionModal = ({ visible, timeSlots, onSelectTimeSlot, onClose }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onSelectTimeSlot(item)}>
      <Text style={styles.itemText}>{item}</Text>
    </TouchableOpacity>
  );
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Chọn giờ khám</Text>
          <ScrollView style={styles.listContainer}>
            <FlatList
              data={timeSlots}
              renderItem={renderItem}
              keyExtractor={(item) => item}
              scrollEnabled={false} 
            />
          </ScrollView>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <MaterialIcons name="close" size={RFPercentage(4)} color="#22668E" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: width * 0.8,
    maxHeight: height * 0.7,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: RFPercentage(2.5),
    fontWeight: "bold",
    marginBottom: height * 0.02,
  },
  listContainer: {
    width: "100%",
    maxHeight: height * 0.5, 
  },
  itemContainer: {
    paddingVertical: height * 0.015,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
    alignItems: "center",
  },
  itemText: {
    fontSize: RFPercentage(2),
    color: "#22668E",
  },
  closeButton: {
    position: "absolute",
    top: height * 0.01,
    right: width * 0.05,
  },
});

export default TimeSlotSelectionModal;
