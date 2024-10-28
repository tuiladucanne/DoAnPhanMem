// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

// Import các màn hình
import TrangChuScreen from './page/Home/TrangChu';
import DatKhamScreen from './page/DatKham/DatKham';
import PhieuKhamScreen from './page/PhieuKham/PhieuKham';
import ThongBaoScreen from './page/ThongBao/ThongBao';
import TaiKhoanScreen from './page/TaiKhoan/TaiKhoan';
import ChinhSuaHoSo from './page/TaiKhoan/ChinhSuaHoSo';
import AppNavigator from './page/AppNavigation';
import DatKhamBSScreen from './page/DatKham/DatKhamBS';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <AppNavigator></AppNavigator>
     
    </NavigationContainer>
  );
}
