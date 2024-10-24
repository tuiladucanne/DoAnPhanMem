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
        backgroundColor: '#4E91B5',
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
        width: 100, // Adjust logo size with percentage
        height: 100,
        aspectRatio: 1,
        marginRight: '2%',
    },
    companyName: {
        fontSize: 65, // Keep the original font size
        fontWeight: 'bold',
    },
    pageTitle: {
        fontSize: 24, // Keep the original font size
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '3%',
    },
    formContainer: {
        alignItems: 'center', // Center items horizontally
    },
    inputContainer: {
        alignItems:'center',
        marginBottom: '1%',
        flexDirection: 'column',
        width: '100%', // Allow the input to take full width of the container
    },
    label: {
        fontSize: 15, // Keep the original font size
        marginBottom: '1%',
    },
    input: {
        height: 50, // Adjust input box height to a smaller value
        width: '50%', // Set to 100% to take full width of the container
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: '5%',
        backgroundColor: '#FFFFFF',
        borderRadius: 15, // Add border radius
        paddingVertical: 5, // Reduce vertical padding
        color: 'black', // Text color
    },
    picker: {
        height: 50, // Adjust picker height to a smaller value
        width: '50%', // Set to 100% to take full width of the container
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: '5%',
        backgroundColor: '#FFFFFF',
        borderRadius: 15, // Add border radius
        paddingVertical: 5, // Reduce vertical padding
        color: 'black', // Text color
    },
    saveButton: {
        alignItems: 'center',
        width: '40%', // Set the width to a percentage of the parent container
        backgroundColor: '#22668E',
        padding: '1%',
        borderRadius: 15,
        marginTop: '2%', // Optional: Add some margin for better spacing
    },
    saveButtonText: {
        fontSize: 16, // Keep the original font size
        color: '#FFFFFF',
        textAlign: 'center',
    },
});

export default ChinhSuaHoSo;  