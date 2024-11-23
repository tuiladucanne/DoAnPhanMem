import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("window");

const RecyclerView = ({ data, onPress }) => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        navigation.navigate("DetailDoctorScreen", {
          doctor: item,
        });
      }}
    >
      <Image source={{ uri: item.hinhAnh }} style={styles.doctorImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.doctorTitle}>{item.bangCap}</Text>
        <Text style={styles.doctorName}>{item.tenBacSi}</Text>
        <Text style={styles.doctorSpecialty}>
          Chuyên khoa {item.chuyenKhoa}
        </Text>
        <Text style={styles.experience}>{item.kinhNghiem} năm kinh nghiệm</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      numColumns={4}
      contentContainerStyle={styles.listContentContainer}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item._id}
    />
  );
};

// RecyclerView cho bệnh viện (hiển thị theo chiều ngang)
const VerticalRecyclerView = ({ data, onPress }) => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() =>{
      navigation.navigate("DetailHospital", {
        hospital: item,
      });
    }}>
      <Image
        source={{ uri: item.hinhAnh }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={2}>
          {item.tenBenhVien}
        </Text>
        <Text style={styles.address} numberOfLines={2}>
          {item.diaChi}, {item.thanhPho}
        </Text>
        <Text style={styles.phone}>{item.soDienThoai}</Text>
        <Text style={styles.description} numberOfLines={1}>
          {item.moTa}
        </Text>
      </View>
    </TouchableOpacity>
  );
  console.log(data);
  // make grid view for hospital
  return (
    <FlatList
      data={data}
      numColumns={4}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
    />
  );
};

const styles = StyleSheet.create({
  listContentContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  itemContainer: {
    width: 160,
    backgroundColor: "white",
    borderRadius: 12,
    marginRight: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  doctorImage: {
    width: "100%",
    height: 160,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  infoContainer: {
    padding: 10,
  },
  doctorTitle: {
    fontSize: 12,
    color: "#2196F3",
    fontWeight: "600",
    marginBottom: 2,
  },
  doctorName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  doctorSpecialty: {
    fontSize: 12,
    color: "#666",
    marginBottom: 2,
  },
  experience: {
    fontSize: 12,
    color: "#888",
    fontStyle: "italic",
  },
  container: {
    backgroundColor: "rgba(196, 234, 250, 0.3)",
    paddingVertical: 10,
  },
  listContentContainer: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    width: width * 0.15,
    backgroundColor: "#ffffff",
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    alignItems: "center",
    justifyContent: "space-between",
  },
  doctorImage: {
    width: width * 0.13,
    height: width * 0.13,
    borderRadius: (width * 0.35) / 2,
    marginBottom: 10,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
    textAlign: "center",
  },
  doctorSpecialty: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  hospitalImage: {
    width: width * 0.13,
    height: width * 0.13,
    borderRadius: 10,
    marginBottom: 10,
  },
  textContainer: {
    alignItems: "center",
  },
  hospitalText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
  },
  item: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 12,
    marginHorizontal: 8,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  infoContainer: {
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 6,
  },
  address: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  phone: {
    fontSize: 14,
    color: "#444",
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    fontStyle: "italic",
    color: "#888",
  },
});

export { RecyclerView, VerticalRecyclerView };
