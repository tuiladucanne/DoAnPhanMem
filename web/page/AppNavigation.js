// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons'; // Thêm thư viện icon

// Import các màn hình
import TrangChuScreen from './Home/TrangChu';
import DatKhamScreen from './DatKham/DatKham';
import TaiKhoanScreen from './TaiKhoan/TaiKhoan';
import ChinhSuaHoSo from './TaiKhoan/ChinhSuaHoSo';
import ThongBaoScreen from './ThongBao/ThongBao';
import PhieuKhamScreen from './PhieuKham/PhieuKham';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Stack Navigator cho nhóm màn hình "Home"
const HomeStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TrangChuScreen" component={TrangChuScreen} />
    </Stack.Navigator>
);

// Stack Navigator cho nhóm màn hình "Đặt Khám"
const DatKhamStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="DatKhamScreen" component={DatKhamScreen} />
    </Stack.Navigator>
);

// Stack Navigator cho nhóm màn hình "Tài Khoản"
const TaiKhoanStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TaiKhoanScreen" component={TaiKhoanScreen} />
        <Stack.Screen name="ChinhSuaHoSo" component={ChinhSuaHoSo} />
    </Stack.Navigator>
);

// Stack Navigator cho các nhóm khác nếu cần
const ThongBaoStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ThongBaoScreen" component={ThongBaoScreen} />
    </Stack.Navigator>
);

const PhieuKhamStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="PhieuKhamScreen" component={PhieuKhamScreen} />
    </Stack.Navigator>
);

// Tạo Drawer Navigator chính
const AppNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Trang Chủ"
            screenOptions={{
                headerShown: false, // Ẩn thanh header trên toàn bộ màn hình
                drawerType: 'permanent', // Cố định Drawer
                drawerStyle: {
                    backgroundColor: '#22668E',
                    width: 260,
                    paddingTop: 50,
                    paddingBottom: 30,
                },
                drawerItemStyle: {
                    marginVertical: 12,
                    borderWidth: 1,
                    borderColor: '#D4D4D4',
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
                component={HomeStack} 
                options={{
                    drawerIcon: ({ focused }) => (
                        <Ionicons name="home-outline" size={24} color={focused ? '#1669A2' : '#D4D4D4'} />
                    ),
                }}
            />
            <Drawer.Screen 
                name="Phiếu Khám" 
                component={PhieuKhamStack} 
                options={{
                    drawerIcon: ({ focused }) => (
                        <Ionicons name="document-text-outline" size={24} color={focused ? '#1669A2' : '#D4D4D4'} />
                    ),
                }}
            />
            <Drawer.Screen 
                name="Đặt Khám" 
                component={DatKhamStack} 
                options={{
                    drawerIcon: ({ focused }) => (
                        <Ionicons name="calendar-outline" size={30} color={focused ? '#1669A2' : '#D4D4D4'} /> // Tăng kích thước icon
                    ),
                    drawerLabelStyle: {
                        fontSize: 18, // Tăng kích thước nhãn
                        color: '#1669A2', // Đổi màu nếu cần
                    },
                }}
            />
            <Drawer.Screen 
                name="Thông Báo" 
                component={ThongBaoStack} 
                options={{
                    drawerIcon: ({ focused }) => (
                        <Ionicons name="notifications-outline" size={24} color={focused ? '#1669A2' : '#D4D4D4'} />
                    ),
                }}
            />
            <Drawer.Screen 
                name="Tài Khoản" 
                component={TaiKhoanStack} 
                options={{
                    drawerIcon: ({ focused }) => (
                        <Ionicons name="person-outline" size={24} color={focused ? '#1669A2' : '#D4D4D4'} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};

export default AppNavigator;
