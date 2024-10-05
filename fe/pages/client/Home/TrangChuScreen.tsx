import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Swiper from "react-native-swiper";
import { RecyclerView, VerticalRecyclerView } from "./RecylerViewHome"; // Đã chỉnh sửa đường dẫn import
//
import { UserContext } from "../../context/UserContext";

const { width, height } = Dimensions.get("window");

const dataDoctors = [
  {
    name: "Dr. John Doe",
    specialty: "Chuyên khoa: Nội Khoa",
    image: require("../../../assets/Home/Dr1.png"),
  },
  {
    name: "Dr. Jane Smith",
    specialty: "Chuyên khoa: Da liễu",
    image: require("../../../assets/Home/Dr2.png"),
  },
  {
    name: "Dr. Alan Turing",
    specialty: "Chuyên khoa: Nhi khoa",
    image: require("../../../assets/Home/Dr2.png"),
  },
];

const dataEvents = [
  {
    image: require("../../../assets/Home/Event1.jpg"),
    text: "Lời mời hợp tác:cùng nhau thúc đẩy và phát triển dịch vụ bền vững",
  },
  {
    image: require("../../../assets/Home/Event3.jpg"),
    text: "Top 5 địa điểm chụp MRI uy tín chất lượng tại TPHCM",
  },
  {
    image: require("../../../assets/Home/Event4.jpg"),
    text: "Nhìn lại hội thảo:Tiến bộ của thẩm mỹ & sự đóng góp của y tá,Nữ hộ sinh và kỹ thuật viên...",
  },
  {
    image: require("../../../assets/Home/Event2.jpg"),
    text: "Bộ Y tế thông tin về hỗ trợ đóng bảo hiểm y tế cho một số đối tượng",
  },
];

