import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const DatKhamScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/logo6.png')} style={styles.logo} />
                <Text style={styles.headerText}>VOV</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.pageTitle}>Đặt lịch khám</Text>

                <View style={styles.optionsContainer}>
                    {/* Khám theo ngày */}
                    <TouchableOpacity style={styles.optionCard}
                          onPress={() => props.navigation.navigate("DatKhamNgayScreen")}>
                        <Image source={require('../../assets/Datlich/Date.jpg')} style={styles.optionIcon} />
                        <Text style={styles.optionTitle}>Đặt lịch Khám theo ngày</Text>
                        <Text style={styles.optionDescription}>Đặt lịch khám bệnh theo ngày tại các bệnh viện</Text>
                    </TouchableOpacity>

                    {/* Khám theo Bác sĩ */}
                    <TouchableOpacity style={styles.optionCard}
                     onPress={() => props.navigation.navigate("DatKhamBSScreen")}>
                        <Image source={require('../../assets/Datlich/Doctor.jpg')} style={styles.optionIcon} />
                        <Text style={styles.optionTitle}>Đặt lịch Khám theo Bác sĩ</Text>
                        <Text style={styles.optionDescription}>Đặt lịch khám bệnh theo bác sĩ tại các bệnh viện</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0f2ff',
        alignItems: 'center', // Căn giữa nội dung từ tiêu đề trở xuống
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start', // Đặt header ở góc trên bên trái
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    logo: {
        width: width * 0.08,
        height: width * 0.08,
        marginRight: 10,
    },
    headerText: {
        fontSize: width * 0.05,
        fontWeight: 'bold',
        color: '#000',
    },
    content: {
        flex: 1,
        alignItems: 'center', // Căn giữa theo chiều ngang
        width: '100%',
        paddingTop:'auto',
    },
    pageTitle: {
        fontSize: width*0.02,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 30,
        textAlign: 'center',
    },
    optionsContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    optionCard: {
        width: width*0.3,
        height: width*0.2,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    optionIcon: {
        width: width*0.08,
        height: width*0.08,
        marginBottom: 10,
    },
    optionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1669A2',
        textAlign: 'center',
        marginTop: 15,
    },
    optionDescription: {
        fontSize: 20,
        color: '#666',
        textAlign: 'center',
    },
});

export default DatKhamScreen;
