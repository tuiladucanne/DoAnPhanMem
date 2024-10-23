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

const { width, height } = Dimensions.get("window");

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

const VerticalRecyclerView: React.FC<VerticalRecyclerViewProps> = ({
  data,
  onPress,
}) => {
  const renderItem = ({ item }: { item: DataItem }) => (
    <TouchableOpacity
      style={styles.verticalItemContainer}
      onPress={() => onPress(item)}
    >
      <Image source={item.image} style={styles.verticalItemImage} />
      <View style={styles.verticalTextContainer}>
        <Text style={styles.verticalItemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.verticalContainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${index}`}
        contentContainerStyle={styles.verticalListContentContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(196, 234, 250, 0.3)",
  },
  listContentContainer: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    width: width * 0.42,
    height: width * 0.57,
    backgroundColor: "#ffffff",
    padding: 10,
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
    width: width * 0.35,
    height: width * 0.35,
    borderRadius: (width * 0.35) / 2,
    marginBottom: 10,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
    textAlign: "center",
  },
  doctorSpecialty: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  verticalContainer: {
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 10,
  },
  verticalListContentContainer: {
    paddingBottom: 20,
  },
  verticalItemContainer: {
    height: width * 0.35,
    flexDirection: "row",
    backgroundColor: "rgba(196, 234, 250, 0.3)",
    marginVertical: 4,
    borderRadius: width * 0.04,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  verticalItemImage: {
    width: width * 0.5,
    height: width * 0.35,
    borderRadius: width * 0.04,
    marginRight: 2,
  },
  verticalTextContainer: {
    flex: 1,
    marginVertical: 3,
    paddingHorizontal: 10,
  },
  verticalItemText: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
    flexWrap: "wrap",
    paddingTop: 7,
    textAlign: "justify",
    lineHeight: 20,
  },
});

export { RecyclerView, VerticalRecyclerView };
