import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Platform,
} from "react-native";

const Header = ({ content }) => {
  return (
    <View style={styles.Header}>
      <Text style={styles.headerText}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    backgroundColor: "#22668E",
    height: "10%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 20 : 0, // Điều chỉnh cho iOS
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Header;
