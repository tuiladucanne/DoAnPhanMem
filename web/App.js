import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

// Import các trang
import TrangChuScreen from './page/Home/TrangChu';
import DatKhamScreen from './page/DatKham/DatKham';
import PhieuKhamScreen from './page/PhieuKham/PhieuKham';
import ThongBaoScreen from './page/ThongBao/ThongBao';
import TaiKhoanScreen from './page/TaiKhoan/TaiKhoan';




// login&register
import RegisterScreen from './page/TaiKhoan/TaiKhoan'
// Khởi tạo Drawer Navigator
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //  <InApp></InApp>
    // </NavigationContainer>
    <RegisterScreen></RegisterScreen>
  );
}

export const InApp = () => (
  <Drawer.Navigator
    screenOptions={{
      drawerType: 'permanent', // Giữ drawer luôn cố định
      headerShown: false, // Ẩn header mặc định
      drawerStyle: {
        backgroundColor: '#22668E',
        width: 260,
        paddingTop: 50,
        paddingBottom: 30,
      },
      drawerItemStyle: {
        marginVertical: 12,
        borderWidth: 1,
        borderColor: '#D4D4D4', // Màu viền nhạt
        borderRadius: 8,
      },
      drawerLabelStyle: {
        color: '#000',
        fontSize: 16,
      },
      drawerActiveBackgroundColor: '#FFFFFF',
      drawerActiveTintColor: '#1669A2',
      drawerInactiveTintColor: '#D4D4D4',
    }}
  >
    <Drawer.Screen
      name="Trang Chủ"
      component={TrangChuScreen}
      options={{
        drawerIcon: ({ focused }) => (
          <SimpleLineIcons name="home" size={24} color={focused ? '#1669A2' : '#D4D4D4'} />
        ),
      }}
    />
    <Drawer.Screen
      name="Phiếu Khám"
      component={PhieuKhamScreen}
      options={{
        drawerIcon: ({ focused }) => (
          <SimpleLineIcons name="notebook" size={24} color={focused ? '#1669A2' : '#D4D4D4'} />
        ),
      }}
    />
    <Drawer.Screen
      name="Đặt Khám"
      component={DatKhamScreen}
      options={{
        drawerIcon: ({ focused }) => (
          <AntDesign name="calendar" size={36} color={focused ? '#1669A2' : '#D4D4D4'} />
        ),
      }}
    />
    <Drawer.Screen
      name="Thông Báo"
      component={ThongBaoScreen}
      options={{
        drawerIcon: ({ focused }) => (
          <SimpleLineIcons name="bell" size={24} color={focused ? '#1669A2' : '#D4D4D4'} />
        ),
      }}
    />
    <Drawer.Screen
      name="Tài Khoản"
      component={TaiKhoanScreen}
      options={{
        drawerIcon: ({ focused }) => (
          <SimpleLineIcons name="user" size={24} color={focused ? '#1669A2' : '#D4D4D4'} />
        ),
      }}
    />
  </Drawer.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
