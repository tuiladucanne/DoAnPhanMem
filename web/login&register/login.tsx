import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image, ImageBackground } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login pressed');
    // Add your login logic here
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password pressed');
    // Add your forgot password logic here
  };

  return (
    <ImageBackground 
      source={require('../assets/background_img.png')} // Replace with your background image
      style={styles.background}
      resizeMode="cover" // Ensures the image covers the entire background
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.leftContainer}>
          <View style={styles.logoContainer}>
            <Image source={require('../assets/logo6.png')} style={styles.logo} />
            <Text style={styles.companyName}>VOV</Text>
          </View>
          
          <Text style={styles.loginTitle}>Vui lòng đăng nhập</Text> {/* Title outside the login box */}
          
          <View style={styles.loginBox}>
            <Text style={styles.formTitle}>Đăng nhập</Text> {/* New title inside the login box */}
            
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
                <Text style={styles.forgotPassword}>Quên mật khẩu?</Text> {/* Underlined button */}
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Đăng nhập</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <Image source={require('../assets/doctor.png')} style={styles.image} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  leftContainer: {
    flex: 1,
    padding: '5%', // Use percentage for padding
    justifyContent: 'flex-start',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '5%', // Use percentage for margin
  },
  logo: {
    width: 200, // Use percentage for logo size
    height: 200, // Use percentage for logo size
    marginRight: '2%', // Use percentage for margin
  },
  companyName: {
    fontSize: 75, // Font size can remain fixed
    fontWeight: 'bold',
  },
  loginTitle: {
    marginLeft:'15%',
    marginTop: '2%', // Use percentage for margin
    fontSize: 33, // Size for the login title
    fontWeight: 'bold',
    marginBottom: '5%', // Spacing below the title
    textAlign: 'left',
    color: 'black',
  },
  loginBox: {
    marginLeft :'25%',
    backgroundColor: '#22668E',
    padding: '5%', // Use percentage for padding
    borderRadius: 20,
    elevation: 5,
    width: '50%', // Use percentage for width
    alignItems: 'center',
    height: '50%',
  },
  formTitle: {  
    fontSize: 24, // Size for the form title
    fontWeight: 'bold',
    marginBottom: '5%', // Spacing below the form title
    textAlign: 'center',
    color: '#fff',
 },
  form: {
    width: '100%', // Use percentage for width
    alignItems: 'center',
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    marginBottom: '5%', // Use percentage for margin
    width: '90%', // Use percentage for width
    borderRadius: 10,
  },
  input: {
    color: 'black',
    height: 40, // Height can remain fixed
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10, // Padding can remain fixed
    paddingVertical: 10, // Padding can remain fixed
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'white',
    padding: '5%', // Use percentage for padding
    borderRadius: 5,
    alignItems: 'center',
    marginTop: '5%', // Use percentage for margin
    color: '#fff',
  },
  buttonText: {
    fontSize: 18, // Font size can remain fixed
    color: 'black',
  },
  forgotPassword: {
    textDecorationLine: 'underline', // Underline the text
    color: '#fff',
    marginVertical: '5%', // Use percentage for margin
  },
  image: {
    width: '80%', // Use percentage for image size
    height: '70%', // Use percentage for image size
  },
});

export default LoginScreen;