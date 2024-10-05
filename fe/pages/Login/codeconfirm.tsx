import React from "react";
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
} from "react-native";

const CodeconfirmScreen = () => {
  const handleUpdatePress = () => {
    Alert.alert("Cập nhật thành công");
  };
  const handleLoginPress = () => {
    Alert.alert("Chuyển trang");
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
        <View
          style={{
            marginTop: 70,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {" "}
            Nhập mã xác nhận
          </Text>
        </View>
        <View style={styles.bodycontainer}>
          <View style={styles.Infor}>
            <TextInput
              style={styles.Inputinfor}
              keyboardType="numeric"
              maxLength={1}
            />
            <TextInput
              style={styles.Inputinfor}
              keyboardType="numeric"
              maxLength={1}
            />
            <TextInput
              style={styles.Inputinfor}
              keyboardType="numeric"
              maxLength={1}
            />
            <TextInput
              style={styles.Inputinfor}
              keyboardType="numeric"
              maxLength={1}
            />
            <TextInput
              style={styles.Inputinfor}
              keyboardType="numeric"
              maxLength={1}
            />
            <TextInput
              style={styles.Inputinfor}
              keyboardType="numeric"
              maxLength={1}
            />
          </View>
          <View style={styles.btnLogin}>
            <TouchableOpacity
              style={styles.button2}
              onPress={handleUpdatePress}
            >
              <Text style={[styles.buttonText, { color: "#ffffff" }]}>
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

export default CodeconfirmScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#22668E",
  },
  background: {
    flex: 1,
    justifyContent: "center",
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
    paddingTop: 80,
    flexDirection: "row",
    width: "100%",
  },
  Inputinfor: {
    width: "16%",
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: "#B8CCD7",
    marginRight: 5,
    textAlign: "center",
  },
  buttonText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
  },
  btnLogin: {
    marginHorizontal: 15,
    height: 50,
    justifyContent: "center",
    marginVertical: 40,
  },
  button2: {
    backgroundColor: "#22668e",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: "100%",
    width: "104%",
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
  },
});
