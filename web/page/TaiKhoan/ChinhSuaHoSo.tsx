import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axiosInstance from "../../network/axiosInstance";
import Swal from "sweetalert2";

const ChinhSuaHoSo = () => {
  const [formData, setFormData] = React.useState({
    Email: "",
    Ten: "",
    NgaySinh: "",
    DiaChi: "",
    SDT: "",
    GioiTinh: "",
    CCCD: "",
  });

  // Function to handle input changes
  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const getProfile = async () => {
    const id = localStorage.getItem("id");
    const response = await axiosInstance.get(`user/tt?id=${localStorage.getItem("accountId")}`);
    if(response?.data?.data?.Email){
      setFormData(response.data.data);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  // Function to handle form submission
  const handleSave = async () => {
    try {
      // Validate email as it's required
      if (!formData.Email) {
        Alert.alert("Lỗi", "Vui lòng nhập email");
        return;
      }
      const id = localStorage.getItem("id");
      // Make API call
      const response = await axiosInstance.put(
        `user/capnhapthongtin?id=${id}`,
        formData
      );

      if (response.status === 200) {
        // use swal instead of alert
        Swal.fire({
          title: "Thành công",
          text: "Cập nhật thông tin thành công",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Lỗi",
        text: "Cập nhật thông tin thất bại",
        icon: "error",
        confirmButtonText: "OK",
      }); // use swal instead of alert
    }
  };
  const navigation = useNavigation();
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
        </View>
        <View style={styles.leftContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/logo6.png")}
              style={styles.logo}
            />
            <Text style={styles.companyName}>VOV</Text>
          </View>
          <Text style={styles.pageTitle}>Chỉnh sửa hồ sơ</Text>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                value={formData.Email}
                onChangeText={(text) => handleChange("Email", text)}
                placeholder="Nhập email"
                placeholderTextColor="#A9A9A9"
                keyboardType="email-address"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Họ và tên</Text>
              <TextInput
                style={styles.input}
                value={formData.Ten}
                onChangeText={(text) => handleChange("Ten", text)}
                placeholder="Nhập họ và tên"
                placeholderTextColor="#A9A9A9"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>CCCD</Text>
              <TextInput
                style={styles.input}
                value={formData.CCCD}
                onChangeText={(text) => handleChange("CCCD", text)}
                placeholder="Nhập số CCCD"
                placeholderTextColor="#A9A9A9"
                keyboardType="numeric"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Giới tính</Text>
              <Picker
                selectedValue={formData.GioiTinh}
                style={styles.picker}
                onValueChange={(itemValue) =>
                  handleChange("GioiTinh", itemValue)
                }
              >
                <Picker.Item label="Chọn giới tính" value="" />
                <Picker.Item label="Nam" value="Nam" />
                <Picker.Item label="Nữ" value="Nữ" />
              </Picker>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Ngày sinh</Text>
              <TextInput
                style={styles.input}
                value={formData.NgaySinh}
                onChangeText={(text) => handleChange("NgaySinh", text)}
                placeholder="DD/MM/YYYY"
                placeholderTextColor="#A9A9A9"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Địa chỉ</Text>
              <TextInput
                style={styles.input}
                value={formData.DiaChi}
                onChangeText={(text) => handleChange("DiaChi", text)}
                placeholder="Nhập địa chỉ"
                placeholderTextColor="#A9A9A9"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Số điện thoại</Text>
              <TextInput
                style={styles.input}
                value={formData.SDT}
                onChangeText={(text) => handleChange("SDT", text)}
                placeholder="Nhập số điện thoại"
                placeholderTextColor="#A9A9A9"
                keyboardType="phone-pad"
              />
            </View>

            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Lưu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0f2ff",
    width: "100%",
  },
  leftContainer: {
    flex: 1,
    padding: "5%",
    justifyContent: "flex-start",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "5%",
  },
  logo: {
    width: 100,
    height: 100,
    aspectRatio: 1,
    marginRight: "2%",
  },
  companyName: {
    fontSize: 65,
    fontWeight: "bold",
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "3%",
  },
  formContainer: {
    alignItems: "center",
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    width: "30%",
    textAlign: "left",
    color: "#000",
  },
  input: {
    height: 60,
    width: "70%",
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    color: "black",
  },
  picker: {
    height: 60,
    width: "70%",
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    color: "black",
  },
  saveButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "30%",
    backgroundColor: "#22668E",
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 20,
    alignSelf: "center",
  },
  saveButtonText: {
    fontSize: 18,
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default ChinhSuaHoSo;
