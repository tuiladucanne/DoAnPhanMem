import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, ScrollView, TextInput, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importing Ionicons

const ChinhSuaHoSo = () => {
    const [fullName, setFullName] = React.useState('');
    const [gender, setGender] = React.useState(''); // Default value for gender
    const [bornDay, setBornDay] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [email, setEmail] = React.useState('');

    const handleSave = () => {
        // Add your save logic here
        console.log('Save button pressed');
    };

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.leftContainer}>
                    <View style={styles.logoContainer}>
                        <Image source={require('../../assets/logo6.png')} style={styles.logo} />
                        <Text style={styles.companyName}>VOV</Text>
                    </View>
                    <Text style={styles.pageTitle}>Chỉnh sửa hồ sơ</Text>
                    <View style={styles.formContainer}>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Họ và tên</Text>
                            <TextInput
                                style={styles.input}
                                value={fullName}
                                onChangeText={(text) => setFullName(text)}
                                placeholder="Nhập họ và tên"
                                placeholderTextColor="#A9A9A9" // Light grey placeholder
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Giới tính</Text>
                            <Picker
                                selectedValue={gender}
                                style={styles.picker}
                                onValueChange={(itemValue) => setGender(itemValue)}
                            >
                                <Picker.Item label="Chọn giới tính" value="" /> {/* Placeholder item */}
                                <Picker.Item label="Nam" value="male" />
                                <Picker.Item label="Nữ" value="female" />
                            </Picker>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Ngày sinh</Text>
                            <TextInput
                                style={styles.input}
                                value={bornDay}
                                onChangeText={(text) => setBornDay(text)}
                                placeholder="Nhập ngày sinh"
                                placeholderTextColor="#A9A9A9" // Light grey placeholder
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Địa chỉ</Text>
                            <TextInput
                                style={styles.input}
                                value={address}
                                onChangeText={(text) => setAddress(text)}
                                placeholder="Nhập địa chỉ"
                                placeholderTextColor="#A9A9A9" // Light grey placeholder
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label }>Số điện thoại</Text>
                            <TextInput
                                style={styles.input}
                                value={phoneNumber}
                                onChangeText={(text) => setPhoneNumber(text)}
                                placeholder="Nhập số điện thoại"
                                placeholderTextColor="#A9A9A9" // Light grey placeholder
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                style={styles.input}
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                                placeholder="Nhập email"
                                placeholderTextColor="#A9A9A9" // Light grey placeholder
                            />
                        </View>
                        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                            <Text style={styles.saveButtonText}>Lưu</Text>
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
        backgroundColor: '#e0f2ff',
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
    pageTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '3%',
    },
    formContainer: {
        alignItems: 'center',
        width: '100%',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%', // Rộng hơn một chút so với form container
        marginBottom: 20, // Khoảng cách giữa các input
    },
    label: {
        fontSize: 18, // Font size lớn hơn
        width: '30%', // Label chiếm 30% chiều rộng
        textAlign: 'left', // Căn label sang bên trái
        color: '#000',
    },
    input: {
        height: 60, // Input box cao hơn một chút
        width: '70%', // Input chiếm 70% chiều rộng
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 15,
        backgroundColor: '#FFFFFF',
        borderRadius: 10, // Bo tròn các góc
        color: 'black', 
    },
    picker: {
        height: 60,
        width: '70%',
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 15,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        color: 'black', 
    },
    saveButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%', // Nút "Lưu" nhỏ hơn
        backgroundColor: '#22668E',
        paddingVertical: 10, // Khoảng cách trên và dưới của nút
        borderRadius: 15,
        marginTop: 20,
        alignSelf: 'center', // Căn giữa nút
    },
    saveButtonText: {
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: 'center',
    },
});


export default ChinhSuaHoSo;  