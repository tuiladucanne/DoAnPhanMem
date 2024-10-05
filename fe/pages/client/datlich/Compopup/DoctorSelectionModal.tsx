import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get("window");

const DoctorSelectionModal = ({ visible, doctors, onSelectDoctor, onClose }) => {
  const handleSelectDoctor = (doctor: any) => {
    onSelectDoctor(doctor);
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
          <Text style={styles.modalTitle}>Chọn Bác sĩ</Text>
          <ScrollView style={styles.scrollView}>
            {doctors.map((doctor: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
              <TouchableOpacity key={index} onPress={() => handleSelectDoctor(doctor)}>
                <Text style={styles.doctorItem}>{doctor}</Text>
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
  doctorItem: {
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

export default DoctorSelectionModal;
