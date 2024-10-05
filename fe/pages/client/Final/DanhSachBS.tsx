import React, { useContext } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";
import { UserContext } from "../../context/UserContext";
import DoctorCard from "../../client/Final/ListBacSi"; // Adjust the import path if needed

const { width, height } = Dimensions.get("window");

const DanhSachBSScreen = () => {
  const doctors = [
    {
      name: "BS.Nguyễn Văn A",
      specialty: "Chuyên Khoa Nội",
      image: require("../../../assets/Home/Dr1.png"), 
    },
    {
      name: "BS.Trần Thị B",
      specialty: "Chuyên Khoa Da Liễu",
      image: require("../../../assets/Home/Dr1.png"),
    },
   
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons
            name="arrow-back"
            size={RFPercentage(4)}
            color="#FFFFFF"
            style={styles.headerIcon}
          />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Đội ngũ Bác Sĩ</Text>
        </View>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {doctors.map((doctor, index) => (
          <DoctorCard
            key={index}
            doctor={doctor}
            onPress={() => console.log("Doctor selected:", doctor.name)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: width * 0.05,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: height * 0.02,
    paddingTop: height * 0.02,
    paddingHorizontal:width*0.02,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: height * 0.01,
    backgroundColor: "#22668E",
    paddingHorizontal: width * 0.03,
  },
  headerIcon: {},
  headerTitleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: RFPercentage(2.5),
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default DanhSachBSScreen;
