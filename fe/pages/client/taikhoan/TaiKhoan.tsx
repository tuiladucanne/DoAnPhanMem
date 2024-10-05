import React, { useContext } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const { width, height } = Dimensions.get("window");
import { UserContext } from "../../context/UserContext";

const TaiKhoan = (props: any) => {
  const { user } = useContext(UserContext);

  console.log(props);
  const handleDangXuat = () => {
    props.navigation.navigate("OurApp", { screen: "Login" });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <MaterialIcons
                name="account-circle"
                size={width * 0.15}
                color="#CCCCCC"
              />
            </View>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{user.Ten ? user.Ten : ""}</Text>
          <Text style={styles.infoText}>{user.SDT ? user.SDT : ""}</Text>
          <Text style={styles.text}>{user.Email ? user.Email : ""}</Text>
        </View>
        <View style={styles.Bodycontainer}>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.iconText}>
              <Text style={styles.menuText}>Lịch sử khám</Text>
            </View>
            <MaterialIcons
              name="chevron-right"
              size={width * 0.09}
              color="gray"
            />
          </TouchableOpacity>
          <View style={styles.textseting}>
            <Text style={styles.sectionHeaderText}>Cài đặt chung</Text>
          </View>
          <View style={styles.chung}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => {
                props.navigation.navigate("naviTK", {
                  screen: "ThongTinTaiKhoan",
                });
              }}
            >
              <View style={styles.iconText}>
                <Text style={styles.menuText}>Thông tin tài khoản</Text>
              </View>
              <MaterialIcons
                name="chevron-right"
                size={width * 0.09}
                color="gray"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.iconText}>
                <Text style={styles.menuText}>Đổi Mật Khẩu</Text>
              </View>
              <MaterialIcons
                name="chevron-right"
                size={width * 0.09}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.textseting}>
            <Text style={styles.sectionHeaderText}>Khác</Text>
          </View>
          <View style={styles.khac}>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.iconText}>
                <Text style={styles.menuText}>Hướng dẫn sử dụng</Text>
              </View>
              <MaterialIcons
                name="chevron-right"
                size={width * 0.09}
                color="gray"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.iconText}>
                <Text style={styles.menuText}>
                  Điều khoản và điều kiện sử dụng
                </Text>
              </View>
              <MaterialIcons
                name="chevron-right"
                size={width * 0.09}
                color="gray"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.iconText}>
                <Text style={styles.menuText}>Chính sách bảo mật</Text>
              </View>
              <MaterialIcons
                name="chevron-right"
                size={width * 0.09}
                color="gray"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.iconText}>
                <Text style={styles.menuText}>Quy định sử dụng</Text>
              </View>
              <MaterialIcons
                name="chevron-right"
                size={width * 0.09}
                color="gray"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.iconText}>
                <Text style={styles.menuText}>Các vấn đề thường gặp</Text>
              </View>
              <MaterialIcons
                name="chevron-right"
                size={width * 0.09}
                color="gray"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.iconText}>
                <Text style={styles.menuText}>Giới thiệu</Text>
              </View>
              <MaterialIcons
                name="chevron-right"
                size={width * 0.09}
                color="gray"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.logoutContainer}>
          <View style={styles.btnlogout}>
            <TouchableOpacity style={styles.button1} onPress={handleDangXuat}>
              <Text style={styles.buttonText}>Đăng Xuất</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  scrollContainer: {
    flex: 1,
  },
  headerContainer: {
    height: height * 0.13,
    backgroundColor: "#22668E",
    borderBottomLeftRadius: width * 0.15,
    borderBottomRightRadius: width * 0.15,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingBottom: height * 0.02,
  },
  avatarContainer: {
    position: "absolute",
    bottom: -(width * 0.1),
    alignSelf: "center",
  },
  avatar: {
    width: width * 0.2,
    height: width * 0.2,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: (width * 0.2) / 2,
    borderWidth: 3,
    borderColor: "white",
  },
  infoContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: width * 0.1,
  },
  infoText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    textDecorationLine: "underline",
  },
  Bodycontainer: {
    borderTopColor: "rgba(196, 234, 250, 0.3)",
    borderTopWidth: 15,
    flex: 1,
  },
  iconText: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  menuItem: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: width * 0.04,
  },
  menuText: {
    paddingLeft: 5,
    fontSize: 20,
    fontWeight: "500",
  },
  chung: {
    borderTopColor: "rgba(196, 234, 250, 0.3)",
    borderTopWidth: 15,
  },
  textseting: {
    height: width * 0.1,
    justifyContent: "center",
    borderTopWidth: 15,
    borderColor: "rgba(196, 234, 250, 0.3)",
    paddingLeft: width * 0.04,
  },
  sectionHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  khac: {
    borderTopColor: "rgba(196, 234, 250, 0.3)",
    borderTopWidth: 15,
    borderBottomColor: "rgba(196, 234, 250, 0.3)",
    borderBottomWidth: 15,
  },
  logoutContainer: {
    height: height * 0.2,
    paddingTop: width * 0.1,
    backgroundColor: "rgba(196, 234, 250, 0.3)",
    marginBottom: width * 0.15,
  },
  btnlogout: {
    height: 60,
    justifyContent: "center",
  },
  button1: {
    backgroundColor: "#22668E",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginHorizontal: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default TaiKhoan;
