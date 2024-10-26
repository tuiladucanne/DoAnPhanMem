// AppStackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
//Screen
import TaiKhoanScreen from './TaiKhoan/TaiKhoan';
import ChinhSuaThongTin from './TaiKhoan/ChinhSuaThongTin';


const AppStackNavigator = ({ screens }) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
           <Stack.Screen name="TaiKhoan" component={TaiKhoanScreen} />
           <Stack.Screen name="ChinhSuaThongTin" component={ThongTinTK} />
        </Stack.Navigator>
    );
};

export default AppStackNavigator;
