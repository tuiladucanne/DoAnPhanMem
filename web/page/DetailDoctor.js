import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DoctorDetailScreen = ({ route, navigation }) => {
  const doctor = route.params.doctor;

  const handleCall = () => {
    Linking.openURL(`tel:${doctor.soDienThoai}`);
  };

  const handleEmail = () => {
    Linking.openURL(`mailto:${doctor.email}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Thông tin bác sĩ</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Doctor Image & Basic Info */}
        <Image 
          source={{ uri: doctor.hinhAnh }} 
          style={styles.doctorImage}
        />

        <View style={styles.infoContainer}>
          {/* Basic Information */}
          <View style={styles.basicInfo}>
            <Text style={styles.degree}>{doctor.bangCap}</Text>
            <Text style={styles.name}>{doctor.tenBacSi}</Text>
            <Text style={styles.specialty}>Chuyên khoa {doctor.chuyenKhoa}</Text>
          </View>

          {/* Contact Buttons */}
          <View style={styles.contactButtons}>
            <TouchableOpacity 
              style={[styles.contactButton, styles.phoneButton]}
              onPress={handleCall}
            >
              <Ionicons name="call" size={20} color="white" />
              <Text style={styles.buttonText}>Gọi điện</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.contactButton, styles.emailButton]}
              onPress={handleEmail}
            >
              <Ionicons name="mail" size={20} color="white" />
              <Text style={styles.buttonText}>Email</Text>
            </TouchableOpacity>
          </View>

          {/* Detailed Information */}
          <View style={styles.detailsContainer}>
            <View style={styles.detailItem}>
              <Ionicons name="briefcase-outline" size={20} color="#666" />
              <Text style={styles.detailText}>
                {doctor.kinhNghiem} năm kinh nghiệm
              </Text>
            </View>

            <View style={styles.detailItem}>
              <Ionicons name="person-outline" size={20} color="#666" />
              <Text style={styles.detailText}>
                Giới tính: {doctor.gioiTinh}
              </Text>
            </View>

            <View style={styles.detailItem}>
              <Ionicons name="calendar-outline" size={20} color="#666" />
              <Text style={styles.detailText}>
                Ngày sinh: {new Date(doctor.ngaySinh).toLocaleDateString('vi-VN')}
              </Text>
            </View>

            <View style={styles.detailItem}>
              <Ionicons name="call-outline" size={20} color="#666" />
              <Text style={styles.detailText}>
                {doctor.soDienThoai}
              </Text>
            </View>

            <View style={styles.detailItem}>
              <Ionicons name="mail-outline" size={20} color="#666" />
              <Text style={styles.detailText}>
                {doctor.email}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  doctorImage: {
    width: 500,
    height: 500,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  infoContainer: {
    padding: 16,
  },
  basicInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  degree: {
    fontSize: 16,
    color: '#2196F3',
    fontWeight: '600',
    marginBottom: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  specialty: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  contactButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
    gap: 16,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    gap: 8,
  },
  phoneButton: {
    backgroundColor: '#2196F3',
  },
  emailButton: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  detailsContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    gap: 12,
  },
  detailText: {
    fontSize: 15,
    color: '#444',
  },
});

export default DoctorDetailScreen;