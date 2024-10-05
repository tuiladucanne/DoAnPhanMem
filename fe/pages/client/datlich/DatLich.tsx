import React, { useContext } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import Header from "../../../components/Header";
import { RFPercentage } from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get("window");

import { UserContext } from "../../context/UserContext";

const DatLich = (props: any) => {
  const { user } = useContext(UserContext);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../../assets/login&register/background.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.headercontainer}>
          <Text style={styles.headerText}>Đặt lịch khám</Text>
        </View>

        <TouchableOpacity
          style={styles.DatlichDate}
          onPress={() => {
            props.navigation.navigate("naviTK", {
              screen: "DatKhamNgay",
            });
          }}
        >
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/Datlich/Date.jpg")}
              style={styles.buttonImage}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>Đặt lịch</Text>
            <Text style={styles.secondaryText}>Khám theo ngày</Text>
            <Text style={styles.descriptionText}>
              Đặt lịch khám bệnh theo ngày tại phòng khám UMC
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.DatlichBacSi}
          onPress={() => {
            props.navigation.navigate("naviTK", {
              screen: "DatKhamBS",
            });
          }}
        >
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/Datlich/Doctor.jpg")}
              style={styles.buttonImage}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>Đặt lịch</Text>
            <Text style={styles.secondaryText}>Khám theo Bác sĩ</Text>
            <Text style={styles.descriptionText}>
              Đặt lịch khám bệnh theo bác sĩ tại phòng khám UMC
            </Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  headercontainer: {
    position: "absolute",
    top: height * 0.2,
    width: width,
    backgroundColor: "#22668E",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  headerText: {
    fontSize: RFPercentage(3),
    fontWeight: "bold",
    color: "#fff",
  },
  DatlichDate: {
    position: "absolute",
    top: height * 0.3,
    left: (width - width * 0.9) / 2,
    width: width * 0.9,
    height: height * 0.2,
    backgroundColor: "#FFF",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "gray",
    padding: 20,
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  DatlichBacSi: {
    position: "absolute",
    top: height * 0.55,
    left: (width - width * 0.9) / 2,
    width: width * 0.9,
    height: height * 0.2,
    backgroundColor: "#FFF",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "gray",
    padding: 20,
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonImage: {
    width: "90%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 2,
    justifyContent: "center",
  },
  mainText: {
    fontSize: RFPercentage(2.5),
    color: "#22668E",
  },
  secondaryText: {
    fontSize: RFPercentage(3),
    fontWeight: "bold",
    color: "#22668E",
  },
  descriptionText: {
    fontSize: RFPercentage(1.5),
    color: "#808080",
  },
});

export default DatLich;
