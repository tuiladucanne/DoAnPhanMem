import React, { useState } from "react";
import { Text, View, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, ScrollView, TextInput, Alert } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const EditThongTinDatLichScreen = () => {
  const [name, setName] = useState('');
  const [selectedSex, setSelectedSex] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const options = ['Nam', 'Nữ'];

  const pickSex = (option: string) => {
    setSelectedSex(option);
  };

  const saveProfile = () => {
    if (!selectedSex) {
      Alert.alert('Lỗi', 'Vui lòng chọn giới tính');
      return;
    }
    if (!dob.trim()) {
      Alert.alert('Lỗi', 'Vui lòng nhập ngày sinh');
      return;
    }
    if (!address.trim()) {
      Alert.alert('Lỗi', 'Vui lòng nhập địa chỉ');
      return;
    }
    if (phone.trim().length !== 10) {
      Alert.alert('Lỗi', 'Số điện thoại phải có đúng 10 số');
      return;
    }
    if (!email.trim().includes('@')) {
      Alert.alert('Lỗi', 'Email phải có định dạng đúng');
      return;
    }
    console.log('Lưu thông tin vào cơ sở dữ liệu');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons
            name="arrow-back"
            size={RFPercentage(4)}
            color="#FFFFFF"
            style={styles.headerIcon}
          />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Chỉnh sửa hồ sơ</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Họ và tên<Text style={styles.required}> *</Text>:</Text>
            <TextInput 
              style={styles.input}
              placeholder="Nhập họ tên"
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Giới tính:</Text>
            <View style={styles.genderContainer}>
              {options.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.genderItem,
                    selectedSex === option && styles.selectedGenderItem,
                  ]}
                  onPress={() => pickSex(option)}
                >
                  <Text style={[styles.genderText, { fontSize: RFPercentage(2.5) }]}>
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Ngày sinh<Text style={styles.required}> *</Text>:</Text>
            <TextInput 
              style={styles.input}
              placeholder="Nhập ngày sinh"
              value={dob}
              onChangeText={setDob}
              onBlur={() => {
                if (!dob.trim()) {
                  Alert.alert('Lỗi', 'Vui lòng nhập ngày sinh');
                }
              }}
            />
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Địa chỉ:</Text>
            <TextInput 
              style={styles.input}
              placeholder="Nhập địa chỉ"
              value={address}
              onChangeText={setAddress}
              onBlur={() => {
                if (!address.trim()) {
                  Alert.alert('Lỗi', 'Vui lòng nhập địa chỉ');
                }
              }}
            />
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Số điện thoại:</Text>
            <TextInput 
              style={styles.input}
              placeholder="Nhập số điện thoại"
              value={phone}
              keyboardType="numeric"
              onChangeText={setPhone}
              onBlur={() => {
                if (phone.trim().length !== 10) {
                  Alert.alert('Lỗi', 'Số điện thoại phải có đúng 10 số');
                }
              }}
            />
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.label}>Email:</Text>
            <TextInput 
              style={styles.input}
              placeholder="Nhập email"
              value={email}
              onChangeText={setEmail}
              onBlur={() => {
                if (!email.trim().includes('@')) {
                  Alert.alert('Lỗi', 'Email phải có định dạng đúng');
                }
              }}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={saveProfile}>
            <Text style={styles.buttonText}>Lưu</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: width * 0.05,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: height * 0.02,
    paddingTop: height * 0.02,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: height * 0.01,
    backgroundColor: "#22668E",
    paddingHorizontal: width * 0.03,
  },
  headerIcon: {},
  headerTitleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: RFPercentage(2.5),
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  infoContainer: {
    width: width * 0.9,
  },
  infoItem: {
    flexDirection: "column", 
    alignItems: "flex-start", 
    marginBottom: height * 0.02, 
    borderWidth: 1,
    borderColor: "#C0C0C0",
    borderRadius: 5,
    padding: width * 0.02,
  },
  label: {
    fontSize: RFPercentage(2.5),
    marginBottom: height * 0.01, 
  },
  required: {
    color: 'red',
  },
  input: {
    flex: 1,
    fontSize: RFPercentage(2.2),
  },
  genderContainer: {
    flexDirection: "row",
    marginTop: height * 0.01,
  },
  genderItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: width * 0.02,
    borderWidth: 1,
    borderColor: "#C0C0C0",
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.01,
    borderRadius: 5,
  },
  selectedGenderItem: {
    backgroundColor: "#22668E",
  },
  genderText: {
    fontSize: RFPercentage(2.2),
    marginLeft: width * 0.01,
  },
  buttonContainer: {
    width: width * 0.9,
    marginVertical: height * 0.02,
  },
  button: {
    backgroundColor: "#22668E",
    borderRadius: 10,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.1,
    alignItems: "center",
    marginVertical: height * 0.01,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: RFPercentage(2),
    fontWeight: "bold",
  },
});

export default EditThongTinDatLichScreen;
