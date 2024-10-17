import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import LoginScreen from "./pages/Login/login";
import SplashScreen from "./pages/Login/SplashScreen";
import RegisterScreen from "./pages/Login/register";
import ForgotScreen from "./pages/Login/forgotpassScreen";
import CodeconfirmScreen from "./pages/Login/codeconfirm";
import { useEffect, useState, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailPhieuKham from "./pages/client/phieukham/DetailPhieuKham";
//thong bao
import Toast from "react-native-toast-message";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//client screens
import TrangChu from "./pages/client/Home/TrangChuScreen";
import DatLich from "./pages/client/datlich/DatLich";
import PhieuKham from "./pages/client/phieukham/PhieuKham";
import TaiKhoan from "./pages/client/taikhoan/TaiKhoan";
import ThongBao from "./pages/client/thongbao/ThongBao";
//icon
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
//home mau den
import { Fontisto } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
//

//context
import { UserProvider } from "./pages/context/UserContext";

//navigation page
import AppNavigation from "./pages/client/AppNavigation";
import ThongTinDatLichScreen from "./pages/client/datlich/ThongtinDatlich";
import DetailTaiKhoan from "./pages/client/account/ThongtinTaiKhoan";
import EditThongTinDatLichScreen from "./pages/client/datlich/ChinhSuaThongTinDatKham";
import DatKhamBSScreen from "./pages/client/datlich/DatKhamBS";
import DatlichNgayScreen from "./pages/client/datlich/DatkhamNgay";
import DoctorCard from "./pages/client/Final/ListBacSi";
import DanhSachBSScreen from "./pages/client/Final/DanhSachBS";
import KetQuaScreen from "./pages/client/Final/KetQua";
import BSAIScreen from "./pages/client/Final/BacSiAI";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <UserProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#c540bf" style="dark" />

        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="OurApp"
        >
          <Stack.Screen name="OurApp" component={OurApp} />
          <Stack.Screen name="InApp" component={InApp} />
          <Stack.Screen name="naviTK" component={AppNavigation} />
        </Stack.Navigator>
        <Toast />
      </NavigationContainer>
    </UserProvider>
  );
}
export const OurApp = () => {
  const Stack = createNativeStackNavigator();
  const [isShowSplash, setIsShowSplass] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShowSplass(false);
    }, 3000);
  });
  return isShowSplash ? (
    <SplashScreen />
  ) : (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registor" component={RegisterScreen} />
      <Stack.Screen name="ForgotPass" component={ForgotScreen} />
    </Stack.Navigator>
  );
};

export const InApp = ({}) => {
  const Tab = createBottomTabNavigator();
  const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: "10%",
      backgroundColor: "#fff",
      marginBottom: Platform.OS == "ios" ? "0" : "0%",
    },
  };
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="TrangChu"
        component={TrangChu}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {focused ? (
                  <Fontisto name="home" size={24} color="#22668E" />
                ) : (
                  <SimpleLineIcons name="home" size={24} color="black" />
                )}
                <Text
                  style={{ fontSize: 12, color: focused ? "#22668E" : "#000" }}
                >
                  Trang chủ
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="PhieuKham"
        component={PhieuKham}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {focused ? (
                  <Ionicons name="clipboard" size={24} color="#22668E" />
                ) : (
                  <Ionicons name="clipboard-outline" size={24} color="black" />
                )}
                <Text
                  style={{ fontSize: 12, color: focused ? "#22668E" : "#000" }}
                >
                  Phiếu khám
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="DatLich"
        component={DatLich}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  top: Platform.OS == "ios" ? -20 : -20,
                  width: Platform.OS == "ios" ? 65 : 60,
                  height: Platform.OS == "ios" ? 65 : 60,
                  borderRadius: Platform.OS == "ios" ? 35 : 30,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: focused ? "#fff" : "#22668E",
                  borderWidth: focused ? 2 : 0,
                  borderColor: "#22668E",
                }}
              >
                {focused ? (
                  <AntDesign name="calendar" size={24} color="#22668E" />
                ) : (
                  <AntDesign name="calendar" size={24} color="#fff" />
                )}
                <Text
                  style={{ fontSize: 12, color: focused ? "#22668E" : "#fff" }}
                >
                  Đặt lịch
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="ThongBao"
        component={ThongBao}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {focused ? (
                  <>
                    <Ionicons name="notifications" size={24} color="#22668E" />
                  </>
                ) : (
                  <Ionicons
                    name="notifications-outline"
                    size={24}
                    color="black"
                  />
                )}

                <Text
                  style={{ fontSize: 12, color: focused ? "#22668E" : "#000" }}
                >
                  Thông báo
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="TaiKhoan"
        component={TaiKhoan}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                {focused ? (
                  <>
                    <MaterialCommunityIcons
                      name="account"
                      size={24}
                      color="#22668E"
                    />
                  </>
                ) : (
                  <MaterialCommunityIcons
                    name="account-outline"
                    size={24}
                    color="black"
                  />
                )}
                <Text
                  style={{ fontSize: 12, color: focused ? "#22668E" : "#000" }}
                >
                  Tài khoản
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});
