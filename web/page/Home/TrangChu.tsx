import React from 'react';
import { ScrollView, View, Text, Image, TextInput, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RecyclerView, VerticalRecyclerView } from './RecylerView'; // Import các RCV đã viết
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const TrangChuScreen = () => {
    // Dữ liệu mẫu cho bác sĩ và bệnh viện
    const doctorsData = [
        { name: 'Dr. John Doe', specialty: 'Cardiologist', image: require('../../assets/Home/Dr1.png') },
        { name: 'Dr. Jane Smith', specialty: 'Pediatrician', image: require('../../assets/Home/Dr2.png') },
    ];

    const hospitalsData = [
        { text: 'Bệnh viện Đa khoa Quốc tế', image: require('../../assets/Home/BachMai.jpg') },
        { text: 'Bệnh viện Hữu nghị Việt Đức', image: require('../../assets/Home/BachMai.jpg') },
    ];

    const handleDoctorPress = (doctor) => {
        console.log('Selected doctor:', doctor);
    };

    const handleHospitalPress = (hospital) => {
        console.log('Selected hospital:', hospital);
    };

    const handleMenuPress = (menu) => {
        console.log('Selected menu:', menu);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Image 
                        source={require('../../assets/logo6.png')} 
                        style={styles.logo} 
                    />
                    <Text style={styles.headerText}>VOV</Text>
                </View>
                <View style={styles.searchContainer}>
                    <Icon name="search" size={20} color="#777" style={styles.searchIcon} />
                    <TextInput 
                        style={styles.searchInput} 
                        placeholder="Tìm bác sĩ,...." 
                        placeholderTextColor="#777"
                    />
                </View>
            </View>
            
            <ScrollView contentContainerStyle={styles.container}>
                {/* Menu với các nút */}
                <View style={styles.menuContainer}>
                    <TouchableOpacity style={styles.menuButton} onPress={() => handleMenuPress('Hồ sơ')}>
                        <Image source={require('../../assets/Home/Hoso.png')} style={styles.menuIcon} />
                        <Text style={styles.menuText}>Hồ sơ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuButton} onPress={() => handleMenuPress('Kết quả')}>
                        <Image source={require('../../assets/Home/KetQua.png')} style={styles.menuIcon} />
                        <Text style={styles.menuText}>Kết quả</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuButton} onPress={() => handleMenuPress('Bác sĩ AI')}>
                        <Image source={require('../../assets/Home/AI.png')} style={styles.menuIcon} />
                        <Text style={styles.menuText}>Bác sĩ AI</Text>
                    </TouchableOpacity>
                </View>

                {/* Dòng tiêu đề bác sĩ nổi bật */}
                <View style={styles.highlightedDoctorsHeader}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <MaterialIcons name="star" size={width * 0.04} color="#FFCC66" />
                        <Text style={styles.highlightedDoctorsTitle}>Bác sĩ nổi bật</Text>
                    </View>
                    <TouchableOpacity style={styles.viewMoreButton}>
                        <Text style={styles.viewMoreText}>Xem Thêm</Text>
                        <MaterialIcons name="chevron-right" size={width * 0.04} color="#22668E" />
                    </TouchableOpacity>
                </View>

                {/* RecyclerView cho bác sĩ */}
                <RecyclerView data={doctorsData} onPress={handleDoctorPress} />

                {/* Dòng tiêu đề bệnh viện */}
                <View style={styles.highlightedDoctorsHeader}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <MaterialIcons name="star" size={width * 0.04} color="#FFCC66" />
                        <Text style={styles.highlightedDoctorsTitle}>Bệnh viện nổi bật </Text>
                    </View>
                    <TouchableOpacity style={styles.viewMoreButton}>
                        <Text style={styles.viewMoreText}>Xem Thêm</Text>
                        <MaterialIcons name="chevron-right" size={width * 0.04} color="#22668E" />
                    </TouchableOpacity>
                </View>

                {/* RecyclerView cho bệnh viện */}
                <VerticalRecyclerView data={hospitalsData} onPress={handleHospitalPress} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#e0f2ff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#e0f2ff',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: width * 0.08,
        height: width * 0.08,
        marginRight: 15,
    },
    headerText: {
        fontSize: width * 0.05,
        fontWeight: 'bold',
        color: '#333',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        height: height * 0.06,
        width: width * 0.4,
        marginLeft: width * 0.1,
        borderColor: '#ccc',
        borderWidth: 0.001,
        paddingHorizontal: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: '100%',
        paddingLeft: 5,
    },
    container: {
        alignItems: 'flex-start',
        paddingVertical: 20,
    },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: width* 0.7, // Thu hẹp chiều rộng để thụt vào
        alignSelf: 'center', // Căn giữa trong parent
        paddingVertical: 15,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginBottom: width * 0.05,
    },
    menuButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuIcon: {
        width: width * 0.05, // Giảm kích thước icon
        height: width * 0.05,
        marginBottom: 5,
    },
    menuText: {
        fontSize: 12, // Giảm kích thước văn bản
        color: '#333',
        fontWeight: 'bold',
    },
    highlightedDoctorsHeader: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 10,
        marginTop:width * 0.05,
    },
    highlightedDoctorsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 5,
    },
    viewMoreButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewMoreText: {
        color: '#22668E',
        fontSize: 14,
        marginRight: 5,
    },
});

export default TrangChuScreen;
