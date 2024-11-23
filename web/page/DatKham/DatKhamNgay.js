import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import axiosInstance from "../../network/axiosInstance";
import Swal from "sweetalert2";

const { width } = Dimensions.get("window");

const DatKhamNgayScreen = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedHospital, setSelectedHospital] = useState("");
  const [doctorsData, setDoctors] = useState([]);
  const [hospitalsData, setHospitals] = useState([]);
  const [formData, setFormData] = useState({});

  const [availableDates, setAvailableDates] = useState("");
  const availableTimes = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ];

 

  const fetchData = async () => {
    try {
      const [doctorsResponse, hospitalsResponse] = await Promise.all([
        axiosInstance.get("/bv/bs"),
        axiosInstance.get("/bv/bv"),
      ]);

      setDoctors(doctorsResponse.data.data);
      setHospitals(hospitalsResponse.data.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Lỗi",
        text: "Không thể tải dữ liệu. Vui lòng thử lại sau.",
      });
    }
  };
  useEffect(() => {
    fetchData();
    getProfile();
  }, []);
  const getProfile = async () => {
    try {
      const response = await axiosInstance.get(`user/tt?id=${localStorage.getItem("accountId")}`);
      setFormData(response?.data?.data);

      if (!response?.data?.data?.Ten) {
        Swal.fire({
          icon: "warning",
          title: "Thông báo",
          text: "Vui lòng cập nhật thông tin cá nhân trước khi đặt lịch khám",
          showCancelButton: true,
          confirmButtonText: "Cập nhật thông tin",
          cancelButtonText: "Đóng",
        }).then((result) => {
          if (result.isConfirmed) {
            navigation.navigate("ProfileScreen"); // Navigate to profile update screen
          }
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Lỗi",
        text: "Không thể tải thông tin cá nhân. Vui lòng thử lại sau.",
      });
    }
  };

  const handleBooking = async () => {
    if (!formData?.Ten) {
      Swal.fire({
        icon: "warning",
        title: "Thông báo",
        text: "Vui lòng cập nhật thông tin cá nhân trước khi đặt lịch khám",
      });
      return;
    }

    if (
      !selectedHospital ||
      !selectedDoctor ||
      !selectedDate ||
      !selectedTime
    ) {
      Swal.fire({
        icon: "warning",
        title: "Thông báo",
        text: "Vui lòng chọn đầy đủ thông tin đặt khám",
      });
      return;
    }

    try {
      const bookingData = {
        benhVienId: selectedHospital,
        bacSiId: selectedDoctor,
        ngayKham: selectedDate,
        gioKham: selectedTime,
        userId: localStorage.getItem("accountId"),
      };

      await axiosInstance.post("/user/dangkykhambenh/datkham", bookingData);

      Swal.fire({
        icon: "success",
        title: "Thành công",
        text: "Đặt lịch khám thành công!",
        confirmButtonText: "Xem lịch khám",
        showCancelButton: true,
        cancelButtonText: "Đóng",
      }).then((result) => {
        if (result.isConfirmed) {
          navigation.navigate("Phiếu Khám"); // Navigate to appointments list
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Lỗi",
        text: "Đặt lịch khám thất bại. Vui lòng thử lại sau.",
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <Image source={require("../../assets/logo6.png")} style={styles.logo} />
        <Text style={styles.headerText}>VOV</Text>
      </View>

      <Text style={styles.pageTitle}>Đặt lịch khám theo ngày</Text>

      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Ionicons name="person-circle-outline" size={28} color="#1669A2" />
          <TextInput
            style={styles.input}
            value={formData?.Ten || ""}
            editable={false}
            placeholder="Chưa cập nhật thông tin"
          />
        </View>

        <View style={styles.inputGroup}>
          <Ionicons name="location-outline" size={28} color="#1669A2" />
          <Picker
            selectedValue={selectedHospital}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedHospital(itemValue)}
          >
            <Picker.Item label="Chọn bệnh viện" value="" />
            {hospitalsData.map((hospital) => (
              <Picker.Item
                key={hospital._id}
                label={hospital.tenBenhVien}
                value={hospital._id}
              />
            ))}
          </Picker>
        </View>

        <View style={styles.inputGroup}>
          <Ionicons name="person-outline" size={28} color="#1669A2" />
          <Picker
            selectedValue={selectedDoctor}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedDoctor(itemValue)}
          >
            <Picker.Item label="Chọn bác sĩ" value="" />
            {doctorsData
              .map((doctor) => (
                <Picker.Item
                  key={doctor._id}
                  label={`${doctor.bangCap} ${doctor.tenBacSi} - ${doctor.chuyenKhoa}`}
                  value={doctor._id}
                />
              ))}
          </Picker>
        </View>

        <View style={[styles.inputGroup,{
          flexDirection:'column',
          justifyContent:'start',
          alignItems:'start',
        }]}>

          <Text style={{
            fontSize: 18,
            color: "#333",
            marginBottom: 5,
            fontWeight: "bold",
          }}>Chọn ngày khám:</Text>
          <TextInput
            onChange={(e) => setSelectedDate(e.target.value)}
            style={{
              width: "100%",
              fontSize: 18,
              color: "#333",
              placeholderTextColor: "gray",
              paddingLeft: 10,
              borderBottomWidth: 1,
              borderColor: "#ccc",
            }}
            value={selectedDate}
            placeholder="Chọn ngày khám.. (DD/MM/YYYY)"
          />
        </View>

        <View style={styles.inputGroup}>
          <Ionicons name="time-outline" size={28} color="#1669A2" />
          <Picker
            selectedValue={selectedTime}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedTime(itemValue)}
          >
            <Picker.Item label="Chọn giờ khám" value="" />
            {availableTimes.map((time, index) => (
              <Picker.Item label={time} value={time} key={index} />
            ))}
          </Picker>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleBooking}>
          <Text style={styles.buttonText}>Đặt Khám</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0f2ff",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    padding: 20,
  },
  logo: {
    width: width * 0.08,
    height: width * 0.08,
    marginRight: 10,
  },
  headerText: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    color: "#000",
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginVertical: 20,
  },
  formContainer: {
    width: "50%",
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: "center",
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
    paddingBottom: 5,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: "#333",
    paddingLeft: 10,
  },
  picker: {
    flex: 1,
    height: 50,
    fontSize: 18,
  },
  button: {
    backgroundColor: "#1669A2",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default DatKhamNgayScreen;
