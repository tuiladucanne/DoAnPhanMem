import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get("window");

const DateSelectionModal = ({ visible, dates, onSelectDate, onClose }) => {
  const handleSelectDate = (date: any) => {
    onSelectDate(date);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Chọn ngày khám</Text>
          <ScrollView style={styles.scrollView}>
            {dates.map((date, index) => (
              <TouchableOpacity key={index} onPress={() => handleSelectDate(date)}>
                <Text style={styles.dateItem}>{date}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Đóng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: width * 0.8,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    maxHeight: height * 0.6,
  },
  modalTitle: {
    fontSize: RFPercentage(3),
    fontWeight: "bold",
    marginBottom: 20,
  },
  scrollView: {
    maxHeight: height * 0.4, 
  },
  dateItem: {
    fontSize: RFPercentage(2.5),
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  closeButton: {
    marginTop: 20,
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#22668E",
    borderRadius: 10,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: RFPercentage(2.5),
  },
});

export default DateSelectionModal;
