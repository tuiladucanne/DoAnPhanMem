import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importing Ionicons

const TaiKhoanScreen = () => {
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
                            {buttonData.map((item, index) => (
                                <TouchableOpacity key={index} style={styles.button}>
                                    <View style={styles.buttonContent}>
                                        <Icon name={item.icon} size={40} color="orange" style={styles.icon} />
                                        <Text style={styles.buttonText}>{item.text}</Text>
                                        <Text style={styles.arrowText}>{'>'}</Text> {/* Arrow on the right */}
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    <View style={styles.exitButtonContainer}>
                        <TouchableOpacity style={styles.exitButton}>
                            <Text style={styles.exitButtonText}>Đăng xuất</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

// Button data to map through
const buttonData = [
    { icon: "time-outline", text: "Lịch sử khám" },
    { icon: "person-outline", text: "Thông tin tài khoản" },
    { icon: "lock-closed-outline", text: "Đổi mật khẩu" },
    { icon: "book-outline", text: "Hướng dẫn sử dụng" },
    { icon: "bookmark-outline", text: "Điều khoản và điều kiện sử dụng" },
    { icon: "checkmark-circle-outline", text: "Chính sách bảo mật" },
    { icon: "copy-outline", text: "Quy định sử dụng" },
    { icon: "star-outline", text: "Đánh giá" },
    { icon: "people-outline", text: "Giới thiệu" },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CCEFFC',
        width: '100%',
    },
    leftContainer: {
        flex: 1,
        padding: '5%', // Padding using percentage
        justifyContent: 'flex-start',
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '5%', // Margin using percentage
    },
    logo: {
        width: 100, // Width using percentage
        height: 100,
        aspectRatio: 1, // Maintain aspect ratio
        marginRight: '2%', // Margin using percentage
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
        backgroundColor: 'white',
        paddingVertical: '2%', // Padding using percentage
        width: '80%',
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%', // Make sure it takes the full width
    },
    icon: {
        marginLeft: '5%', // Margin using percentage
        marginRight: '5%', // Margin using percentage
    },
    buttonText: {
        fontSize: 25,
        flex: 1, // Allow text to take available space
    },
    arrowText: {
        fontSize: 20,
        color: 'orange', // Color for the arrow
    },
    exitButtonContainer: {
        alignItems: 'flex-end',
        padding: '3%', // Padding using percentage
    },
    exitButton: {
        backgroundColor: '#22668E',
        padding: '2%', // Padding using percentage
        borderRadius: 15,
        alignItems: 'center',
    },
    exitButtonText: {
        color: '#fff',
        fontSize: 20,
    },
});

export default TaiKhoanScreen;