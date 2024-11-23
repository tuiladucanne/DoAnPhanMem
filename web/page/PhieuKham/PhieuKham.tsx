import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import axiosInstance from "../../network/axiosInstance";

export default function App() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    const data = axiosInstance
      .get(`/user/dangkykhambenh/all?id=${localStorage.getItem("accountId")}`)
      .then((response) => {
        setData(response.data.data);
      });
  }, []);
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.header}>Thông tin lịch khám</Text>

      <View style={styles.section}>
        <Text style={styles.subHeader}>Bác sĩ:</Text>
        <Image source={{ uri: item.BacSiID.hinhAnh }} style={styles.image} />
        <Text>Tên: {item.BacSiID.tenBacSi}</Text>
        <Text>Chuyên khoa: {item.BacSiID.chuyenKhoa}</Text>
        <Text>Bằng cấp: {item.BacSiID.bangCap}</Text>
        <Text>Kinh nghiệm: {item.BacSiID.kinhNghiem} năm</Text>
        <Text>Email: {item.BacSiID.email}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>Bệnh nhân:</Text>
        <Text>Tên: {item.BenhNhanID.Ten}</Text>
        <Text>
          Ngày sinh: {new Date(item.BenhNhanID.NgaySinh).toLocaleDateString()}
        </Text>
        <Text>Địa chỉ: {item.BenhNhanID.DiaChi}</Text>
        <Text>Số điện thoại: {item.BenhNhanID.SDT}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>Bệnh viện:</Text>
        <Image source={{ uri: item.BenhVienID.hinhAnh }} style={styles.image} />
        <Text>Tên: {item.BenhVienID.tenBenhVien}</Text>
        <Text>
          Địa chỉ: {item.BenhVienID.diaChi}, {item.BenhVienID.thanhPho}
        </Text>
        <Text>Website: {item.BenhVienID.website}</Text>
      </View>

      <Text style={styles.footer}>Ngày đặt: {item.NgayDat}</Text>
      <Text style={styles.footer}>Giờ khám: {item.GioKham}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item._id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  section: {
    marginVertical: 8,
  },
  subHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 8,
  },
  footer: {
    marginTop: 8,
    fontStyle: "italic",
    color: "#555",
  },
});
