import React, { useState, useContext } from "react";
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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Toast from "react-native-toast-message";
import axios from "axios";

import { UserContext } from "../context/UserContext";

const LoginScreen = (props: {
  navigation: {
    replace(arg0: string): unknown;
    navigate: (arg0: string) => void;
  };
}) => {
  const { setUser } = useContext(UserContext);

  console.log(props);

  const handleRegisterPress = () => {
    props.navigation.navigate("Registor");
  };

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLoginPress = async () => {
    await axios
      .post("http://localhost:8080/user/dangnhap", {
        email: email,
        password: password,
        role: "KH",
      })
      .then(function (response) {
        Toast.show({
          type: "success",
          text1: "Thông báo",
          text2: "Đăng nhập thành công",
        });
        const userData = response.data.data;
        setUser(userData);
        props.navigation.replace("InApp");
      })
      .catch(function (error) {
        console.log(error);
        Toast.show({
          type: "error",
          text1: "Không tìm thấy tài khoản của bạn",
        });
      });
  };
  const handleforgotPassPress = () => {
    props.navigation.navigate("ForgotPass");
  };
  const handleBackPress = () => {
    Alert.alert("Chuyển trang");
  };

  return (
    <SafeAreaView style={styles.Container}>
      <ImageBackground
        source={require("../../assets/login&register/background.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.headercontainer}>
          <ImageBackground
            source={require("../../assets/logo.png")}
            style={styles.logo}
            imageStyle={styles.imglogo}
          />
          <Text style={styles.textlogo}>UCM</Text>
        </View>
        <View style={styles.bodycontainer}>
          <View style={styles.Infor}>
            <TextInput
              style={styles.Inputinfor}
              value={email}
              onChangeText={setEmail}
              placeholder="Nhập email "
            />
            <TextInput
              style={styles.Inputinfor}
              value={password}
              onChangeText={setPassword}
              placeholder="Mật khẩu"
            />
          </View>
        </View>
        <View style={styles.btnLogin}>
          <TouchableOpacity style={styles.button2} onPress={handleLoginPress}>
            <Text style={[styles.buttonText, { color: "#ffffff" }]}>
              Đăng Nhập
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Account}>
          <Text>Bạn đã có tài khoản?</Text>
        </View>
        <View style={styles.btnRegister}>
          <TouchableOpacity
            style={styles.button1}
            onPress={handleRegisterPress}
          >
            <Text style={styles.buttonText}>Đăng Ký</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fogetPass}>
          <TouchableOpacity onPress={handleforgotPassPress}>
            <Text style={styles.fogetPassText}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#22668E",
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  headercontainer: {
    height: "35%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 150,
    width: 150,
  },
  imglogo: {
    borderRadius: 125,
    overflow: "hidden",
  },
  textlogo: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
  },
  bodycontainer: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: "15%",
  },
  Infor: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  Inputinfor: {
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 0,
    borderColor: "gray",
    borderRadius: 15,
    fontSize: 16,
    marginVertical: 10,
    backgroundColor: "#B8CCD7",
  },
  btnRegister: {
    marginHorizontal: 15,
    height: 50,
    justifyContent: "center",
    marginVertical: 10,
  },
  button1: {
    backgroundColor: "#B8CCD7",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginHorizontal: 15,
  },
  buttonText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
  },
  Account: {
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: "Baclk",
  },
  btnLogin: {
    marginHorizontal: 15,
    height: 50,
    justifyContent: "center",
    marginVertical: "5%",
  },
  button2: {
    backgroundColor: "#22668e",
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: "100%",
    marginHorizontal: 15,
  },
  fogetPass: {
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  fogetPassText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#22668E",
    textDecorationLine: "underline",
    marginBottom: "5%",
  },
});