const TrangChu = (props: any) => {
  const { user } = useContext(UserContext);

  console.log(user);

  const handleEventPress = (item: any) => {
    console.log("Pressed item:", item);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.headercontainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.avatar}>
              <MaterialIcons
                name="account-circle"
                size={width * 0.15}
                color="#CCCCCC"
              />
            </View>
            <View
              style={{
                flexDirection: "column",
                paddingTop: height * 0.02,
                justifyContent: "space-around",
              }}
            >
              <Text style={{ color: "#fff" }}>Chào Bạn</Text>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                {user ? user.Ten : "Vui lòng cập nhập tên"}
              </Text>
            </View>
          </View>
          <View style={styles.searchContainer}>
            <View style={styles.search}>
              <MaterialIcons
                name="search"
                size={width * 0.07}
                color="#000000"
              />
              <TextInput
                placeholder="Tìm bác sĩ,..."
                placeholderTextColor={"#000"}
                style={{ marginLeft: 10, fontWeight: "bold" }}
              />
            </View>
          </View>
        </View>

        <View style={styles.Bodycontainer}>
          <View style={styles.Slidecontainer}>
            <Swiper style={styles.swiper} autoplay autoplayTimeout={3}>
              <View style={styles.slide}>
                <Image
                  source={require("../../../assets/Home/Slide1.png")}
                  style={styles.image}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={require("../../../assets/Home/Slide2.png")}
                  style={styles.image}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={require("../../../assets/Home/Slide3.png")}
                  style={styles.image}
                />
              </View>
              <View style={styles.slide}>
                <Image
                  source={require("../../../assets/Home/Slide4.png")}
                  style={styles.image}
                />
              </View>
            </Swiper>
          </View>
          <View style={{ paddingHorizontal: width * 0.05 }}>
            <View style={styles.Inforcontainer}>
              <TouchableOpacity
                style={styles.Button}
                onPress={() => {
                  props.navigation.navigate("naviTK", {
                    screen: "ThongTinHoSo",
                  });
                }}
              >
                <View style={styles.Buttoncontainer}>
                  <View style={styles.viewimg}>
                    <Image
                      source={require("../../../assets/Home/Hoso.png")}
                      style={styles.buttonImage}
                    />
                  </View>
                  <Text style={styles.buttonText}>Hồ Sơ</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.Button}
                onPress={() => {
                  props.navigation.navigate("naviTK", {
                    screen: "KetQua",
                  });
                }}
              >
                <View style={styles.Buttoncontainer}>
                  <View style={styles.viewimg}>
                    <Image
                      source={require("../../../assets/Home/KetQua.png")}
                      style={styles.buttonImage}
                    />
                  </View>
                  <Text style={styles.buttonText}>Kết quả</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.Button}
                onPress={() => {
                  props.navigation.navigate("naviTK", {
                    screen: "BacSiAI",
                  });
                }}
              >
                <View style={styles.Buttoncontainer}>
                  <View style={styles.viewimg}>
                    <Image
                      source={require("../../../assets/Home/AI.png")}
                      style={styles.buttonImage}
                    />
                  </View>
                  <Text style={styles.buttonText}>Bác sĩ AI</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.Doctoroustand}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons name="star" size={width * 0.1} color="#FFCC66" />
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>
                Bác sĩ nổi bật
              </Text>
            </View>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              onPress={() => {
                props.navigation.navigate("naviTK", {
                  screen: "ListBacSi",
                });
              }}
            >
              <Text style={{ color: "#22668E" }}>Xem Thêm</Text>
              <MaterialIcons
                name="chevron-right"
                size={width * 0.09}
                color="#22668E"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.recyleview}>
            <RecyclerView
              data={dataDoctors}
              onPress={() => alert("Doctor item pressed")}
            />
          </View>
          <View style={styles.eventcontainer}>
            <View style={styles.event}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}
                >
                  Tin Tức-Sự kiện
                </Text>
              </View>
              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center" }}
                onPress={() => alert("chuyển trang")}
              >
                <Text style={{ color: "#22668E" }}>Xem Thêm</Text>
                <MaterialIcons
                  name="chevron-right"
                  size={width * 0.09}
                  color="#22668E"
                />
              </TouchableOpacity>
            </View>
            <VerticalRecyclerView
              data={dataEvents}
              onPress={handleEventPress}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(196, 234, 250, 0.3)",
    padding: 10,
  },
  scrollContainer: {
    flex: 1,
  },
  headercontainer: {
    backgroundColor: "#22668E",
    borderBottomLeftRadius: (width * 0.15) / 2,
    borderBottomRightRadius: (width * 0.15) / 2,
    paddingTop: height * 0.02,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  avatar: {
    width: width * 0.15,
    height: width * 0.15,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: (width * 0.15) / 2,
    marginRight: 10,
  },
  searchContainer: {
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.02,
  },
  search: {
    height: height * 0.05,
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  Bodycontainer: {
    flex: 1,
    marginTop: 20,
  },
  Slidecontainer: {
    height: height * 0.22,
    borderRadius: 20,
    paddingHorizontal: width * 0.05,
  },
  swiper: {},
  slide: {
    height: height * 0.2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C4EAFA",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 30,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 30,
  },
  Inforcontainer: {
    height: height * 0.17,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: width * 0.05,
    paddingVertical: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  Button: {
    marginVertical: 10,
  },
  Buttoncontainer: {
    alignItems: "center",
  },
  viewimg: {
    width: width * 0.16,
    height: height * 0.08,
    backgroundColor: "#ACCDEB",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonImage: {
    width: width * 0.11,
    height: height * 0.05,
    resizeMode: "cover",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
    marginTop: width * 0.01,
  },
  //////////////////
  Doctoroustand: {
    paddingTop: width * 0.05,
    paddingHorizontal: width * 0.04,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  recyleview: {
    height: width * 0.65,
  },
  ///////
  eventcontainer: {
    height: width * 1.9,
    backgroundColor: "#fff",
  },
  event: {
    paddingTop: width * 0.05,
    paddingHorizontal: width * 0.04,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default TrangChu;
