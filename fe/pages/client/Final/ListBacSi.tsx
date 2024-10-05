import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

interface Doctor {
  name: string;
  specialty: string;
  image: any;
}

interface RecyclerViewProps {
  doctor: Doctor;
  onPress: () => void;
}

const DoctorCard: React.FC<RecyclerViewProps> = ({ doctor, onPress }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={doctor.image} style={styles.doctorImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.doctorName}>{doctor.name}</Text>
        <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.detailsText}>Chi tiết...</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bookButton} onPress={onPress}>
            <Text style={styles.bookButtonText}>Đặt lịch ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: width * 0.95,
    height: width * 0.5,
    backgroundColor: "#ffffff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  doctorImage: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: (width * 0.3) / 2,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    paddingLeft: width * 0.025,
  },
  doctorName: {
    fontSize: width * 0.06,
    fontWeight: "bold",
    color: "#000",
    marginBottom: width * 0.01,
  },
  doctorSpecialty: {
    fontSize: width * 0.04,
    color: "#666",
  },
  detailsText: {
    fontSize: width * 0.04,
    color: "#3498db",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: width * 0.04,
    alignItems: "center",
  },
  bookButton: {
    backgroundColor: "#3498db",
    paddingVertical: width * 0.02,
    paddingHorizontal: width * 0.03,
    borderRadius: 20,
  },
  bookButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: width * 0.035,
  },
});

export default DoctorCard;
