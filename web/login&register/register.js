import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  Alert,
} from "react-native";
import axiosInstance from "../network/axiosInstance"; // Đảm bảo bạn đã tạo axiosInstance
import Swal from 'sweetalert2'
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
const navigation = useNavigation(); 
  const handleRegister = async () => {
    const isValid = validate();

    if (isValid) {
      try {
        const response = await axiosInstance.post("/user/dangky", {
          username: name,
          email,
          password,
          role: "KH", // Hoặc role tùy thuộc vào logic bạn muốn triển khai
        });

        if (response.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Đăng ký thành công',
            showConfirmButton: false,
            timer: 1500
          })
        }
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Đã có lỗi xảy ra khi đăng ký !Vui lòng thử lại sau',
        })
      }
    }
  };

  const validate = () => {
    let isValid = true;
    let errors = {};

    if (name.length < 3) {
      errors.name = "Tên phải ít nhất 3 ký tự";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = "Email không đúng định dạng";
      isValid = false;
    }

    if (password.length < 6) {
      errors.password = "Mật khẩu phải đủ 6 ký tự";
      isValid = false;
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Mật khẩu không trùng khớp";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  return (
    <ImageBackground
      source={require("../assets/background_img.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.leftContainer}>
          <View style={styles.logoContainer}>
            <Image source={require("../assets/logo6.png")} style={styles.logo} />
            <Text style={styles.companyName}>VOV</Text>
          </View>

          <Text style={styles.registerTitle}>Vui lòng tạo tài khoản</Text>

          <View style={styles.registerBox}>
            <Text style={styles.formTitle}>Đăng ký</Text>

            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Nhập tên (ít nhất 3 ký tự)"
                  onChangeText={setName}
                  value={name}
                />
                {errors.name && (
                  <Text style={styles.errorText}>{errors.name}</Text>
                )}
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Nhập email"
                  onChangeText={setEmail}
                  value={email}
                />
                {errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Nhập mật khẩu"
                  secureTextEntry={true}
                  onChangeText={setPassword}
                  value={password}
                />
                {errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Nhập lại mật khẩu"
                  secureTextEntry={true}
                  onChangeText={setConfirmPassword}
                  value={confirmPassword}
                />
                {errors.confirmPassword && (
                  <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                )}
              </View>

              <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Đăng ký</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={()=>{
                navigation.navigate('Login')
              }}>
                <Text style={styles.buttonText}>

                  Đã có tài khoản? Đăng nhập
                </Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>

        <View style={styles.rightContainer}>
          <Image source={require("../assets/doctor.png")} style={styles.image} />
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
  registerTitle: {
    marginLeft: "15%",
    marginTop: "2%",
    fontSize: 33,
    fontWeight: "bold",
    marginBottom: "5%",
    textAlign: "left",
    color: "black",
  },
  registerBox: {
    marginLeft: "25%",
    backgroundColor: "#22668E",
    padding: "5%",
    borderRadius: 20,
    elevation: 5,
    width: "50%",
    alignItems: "center",
    height: "60%",
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
    paddingVertical: 10,
    borderRadius: 10,
  },
  errorText: {
    color: "red",
    marginTop: 5,
    textAlign: "left",
    alignSelf: "flex-start",
    marginLeft: 10,
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
  image: {
    width: "80%",
    height: "70%",
  },
});

export default RegisterScreen;
