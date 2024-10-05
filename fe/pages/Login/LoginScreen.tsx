import React from "react";
import { Alert, SafeAreaView, ImageBackground, View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./login";

export const LoginScreen = () => {
  const handleRegisterPress = () => {
    Alert.alert("Đăng ký thành công");
  };
  const handleLoginPress = () => {
    Alert.alert("Chuyển trang");
  };
  const handleforgotPassPress = () => {
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
            imageStyle={styles.imglogo} />
          <Text style={styles.textlogo}>UCM</Text>
        </View>
        <View style={styles.bodycontainer}>
          <View style={styles.Infor}>
            <TextInput
              style={styles.Inputinfor}
              placeholder="Nhập số điện thoại " />
            <TextInput style={styles.Inputinfor} placeholder="Mật khẩu" />
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
