import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import Toast from "react-native-toast-message";
import axios from "axios";

const RegisterScreen: React.FC = (props) => {
  const [selectedSex, setSelectedSex] = useState<string | null>(null);
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [fullNameError, setFullNameError] = useState<string>("");
  const [phoneNumberError, setPhoneNumberError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");

  const options = ["Nam", "Nữ"];

  function pickSex(sex: string) {
    setSelectedSex(sex);
  }

  const handleBackPress = () => {
    props.navigation.goBack();
  };

  const handleRegisterPress = async () => {
    let isValid = true;

    //ten cua nguoi dung
    if (fullName.length < 3) {
      setFullNameError("Họ và tên phải có ít nhất 3 ký tự");
      isValid = false;
    } else {
      setFullNameError("");
    }

    // if (phoneNumber.length < 10) {
    //   setPhoneNumberError("Số điện thoại phải có ít nhất 10 ký tự");
    //   isValid = false;
    // } else {
    //   setPhoneNumberError("");
    // }

    if (!email.includes("@")) {
      setEmailError("Email không hợp lệ");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (password.length < 6) {
      setPasswordError("Mật khẩu phải có ít nhất 6 ký tự");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Mật khẩu và xác nhận mật khẩu không khớp");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }

    if (isValid) {
      console.log("da nhan click");
      await axios
        .post("http://localhost:8080/user/dangky", {
          email: email,
          password: password,
          username: fullName,
        })
        .then(function (response) {
          console.log(response);
          Toast.show({
            type: "success",
            text1: "Đăng ký thành công",
          });
          setTimeout(() => {
            props.navigation.navigate("Login");
          }, 2000);
        })
        .catch(function (error) {
          console.log(error);
          Toast.show({
            type: "error",
            text1: "Lỗi hệ thống",
          });
        });
    }
  };

  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View
          style={{
            paddingHorizontal: 20,
            transform: [{ scaleY: 1 }],
            paddingTop: "5%",
          }}
        >
          <FontAwesome5
            name="arrow-left"
            size={20}
            color="#000"
            onPress={handleBackPress}
          />
        </View>
        <View style={styles.headercontainer}>
          <ImageBackground
            source={require("../../assets/logo.png")}
            style={styles.logo}
            imageStyle={styles.imglogo}
          />
          <Text style={styles.textlogo}>Đăng Ký Tài Khoản</Text>
        </View>
        <View style={styles.bodycontainer}>
          <View style={styles.Infor}>
            <TextInput
              style={[
                styles.Inputinfor,
                fullNameError ? { borderColor: "red" } : {},
              ]}
              placeholder="Nhập họ và tên"
              maxLength={50}
              value={fullName}
              onChangeText={setFullName}
            />
            <View style={styles.errorContainer}>
              {fullNameError ? (
                <Text style={styles.errorText}>{fullNameError}</Text>
              ) : null}
            </View>
            <TextInput
              style={[
                styles.Inputinfor,
                emailError ? { borderColor: "red" } : {},
              ]}
              placeholder="Nhập Email"
              maxLength={50}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <View style={styles.errorContainer}>
              {emailError ? (
                <Text style={styles.errorText}>{emailError}</Text>
              ) : null}
            </View>

            <TextInput
              style={[
                styles.Inputinfor,
                passwordError ? { borderColor: "red" } : {},
              ]}
              placeholder="Nhập mật khẩu"
              secureTextEntry
              maxLength={20}
              value={password}
              onChangeText={setPassword}
            />
            <View style={styles.errorContainer}>
              {passwordError ? (
                <Text style={styles.errorText}>{passwordError}</Text>
              ) : null}
            </View>

            <TextInput
              style={[
                styles.Inputinfor,
                confirmPasswordError ? { borderColor: "red" } : {},
              ]}
              placeholder="Nhập lại mật khẩu"
              secureTextEntry
              maxLength={20}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <View style={styles.errorContainer}>
              {confirmPasswordError ? (
                <Text style={styles.errorText}>{confirmPasswordError}</Text>
              ) : null}
            </View>
            <View style={styles.btnRegister}>
              <TouchableOpacity
                style={styles.button1}
                onPress={handleRegisterPress}
              >
                <Text style={styles.buttonText}>Đăng Ký</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  headercontainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 0,
  },
  logo: {
    height: 150,
    width: 150,
    marginBottom: 10,
  },
  imglogo: {
    borderRadius: 125,
    overflow: "hidden",
  },
  textlogo: {
    color: "#22668E",
    fontSize: 25,
    fontWeight: "bold",
    paddingTop: "5%",
  },
  bodycontainer: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: "10%",
  },
  Infor: {
    paddingHorizontal: 15,
  },
  Inputinfor: {
    height: 40,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: 0,
    borderColor: "gray",
    borderRadius: 15,
    fontSize: 16,
    marginVertical: 5,
    backgroundColor: "#B8CCD7",
  },
  CheckBoxContainer: {
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 5,
    paddingBottom: "2%",
  },
  Sex: {
    flexDirection: "row",
    alignItems: "center",
  },
  selectedCheckbox: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
  },
  checkbox: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: "#B8CCD7",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  Option: {
    fontSize: 16,
    marginLeft: 5,
  },
  btnRegister: {
    height: 50,
    justifyContent: "center",
  },
  button1: {
    backgroundColor: "#22668E",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginHorizontal: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  errorContainer: {
    height: 20, // Chiều cao cố định để không thay đổi kích thước
  },
  errorText: {
    color: "red",
  },
});
