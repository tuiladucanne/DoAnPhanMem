import React from "react";
import { FlatList, View, Text, StyleSheet, ScrollView } from "react-native";
import axiosInstance from "../../network/axiosInstance";

const NotificationsScreen = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const data = axiosInstance
      .get(`/user/tb?id=${localStorage.getItem("accountId")}`)
      .then((response) => {
        setData(response.data.data);
      });
  }, []);
  // Hàm để hiển thị từng mục trong danh sách
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.TieuDe}</Text>
      <Text style={styles.content}>{item.NoiDung}</Text>
      <Text style={styles.date}>
        Thời gian: {new Date(item.createdAt).toLocaleString()}
      </Text>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  content: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: "#999",
    textAlign: "right",
  },
});

export default NotificationsScreen;
