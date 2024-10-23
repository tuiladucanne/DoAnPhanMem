import React from 'react';
import { ScrollView, View, Text, Image, TextInput, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Thêm import cho icon

const { width, height } = Dimensions.get('window'); // Lấy kích thước màn hình

const TrangChuScreen = () => {
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
                <View style={styles.content}>
                    {/* Nội dung khác */}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f0f8ff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
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
        alignItems: 'center',
        paddingVertical: 20,
    },
    content: {
        paddingHorizontal: 20,
    },
});

export default TrangChuScreen;
