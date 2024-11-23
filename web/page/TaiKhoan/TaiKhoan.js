import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TaiKhoanScreen = (props) => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.leftContainer}>
                    <View style={styles.logoContainer}>
                        <Image source={require('../../assets/logo6.png')} style={styles.logo} />
                        <Text style={styles.companyName}>VOV</Text>
                    </View>

                    <View style={styles.scrollContainer}>
                        <View style={styles.buttonBox}>
                            {/* Lịch sử khám */}
                            <TouchableOpacity 
                                style={styles.button} 
                                onPress={() => props.navigation.navigate("LichSuKham")}
                            >
                                <Icon name="time-outline" size={24} color="orange" style={styles.icon} />
                                <Text style={styles.buttonText}>Lịch sử khám</Text>
                                <Text style={styles.arrowText}>{'>'}</Text>
                            </TouchableOpacity>

                            {/* Thông tin tài khoản */}
                            <TouchableOpacity 
                                style={styles.button} 
                                onPress={() => props.navigation.navigate("ChinhSuaHoSo")}
                            >
                                <Icon name="person-outline" size={24} color="orange" style={styles.icon} />
                                <Text style={styles.buttonText}>Thông tin tài khoản</Text>
                                <Text style={styles.arrowText}>{'>'}</Text>
                            </TouchableOpacity>

                            {/* Đổi mật khẩu */}
                            <TouchableOpacity 
                                style={styles.button} 
                                onPress={() => props.navigation.navigate("ChinhSuaPass")}
                            >
                                <Icon name="lock-closed-outline" size={24} color="orange" style={styles.icon} />
                                <Text style={styles.buttonText}>Đổi mật khẩu</Text>
                                <Text style={styles.arrowText}>{'>'}</Text>
                            </TouchableOpacity>

                            {/* Hướng dẫn sử dụng */}
                            <TouchableOpacity 
                                style={styles.button} 
                                onPress={() => props.navigation.navigate("HuongDanSuDung")}
                            >
                                <Icon name="book-outline" size={24} color="orange" style={styles.icon} />
                                <Text style={styles.buttonText}>Hướng dẫn sử dụng</Text>
                                <Text style={styles.arrowText}>{'>'}</Text>
                            </TouchableOpacity>

                            {/* Điều khoản và điều kiện sử dụng */}
                            <TouchableOpacity 
                                style={styles.button} 
                                onPress={() => props.navigation.navigate("DieuKhoanSuDung")}
                            >
                                <Icon name="bookmark-outline" size={24} color="orange" style={styles.icon} />
                                <Text style={styles.buttonText}>Điều khoản và điều kiện sử dụng</Text>
                                <Text style={styles.arrowText}>{'>'}</Text>
                            </TouchableOpacity>

                            {/* Chính sách bảo mật */}
                            <TouchableOpacity 
                                style={styles.button} 
                                onPress={() => props.navigation.navigate("ChinhSachBaoMat")}
                            >
                                <Icon name="checkmark-circle-outline" size={24} color="orange" style={styles.icon} />
                                <Text style={styles.buttonText}>Chính sách bảo mật</Text>
                                <Text style={styles.arrowText}>{'>'}</Text>
                            </TouchableOpacity>

                            {/* Quy định sử dụng */}
                            <TouchableOpacity 
                                style={styles.button} 
                                onPress={() => props.navigation.navigate("QuyDinhSuDung")}
                            >
                                <Icon name="copy-outline" size={24} color="orange" style={styles.icon} />
                                <Text style={styles.buttonText}>Quy định sử dụng</Text>
                                <Text style={styles.arrowText}>{'>'}</Text>
                            </TouchableOpacity>

                            {/* Đánh giá */}
                            <TouchableOpacity 
                                style={styles.button} 
                                onPress={() => props.navigation.navigate("DanhGia")}
                            >
                                <Icon name="star-outline" size={24} color="orange" style={styles.icon} />
                                <Text style={styles.buttonText}>Đánh giá</Text>
                                <Text style={styles.arrowText}>{'>'}</Text>
                            </TouchableOpacity>

                            {/* Giới thiệu */}
                            <TouchableOpacity 
                                style={styles.button} 
                                onPress={() => props.navigation.navigate("GioiThieu")}
                            >
                                <Icon name="people-outline" size={24} color="orange" style={styles.icon} />
                                <Text style={styles.buttonText}>Giới thiệu</Text>
                                <Text style={styles.arrowText}>{'>'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.exitButtonContainer}>
                        <TouchableOpacity onPress={()=>{
                            // clear id
                            localStorage.removeItem('id');
                            navigation.navigate('AuthNavigator');
                        }} style={styles.exitButton}>
                            <Text style={styles.exitButtonText}>Đăng xuất</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CCEFFC',
        width: '100%',
    },
    leftContainer: {
        flex: 1,
        padding: '5%',
        justifyContent: 'flex-start',
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '5%',
    },
    logo: {
        width: 100,
        height: 100,
        aspectRatio: 1,
        marginRight: '2%',
    },
    companyName: {
        fontSize: 65,
        fontWeight: 'bold',
    },
    scrollContainer: {
        alignItems: 'center',
    },
    buttonBox: {
        alignItems: 'center',
        width: '100%',
    },
    button: {
        flexDirection: 'row', // Sắp xếp các phần tử theo hàng ngang
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 20,
        width: '90%',
        marginBottom: 10,
        borderRadius: 8,
        alignItems: 'center', // Căn giữa các phần tử theo chiều dọc
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    icon: {
        marginRight: 15, // Khoảng cách giữa icon và text
    },
    buttonText: {
        fontSize: 18,
        color: '#333',
        flex: 1, // Để text chiếm khoảng trống giữa icon và mũi tên
    },
    arrowText: {
        fontSize: 18,
        color: 'orange',
    },
    exitButtonContainer: {
        alignItems: 'flex-end',
        padding: '3%',
    },
    exitButton: {
        backgroundColor: '#22668E',
        padding: '2%',
        borderRadius: 15,
        alignItems: 'center',
    },
    exitButtonText: {
        color: '#fff',
        fontSize: 20,
    },
});

export default TaiKhoanScreen;
