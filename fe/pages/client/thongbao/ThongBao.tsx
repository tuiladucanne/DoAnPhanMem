import React, { Component, useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import Header from "../../../components/Header";
import ThongBaoCard from "./ListThongBao";
import { RFPercentage } from "react-native-responsive-fontsize";
import axios from "axios";
const { width } = Dimensions.get("window");
const ThongBao = () => {
  const [thongBaoData, setThongBaoData] = useState([{}]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/user/thongbao")
      .then(function (res) {
        const data = res.data.data;
        setThongBaoData(data);
        console.log(data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, thongBaoData);

  const handlePress = (index: any) => {
    console.log(index._id);
  };
  return (
    <SafeAreaView style={styles.Container}>
      <Header content="Thông báo" />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "83%",
        }}
      >
        {thongBaoData.length > 0 ? (
          <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            {thongBaoData.map(
              (item: any, index: React.Key | null | undefined) => (
                <ThongBaoCard
                  key={index}
                  thongBao={item}
                  onPress={() => handlePress(item)}
                />
              )
            )}
          </ScrollView>
        ) : (
          <Text>Không có thông báo!</Text>
        )}
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {thongBaoData.map((item: any, index) => (
          <ThongBaoCard
            key={index}
            thongBao={item}
            onPress={() => handlePress(item)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollViewContainer: {
    paddingVertical: 10,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#22668E",
    paddingHorizontal: width * 0.03,
  },
  headerIcon: {},
  headerTitleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: RFPercentage(2.5),
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default ThongBao;
