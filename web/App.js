// App.js
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SimpleLineIcons, AntDesign } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

// Import các màn hình
import TrangChuScreen from "./page/Home/TrangChu";
import DatKhamScreen from "./page/DatKham/DatKham";
import PhieuKhamScreen from "./page/PhieuKham/PhieuKham";
import ThongBaoScreen from "./page/ThongBao/ThongBao";
import TaiKhoanScreen from "./page/TaiKhoan/TaiKhoan";
import ChinhSuaHoSo from "./page/TaiKhoan/ChinhSuaHoSo";
import AppNavigator from "./page/AppNavigation";
import DatKhamBSScreen from "./page/DatKham/DatKhamBS";
import LoginScreen from "./login&register/login";
import RegisterScreen from "./login&register/register";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthState();
  }, []);

  const checkAuthState = async () => {
    try {
      const userId = localStorage.getItem('id');
      setIsAuthenticated(!!userId); // Chuyển đổi sang boolean
    } catch (error) {
      console.error('Error checking auth state:', error);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return null; // hoặc return một loading spinner
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAuthenticated ? "AppNavigator" : "AuthNavigator"}
        screenOptions={{ headerShown: false }}
      >
          <Stack.Screen name="AppNavigator" component={AppNavigator} />
          <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}