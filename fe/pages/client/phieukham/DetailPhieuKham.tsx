import React, { useContext } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const { width, height } = Dimensions.get("window");

const DetailPhieuKham = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.Bodycontainer}>
          <View style={styles.LogoUMC}>
            <Image
              source={require("../../../assets/logo.png")}
              style={styles.image}
            />
            <View style={styles.textContainer}>
              <Text style={{ fontSize: RFPercentage(2.5), fontWeight: "bold" }}>
                PHÒNG KHÁM UMC
              </Text>
              <Text style={{ fontSize: RFPercentage(1.5), marginTop: 3 }}>
                Chất lượng - Cảm thông - Vững tiến
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: width * 0.08,
            }}
          >
            <Text
              style={{
                fontSize: RFPercentage(3.5),
                fontWeight: "bold",
                marginHorizontal: 15,
              }}
            >
              PHIẾU KHÁM BỆNH
            </Text>
            <Text style={{ fontSize: RFPercentage(3), marginTop: 8 }}>
              (Mã Phiếu: <Text style={styles.maphieu}>00000</Text>)
            </Text>
          </View>
          <View style={styles.maQR}>
            <Image
              source={require("../../../assets/Home/AI.png")}
              style={styles.imageQR}
            />
          </View>
          <View style={styles.speciality}>
            <Text style={styles.phongkham}> Khám Nội Lầu 1 Khu A </Text>
            <Text style={{ fontSize: RFPercentage(2.5), marginTop: 6 }}>
              {" "}
              Phòng Khám: <Text style={styles.phongkham}>Phòng 25</Text>
            </Text>
            <Text style={{ fontSize: RFPercentage(2.5), marginTop: 6 }}>
              {" "}
              Chuyên Khoa: <Text style={styles.phongkham}>TAI MŨI HỌNG</Text>
            </Text>
            <Text style={styles.STT}>24</Text>
          </View>
          <View style={styles.inforcontainer}>
            <Text style={{ fontSize: RFPercentage(2.5), marginTop: 6 }}>
              {" "}
              Ngày Khám: <Text style={styles.infor}>00-00-00 (Buổi sáng)</Text>
            </Text>
            <Text style={{ fontSize: RFPercentage(2.5), marginTop: 6 }}>
              {" "}
              Giờ dự kiến: <Text style={styles.infor}>00-00</Text>
            </Text>
            <Text style={{ fontSize: RFPercentage(2.5), marginTop: 6 }}>
              {" "}
              Họ Và Tên: <Text style={styles.infor}>Phạm Ngọc Duy</Text>
            </Text>
            <Text style={{ fontSize: RFPercentage(2.5), marginTop: 6 }}>
              {" "}
              Giới Tính: <Text style={styles.infor}>Nam</Text>
            </Text>
            <Text style={{ fontSize: RFPercentage(2.5), marginTop: 6 }}>
              {" "}
              Năm Sinh: <Text style={styles.infor}>2003s</Text>
            </Text>
            <Text style={{ fontSize: RFPercentage(2.5), marginTop: 6 }}>
              {" "}
              Tỉnh/TP: <Text style={styles.infor}>BMT</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Bodycontainer: {
    flex: 1,
    marginHorizontal: width * 0.05,
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 10,
    marginTop: height * 0.02,
    padding: width * 0.02,
    marginBottom: width * 0.2,
  },
  LogoUMC: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: height * 0.01,
    height: width * 0.18,
  },
  image: {
    width: width * 0.18,
    height: width * 0.18,
    resizeMode: "contain",
    marginRight: width * 0.02,
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
  maphieu: {
    fontSize: RFPercentage(3.5),
  },
  maQR: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: width * 0.015,
  },
  imageQR: {
    width: width * 0.22,
    height: width * 0.22,
    resizeMode: "contain",
    backgroundColor: "#000",
  },
  speciality: {
    marginTop: height * 0.02,
    justifyContent: "center",
    alignItems: "center",
  },
  phongkham: {
    fontSize: RFPercentage(2.5),
    textAlign: "center",
  },
  STT: {
    padding: width * 0.18,
    fontSize: RFPercentage(18),
    color: "#00ADEE",
  },
  inforcontainer: {
    height: height * 0.28,
    alignSelf: "flex-start",
  },
  infor: {
    fontSize: RFPercentage(2.5),
  },
});

export default DetailPhieuKham;
