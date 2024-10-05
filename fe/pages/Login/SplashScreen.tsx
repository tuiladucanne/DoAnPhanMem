import React from "react";
import { useWindowDimensions, StyleSheet, View, Image } from "react-native";

const SplashScreen = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View>
      <Image
        style={[{ width: width, height: height }]}
        source={require("../../assets/login&register/splash.png")}
      />
    </View>
  );
};

export default SplashScreen;
