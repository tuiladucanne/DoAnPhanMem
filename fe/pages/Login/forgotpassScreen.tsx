import React, { useState, useEffect } from "react";
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
import axios from "axios";
import Toast from "react-native-toast-message";
const ForgotScreen = (props: { navigation: { goBack: () => void } }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nhaplai, setNhaplai] = useState("");
  const handleUpdatePress = () => {
    axios
      .post("http://localhost:8080/user/laylaimk", {
        email: email,
        matkhau: password,
      })
      .then(function (res) {
        props.navigation.goBack();
        Toast.show({
          type: "success",
          text1: "Thông báo",
          text2: "Đổi mật khẩu thành công!",
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  const handleLoginPress = () => {
    props.navigation.goBack();
  };
  const handleBackPress = () => {
    props.navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.Container}>
      <ImageBackground
        source={require("../../assets/login&register/background.png")}
        style={styles.background}
        resizeMode="cover"
      >
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
            color="#ffffff"
            onPress={handleBackPress}
          />
        </View>
        <View style={styles.headercontainer}>
          <ImageBackground
            source={require("../../assets/logo.png")}
            style={styles.logo}
            imageStyle={styles.imglogo}
          />
          <Text style={styles.textlogo}>UCM</Text>
        </View>

        <View style={styles.bodycontainer}>
          <View
            style={{
              marginTop: "5%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#22668E" }}
            >
              {" "}
              Quên Mật Khẩu
            </Text>
          </View>
          <View style={styles.Infor}>
            <TextInput
              value={email}
              onChangeText={setEmail}
              style={styles.Inputinfor}
              placeholder="Nhập số điện thoại hoặc email "
            />
            <TextInput
              value={password}
              onChangeText={setPassword}
              style={styles.Inputpass}
              placeholder="Mật khẩu"
            />
            <TextInput
              value={nhaplai}
              onChangeText={setNhaplai}
              style={styles.Inputpass2}
              placeholder="Nhập lại mật khẩu"
            />
          </View>
          <View style={styles.btnLogin}>
            <TouchableOpacity
              style={styles.button2}
              onPress={handleUpdatePress}
            >
              <Text style={[styles.buttonText, { color: "#fff" }]}>
                Cập nhật
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.back}>
            <Text> Quay lại màn hình</Text>
            <TouchableOpacity onPress={handleLoginPress}>
              <Text style={styles.loginlink}> Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default ForgotScreen;
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
    marginHorizontal: 15,
    flex: 1,
  },
  Infor: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  Inputinfor: {
    height: 50,
    paddingHorizontal: 15,
    borderWidth: 0,
    borderColor: "gray",
    borderRadius: 15,
    fontSize: 16,
    marginVertical: 10,
    backgroundColor: "#B8CCD7",
  },
  Inputpass: {
    height: 50,
    paddingHorizontal: 15,
    borderWidth: 0,
    borderColor: "gray",
    borderRadius: 15,
    fontSize: 16,
    marginVertical: 10,
    backgroundColor: "#B8CCD7",
  },
  Inputpass2: {
    height: 50,
    paddingHorizontal: 15,
    borderWidth: 0,
    borderColor: "gray",
    borderRadius: 15,
    fontSize: 16,
    marginVertical: 10,
    backgroundColor: "#B8CCD7",
  },

  buttonText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
  },
  btnLogin: {
    height: 50,
    justifyContent: "center",
    marginTop: "5%",
  },
  button2: {
    backgroundColor: "#22668e",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: "100%",
    marginHorizontal: 15,
  },
  back: {
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    flexDirection: "row",
  },
  loginlink: {
    fontWeight: "bold",
    color: "#22668e",
    textDecorationLine: "underline",
    marginBottom: "10%",
  },
});
