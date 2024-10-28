import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image, Dimensions, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const { width } = Dimensions.get('window');

const DatKhamNgayScreen = () => {
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [modalVisible, setModalVisible] = useState(false); // Modal state

    const availableDates = ["Ngày 1", "Ngày 2", "Ngày 3", "Ngày 4"];
    const availableTimes = ["08:00", "09:00", "10:00", "11:00"];

    const handleBooking = () => {
        if (selectedDate && selectedTime) {
            setModalVisible(true); // Show modal on successful booking
        } else {
            alert("Vui lòng chọn đầy đủ thông tin ngày và giờ khám.");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/logo6.png')} style={styles.logo} />
                <Text style={styles.headerText}>VOV</Text>
            </View>

            <Text style={styles.pageTitle}>Đặt lịch khám theo ngày</Text>

            <View style={styles.formContainer}>
                {/* Tên người dùng */}
                <View style={styles.inputGroup}>
                    <Ionicons name="person-circle-outline" size={28} color="#1669A2" />
                    <TextInput style={styles.input} value="NGUYỄN THỊ NGỌC HOÀI" editable={false} />
                </View>

                {/* Phòng khám */}
                <View style={styles.inputGroup}>
                    <Ionicons name="location-outline" size={28} color="#1669A2" />
                    <TextInput style={styles.input} value="Bệnh Viện..." editable={false} />
                </View>

                {/* Bác sĩ (cố định) */}
                <View style={styles.inputGroup}>
                    <Ionicons name="person-outline" size={28} color="#1669A2" />
                    <TextInput style={styles.input} value="Bác sĩ A" editable={false} />
                </View>

                {/* Chọn ngày khám */}
                <View style={styles.inputGroup}>
                    <Ionicons name="calendar-outline" size={28} color="#1669A2" />
                    <Picker
                        selectedValue={selectedDate}
                        style={styles.picker}
                        onValueChange={(itemValue) => setSelectedDate(itemValue)}
                    >
                        <Picker.Item label="Chọn ngày khám" value="" />
                        {availableDates.map((date, index) => (
                            <Picker.Item label={date} value={date} key={index} />
                        ))}
                    </Picker>
                </View>

                {/* Chọn giờ khám */}
                <View style={styles.inputGroup}>
                    <Ionicons name="time-outline" size={28} color="#1669A2" />
                    <Picker
                        selectedValue={selectedTime}
                        style={styles.picker}
                        onValueChange={(itemValue) => setSelectedTime(itemValue)}
                    >
                        <Picker.Item label="Chọn giờ khám" value="" />
                        {availableTimes.map((time, index) => (
                            <Picker.Item label={time} value={time} key={index} />
                        ))}
                    </Picker>
                </View>

                {/* Nút Đặt Khám */}
                <TouchableOpacity style={styles.button} onPress={handleBooking}>
                    <Text style={styles.buttonText}>Đặt Khám</Text>
                </TouchableOpacity>
            </View>

            {/* Modal */}
            <Modal
                transparent={true}
                visible={modalVisible}
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Đặt lịch thành công!</Text>
                        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
                            <Text style={styles.buttonText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0f2ff',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        padding: 20,
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
    pageTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        marginVertical: 20,
    },
    formContainer: {
        width: '50%',
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        alignItems: 'center',
    },
    inputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginBottom: 15,
        paddingBottom: 5,
    },
    input: {
        flex: 1,
        fontSize: 18,
        color: '#333',
        paddingLeft: 10,
    },
    picker: {
        flex: 1,
        height: 50,
        fontSize: 18,
    },
    button: {
        backgroundColor: '#1669A2',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    },
    modalContent: {
        width: width*0.2,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default DatKhamNgayScreen;
