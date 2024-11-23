import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
} from "react-native";
import Swal from "sweetalert2";
import axiosInstance from "../network/axiosInstance";
import { hideLoading, showLoading } from "../Loading";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      // Fake API call (replace with your actual API endpoint)
      const response = await axiosInstance.post("/user/dangnhap", {
        email: username,
        password: password,
        role: "KH",
      });
      const data = await response.data.data._id;
      localStorage.setItem("id", data);
      localStorage.setItem("accountId", response.data.data.accountId);
      Swal.fire({
        icon: "success",
        title: "Đăng nhập thành công",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigation.navigate("AppNavigator");
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Lỗi hệ thống",
        text: "Tên đăng nhập hoặc mật khẩu không đúng!",
        showConfirmButton: true,
      });
    } finally {
    }
  };

  const handleForgotPassword = () => {
    Swal.fire({
      icon: "info",
      title: "Quên mật khẩu",
      text: "Vui lòng liên hệ admin để đặt lại mật khẩu!",
    });
  };

  return (
    <ImageBackground
      source={require("../assets/background_img.png")} // Replace with your background image
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.leftContainer}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/logo6.png")}
              style={styles.logo}
            />
            <Text style={styles.companyName}>VOV</Text>
          </View>
          <Text style={styles.loginTitle}>Vui lòng đăng nhập</Text>
          <View style={styles.loginBox}>
            <Text style={styles.formTitle}>Đăng nhập</Text>
            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Nhập tên đăng nhập"
                  onChangeText={setUsername}
                  value={username}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Nhập mật khẩu"
                  secureTextEntry={true}
                  onChangeText={setPassword}
                  value={password}
                />
              </View>
              <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Register");
                }}
              >
                <Text style={styles.forgotPassword}>
                  Chưa có tài khoản? Đăng ký ngay!
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Đăng nhập</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <Image
            source={require("../assets/doctor.png")}
            style={styles.image}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },
  leftContainer: {
    flex: 1,
    padding: "5%",
    justifyContent: "flex-start",
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "5%",
  },
  logo: {
    width: 200,
    height: 200,
    marginRight: "2%",
  },
  companyName: {
    fontSize: 75,
    fontWeight: "bold",
  },
  loginTitle: {
    marginLeft: "15%",
    marginTop: "2%",
    fontSize: 33,
    fontWeight: "bold",
    marginBottom: "5%",
    textAlign: "left",
    color: "black",
  },
  loginBox: {
    marginLeft: "25%",
    backgroundColor: "#22668E",
    padding: "5%",
    borderRadius: 20,
    elevation: 5,
    width: "50%",
    alignItems: "center",
    height: "50%",
  },
  formTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: "5%",
    textAlign: "center",
    color: "#fff",
  },
  form: {
    width: "100%",
    alignItems: "center",
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    marginBottom: "5%",
    width: "90%",
    borderRadius: 10,
  },
  input: {
    color: "black",
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "white",
    padding: "5%",
    borderRadius: 5,
    alignItems: "center",
    marginTop: "5%",
  },
  buttonText: {
    fontSize: 18,
    color: "black",
  },
  forgotPassword: {
    textDecorationLine: "underline",
    color: "#fff",
    marginVertical: "5%",
  },
  image: {
    width: "80%",
    height: "70%",
  },
});

export default LoginScreen;
