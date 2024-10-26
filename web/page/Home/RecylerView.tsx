import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("window");

interface Doctor {
  name: string;
  specialty: string;
  image: any;
}

interface DataItem {
  image: any;
  text: string;
}

interface RecyclerViewProps {
  data: Doctor[];
  onPress: (item: Doctor) => void;
}

interface VerticalRecyclerViewProps {
  data: DataItem[];
  onPress: (item: DataItem) => void;
}

// RecyclerView cho bác sĩ (theo chiều ngang)
const RecyclerView: React.FC<RecyclerViewProps> = ({ data, onPress }) => {
  const renderItem = ({ item }: { item: Doctor }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onPress(item)}
    >
      <Image source={item.image} style={styles.doctorImage} />
      <View>
        <Text style={styles.doctorName}>{item.name}</Text>
        <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        contentContainerStyle={styles.listContentContainer}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

// RecyclerView cho bệnh viện (hiển thị theo chiều ngang)
const VerticalRecyclerView: React.FC<VerticalRecyclerViewProps> = ({
  data,
  onPress,
}) => {
  const renderItem = ({ item }: { item: DataItem }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onPress(item)}
    >
      <Image source={item.image} style={styles.hospitalImage} />
      <View style={styles.textContainer}>
        <Text style={styles.hospitalText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal // Thêm thuộc tính horizontal để hiển thị theo chiều ngang
        contentContainerStyle={styles.listContentContainer}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `${index}`}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(196, 234, 250, 0.3)",
    paddingVertical: 10,
  },
  listContentContainer: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    width: width * 0.15,
    height: width * 0.18,
    backgroundColor: "#ffffff",
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    alignItems: 'center',
    justifyContent:'space-between'
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
});

export { RecyclerView, VerticalRecyclerView };
