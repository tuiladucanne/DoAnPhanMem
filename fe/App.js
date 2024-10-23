import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { View, Text, Platform, StyleSheet } from 'react-native';

// Import các trang
import TrangChuScreen from './page/Home/TrangChu';
import DatKhamScreen from './page/DatKham/DatKham';
import PhieuKhamScreen from './page/PhieuKham/PhieuKham';
import ThongBaoScreen from './page/ThongBao/ThongBao';
import TaiKhoanScreen from './page/TaiKhoan/TaiKhoan';

// Khởi tạo Drawer Navigator
const Drawer = createDrawerNavigator();

export const InApp = () => (
  <Drawer.Navigator
    screenOptions={{
      drawerStyle: {
        backgroundColor: '#22668E',
        width: 260,
        borderRadius: 10,
        paddingTop: 30,
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
          <View
            style={{
              top: Platform.OS === 'ios' ? -20 : -20,
              width: Platform.OS === 'ios' ? 65 : 60,
              height: Platform.OS === 'ios' ? 65 : 60,
              borderRadius: Platform.OS === 'ios' ? 35 : 30,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: focused ? '#fff' : '#22668E',
              borderWidth: focused ? 2 : 0,
              borderColor: '#22668E',
            }}
          >
            <AntDesign name="calendar" size={24} color={focused ? '#22668E' : '#fff'} />
            <Text style={{ fontSize: 12, color: focused ? '#22668E' : '#fff' }}>
              Đặt lịch
            </Text>
          </View>
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

// App Component
export default function App() {
  return (
    <NavigationContainer>
      <InApp />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
