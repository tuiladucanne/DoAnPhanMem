
import React, { useState } from "react";
import { Text, View, SafeAreaView, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native";


const LoginScreen = () => {
 

  const handleRegisterPress = () => {
    Alert.alert('Đăng ký thành công');
  };
  const handleLoginPress = () => {
   Alert.alert('Chuyển trang');
 };
 const handleforgotPassPress = () => {
   Alert.alert('Chuyển trang');
 };

  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headercontainer}>
          <ImageBackground
            source={require('../../fe/assets/logo6 (1).png')}
            style={styles.logo}
            imageStyle={styles.imglogo}
          />
          <Text style={styles.textlogo}>UCM</Text>
        </View>
        <View style={styles.bodycontainer}>
          <View style={styles.Infor}>
            <TextInput style={styles.Inputinfor} placeholder="Nhập số điện thoại " />
            <TextInput style={styles.Inputinfor} placeholder="Mật khẩu" />
          </View>
        </View>
        <View style={styles.btnLogin}>
          <TouchableOpacity style={styles.button2} onPress={handleLoginPress}>
          <Text style={[styles.buttonText, { color: '#ffffff' }]}>Đăng Nhập</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Account}><Text>Bạn đã có tài khoản?</Text></View>
        <View style={styles.btnRegister}>
          <TouchableOpacity style={styles.button1} onPress={handleRegisterPress}>
            <Text style={styles.buttonText}>Đăng Ký</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fogetPass}>
            <TouchableOpacity onPress={handleforgotPassPress}>
                <Text style={styles.fogetPassText}>Quên mật khẩu?</Text>
           </TouchableOpacity>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  headercontainer: {
    backgroundColor: '#22668e',
    height: 250,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 150,
    width: 150,
  },
  imglogo: {
    borderRadius: 125,
    overflow: 'hidden',
  },
  textlogo: {
    color: '#ffffff',
    paddingTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  bodycontainer: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 20,
  },
  Infor: {
    paddingHorizontal: 15,
    paddingTop:20,
  },
  Inputinfor: {
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    fontSize: 16,
    marginVertical: 10,
    backgroundColor: '#B8CCD7',
  },
 
  btnRegister: {
    marginHorizontal: 15,
    height: 50,
    justifyContent: 'center',
    marginVertical: 10,
  },
  button1: {
    backgroundColor: '#B8CCD7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    marginHorizontal: 15,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  Account:{
   justifyContent:'center',
   alignItems:'center',
   fontWeight:"bold",
   color:'Baclk'
  },
  btnLogin:{
   marginHorizontal: 15,
    height: 50,
    justifyContent: 'center',
    marginVertical: 10,
 },
 button2:{
   backgroundColor: '#22668e',
   paddingVertical: 10,
   paddingHorizontal: 20,
   justifyContent:'center',
   alignItems:'center',
   borderRadius: 10,
   height: '100%',
   marginHorizontal: 15,
 },
 fogetPass:{
   paddingHorizontal: 20,
   justifyContent: 'center',
   alignItems:'center',
 },
 fogetPassText:{
   fontSize:18,
   fontWeight: 'bold',
   color: '#rgb(0, 0, 255)',
   textDecorationLine:'underline',
 },
});