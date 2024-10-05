import React, { useState, useContext, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Alert,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";
import DateSelectionModal from "./Compopup/DateSelectionModal";
import SpecialtySelectionModal from "./Compopup/SpecialtySelectionModal";
import TimeSlotSelectionModal from "./Compopup/TimeSlotSelectionModal";

const { width, height } = Dimensions.get("window");

import { UserContext } from "../../context/UserContext";
import axios from "axios";

const DatlichNgayScreen = (props: any) => {
  const { user } = useContext(UserContext);

  const [dateListVisible, setDateListVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [dates, setDates] = useState([
    "23/5/2024",
    "7/7/2024",
    "15/8/2024",
    "30/9/2024",
  ]);

  const [specialtyListVisible, setSpecialtyListVisible] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  // xet api
  const [specialties, setSpecialties] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/user/dangkykhambenh/theongay")
      .then(function (res) {
        const departments = res.data.dataKhoa.map(
          (khoa: { _id: any; tenkhoa: any }) => ({
            tenkhoa: khoa.tenkhoa,
          })
        );
        setSpecialties(departments);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(specialties);
  }, [specialties]);

  //

  const [timeSlotListVisible, setTimeSlotListVisible] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [timeSlots, setTimeSlots] = useState([
    "08:00 AM",
    "10:00 AM",
    "02:00 PM",
    "04:00 PM",
  ]);

  const showDateList = () => {
    setDateListVisible(true);
  };

  const hideDateList = () => {
    setDateListVisible(false);
  };

  const handleSelectDate = (date: React.SetStateAction<string>) => {
    setSelectedDate(date);
    hideDateList();
  };

  const showSpecialtyList = () => {
    setSpecialtyListVisible(true);
  };

  const hideSpecialtyList = () => {
    setSpecialtyListVisible(false);
  };

  const handleSelectSpecialty = (specialty: React.SetStateAction<string>) => {
    setSelectedSpecialty(specialty);
    hideSpecialtyList();
  };

  const showTimeSlotList = () => {
    setTimeSlotListVisible(true);
  };

  const hideTimeSlotList = () => {
    setTimeSlotListVisible(false);
  };

  const handleSelectTimeSlot = (timeSlot: React.SetStateAction<string>) => {
    setSelectedTimeSlot(timeSlot);
    hideTimeSlotList();
  };

  const handleBookAppointment = () => {
    // Replace with actual logic to book appointment
    if (selectedDate && selectedSpecialty && selectedTimeSlot) {
      axios
        .post("http://localhost:8080/user/dangkykhambenh/datkham", {
          MaBN: user._id,
          TenKhoa: selectedSpecialty,
          NgayDat: selectedDate,
        })
        .then(function (res) {
          console.log(res.data);
          Alert.alert(
            "Đặt lịch khám thành công!",
            `Bạn đã đặt lịch khám vào ngày ${selectedDate}, chuyên khoa ${selectedSpecialty}, giờ ${selectedTimeSlot}.`
          );
        })
        .catch(function (err) {
          console.log(err);
        });
    } else {
      Alert.alert("Lỗi", "Vui lòng chọn đầy đủ thông tin để đặt lịch khám.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <MaterialIcons
            name="arrow-back"
            size={RFPercentage(4)}
            color="#FFF"
            style={styles.headerIcon}
          />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Đặt lịch khám</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <MaterialIcons
              name="account-circle"
              size={RFPercentage(7.5)}
              color="#22668E"
            />
            <View style={styles.textContainer}>
              <Text style={styles.infoTitle}>{user.Ten}</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <MaterialIcons
              name="location-on"
              size={RFPercentage(7)}
              color="#22668E"
            />
            <View style={styles.textContainer}>
              <Text style={styles.infoTitle}>Phòng Khám UMC</Text>
            </View>
          </View>
        </View>

        <View style={styles.datLichContainer}>
          <View style={styles.infoItem}>
            <Image
              source={require("../../../assets/Datlich/Date.jpg")}
              style={styles.iconImage}
            />
            <TouchableOpacity
              style={styles.inputContainer}
              onPress={showDateList}
            >
              <TextInput
                placeholder="Chọn ngày khám"
                style={styles.textInput}
                value={selectedDate}
                editable={false}
              />
              <MaterialIcons
                name="chevron-right"
                size={RFPercentage(3)}
                color="#22668E"
                style={styles.iconInInput}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.datLichContainer}>
          <View style={styles.infoItem}>
            <Image
              source={require("../../../assets/Datlich/Doctor.jpg")}
              style={styles.iconImage}
            />
            <TouchableOpacity
              style={styles.inputContainer}
              onPress={showSpecialtyList}
            >
              <TextInput
                placeholder="Chọn chuyên khoa"
                style={styles.textInput}
                value={selectedSpecialty} // Đã sửa để hiển thị chuỗi thay vì object
                editable={false}
              />
              <MaterialIcons
                name="chevron-right"
                size={RFPercentage(3)}
                color="#22668E"
                style={styles.iconInInput}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.datLichContainer}>
          <View style={styles.infoItem}>
            <MaterialIcons
              name="access-time"
              size={RFPercentage(7.5)}
              color="#22668E"
            />
            <TouchableOpacity
              style={styles.inputContainer}
              onPress={showTimeSlotList}
            >
              <TextInput
                placeholder="Chọn giờ khám"
                style={styles.textInput}
                value={selectedTimeSlot}
                editable={false}
              />
              <MaterialIcons
                name="chevron-right"
                size={RFPercentage(3)}
                color="#22668E"
                style={styles.iconInInput}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.bookButton}
          onPress={handleBookAppointment}
        >
          <Text style={styles.bookButtonText}>Đặt Khám</Text>
        </TouchableOpacity>
      </ScrollView>

      <DateSelectionModal
        visible={dateListVisible}
        dates={dates}
        onSelectDate={handleSelectDate}
        onClose={hideDateList}
      />

      <SpecialtySelectionModal
        visible={specialtyListVisible}
        specialties={specialties}
        onSelectSpecialty={handleSelectSpecialty}
        onClose={hideSpecialtyList}
      />

      <TimeSlotSelectionModal
        visible={timeSlotListVisible}
        timeSlots={timeSlots}
        onSelectTimeSlot={handleSelectTimeSlot}
        onClose={hideTimeSlotList}
      />
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
  infoContainer: {
    flexDirection: "column",
    backgroundColor: "rgba(196, 234, 250, 0.3)",
    paddingHorizontal: height * 0.02,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: height * 0.02,
  },
  textContainer: {
    borderBottomWidth: 2,
    borderBottomColor: "rgba(196, 234, 250, 2)",
    marginLeft: width * 0.05,
    width: width - 2 * height * 0.02 - RFPercentage(7.5) - width * 0.05,
  },
  infoTitle: {
    fontSize: RFPercentage(3),
    fontWeight: "500",
    color: "#22668E",
    paddingBottom: width * 0.05,
  },
  datLichContainer: {
    marginTop: height * 0.03,
    alignItems: "center",
    paddingHorizontal: height * 0.02,
  },
  iconImage: {
    width: RFPercentage(7),
    height: RFPercentage(7),
  },
  inputContainer: {
    flex: 1,
    marginLeft: width * 0.05,
    borderBottomWidth: 1,
    borderBottomColor: "#22668E",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textInput: {
    fontSize: RFPercentage(2.5),
    color: "#000",
    paddingVertical: height * 0.01,
    flex: 1,
  },
  iconInInput: {
    marginLeft: width * 0.02,
  },
  bookButton: {
    backgroundColor: "#22668E",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: width * 0.05,
    marginTop: height * 0.03,
    paddingVertical: height * 0.02,
    borderRadius: width * 0.05,
  },
  bookButtonText: {
    color: "#FFFFFF",
    fontSize: RFPercentage(2.5),
    fontWeight: "bold",
  },
});

export default DatlichNgayScreen;
