import React, { useContext } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";
import { UserContext } from "../../context/UserContext";

const { width, height } = Dimensions.get("window");

const KetQuaScreen = (props: any) => {
  const { user } = useContext(UserContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <MaterialIcons
            name="arrow-back"
            size={RFPercentage(4)}
            color="#FFFFFF"
            style={styles.headerIcon}
          />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Hồ sơ đã khám</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileContainer}>
          <MaterialIcons
            name="account-circle"
            size={RFPercentage(10)}
            color="#FFFFFF"
            style={styles.avatarIcon}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{user.Ten}</Text>
            <Text style={styles.userDetails}>
              {user.gender} - {user.NgaySinh}
            </Text>
          </View>
        </View>
        <View style={styles.noDataContainer}>
          <MaterialIcons
            name="insert-drive-file"
            size={RFPercentage(20)}
            color="#ccc"
            style={styles.noDataIcon}
          />
          <Text style={styles.noDataText}>Không có dữ liệu</Text>
          <Text style={styles.noDataSubText}>
            Không có dữ liệu nào được tìm thấy
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: height * 0.01,
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
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#22668E",
    width: width * 1,
    height: height * 0.2,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.05,
    borderBottomLeftRadius: width * 0.2,
    borderBottomRightRadius: width * 0.2,
  },
  avatarIcon: {
    marginRight: width * 0.05,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: RFPercentage(2.5),
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  userDetails: {
    fontSize: RFPercentage(2),
    color: "#FFFFFF",
    marginTop: height * 0.005,
  },
  noDataContainer: {
    alignItems: "center",
    marginTop: height * 0.1,
  },
  noDataIcon: {
    marginBottom: height * 0.02,
  },
  noDataText: {
    fontSize: RFPercentage(2.5),
    fontWeight: "bold",
    color: "#000",
  },
  noDataSubText: {
    fontSize: RFPercentage(2),
    color: "#666",
    marginTop: height * 0.01,
  },
});

export default KetQuaScreen;
