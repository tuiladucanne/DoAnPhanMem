import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  TextInput,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get("window");

const SpecialtySelectionModal = ({
  visible,
  specialties,
  onSelectSpecialty,
  onClose,
}) => {
  const handleSelectSpecialty = (specialty: any) => {
    onSelectSpecialty(specialty);
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
          <Text style={styles.modalTitle}>Chọn chuyên khoa</Text>
          <ScrollView style={styles.scrollView}>
            {specialties.map(
              (
                specialty:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | null
                  | undefined,
                index: React.Key | null | undefined
              ) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleSelectSpecialty(specialty.tenkhoa)}
                >
                  <Text style={styles.specialtyItem}>{specialty.tenkhoa}</Text>
                </TouchableOpacity>
              )
            )}
            <TextInput
              placeholder="Nhập chuyên khoa mới..."
              style={styles.textInput}
            />
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
  specialtyItem: {
    fontSize: RFPercentage(2.5),
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    fontSize: RFPercentage(2.5),
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
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

export default SpecialtySelectionModal;
