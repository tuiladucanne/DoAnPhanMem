import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import axiosInstance from "../network/axiosInstance";
import Swal from "sweetalert2";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ChangePasswordScreen = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
        Swal.fire({
            icon: "error",
            title: "Lỗi",
            text: "Vui lòng nhập đầy đủ thông tin.",
        })
      return;
    }

    if (newPassword !== confirmPassword) {
        Swal.fire({
            icon: "error",
            title: "Lỗi",
            text: "Mật khẩu xác nhận không khớp.",
        })
      return;
    }

    try {
      const response = await axiosInstance.put("/user/doimatkhau", {
        id: localStorage.getItem("accountId"),
        password: currentPassword,
        newPassword: newPassword,
      });

      Swal.fire({
        icon: "success",
        title: "Thành công",
        text: "Đổi mật khẩu thành công!",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Lỗi",
        text: "Đổi mật khẩu thất bại. Vui lòng thử lại sau.",
      });
    }
  };
const navigation = useNavigation();
  return (
    <View style={styles.container}>
          <View>
        <TouchableOpacity onPress={()=>{
            navigation.goBack();
        }}>
            <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        </View>
      <Text style={styles.title}>Đổi Mật Khẩu</Text>
    

      <TextInput
        style={styles.input}
        placeholder="Nhập mật khẩu hiện tại"
        secureTextEntry
        value={currentPassword}
        onChangeText={setCurrentPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập mật khẩu mới"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Xác nhận mật khẩu mới"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Đổi mật khẩu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ChangePasswordScreen;
