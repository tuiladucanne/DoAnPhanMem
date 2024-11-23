import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HospitalDetailScreen = ({ route, navigation }) => {
  const { hospital } = route.params;

  const handleCall = () => {
    Linking.openURL(`tel:${hospital.soDienThoai}`);
  };

  const handleEmail = () => {
    Linking.openURL(`mailto:${hospital.email}`);
  };

  const handleWebsite = () => {
    Linking.openURL(`https://${hospital.website}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chi tiết bệnh viện</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: hospital.hinhAnh }}
          style={styles.hospitalImage}
          resizeMode="cover"
        />

        <View style={styles.infoContainer}>
          {/* Basic Info */}
          <View style={styles.basicInfo}>
            <Text style={styles.hospitalName}>{hospital.tenBenhVien}</Text>
            <Text style={styles.description}>{hospital.moTa}</Text>
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

            <TouchableOpacity
              style={[styles.contactButton, styles.websiteButton]}
              onPress={handleWebsite}
            >
              <Ionicons name="globe" size={20} color="white" />
              <Text style={styles.buttonText}>Website</Text>
            </TouchableOpacity>
          </View>

          {/* Detailed Information */}
          <View style={styles.detailsContainer}>
            <View style={styles.detailItem}>
              <Ionicons name="location-outline" size={20} color="#666" />
              <Text style={styles.detailText}>
                {hospital.diaChi}, {hospital.thanhPho}
              </Text>
            </View>

            <View style={styles.detailItem}>
              <Ionicons name="call-outline" size={20} color="#666" />
              <Text style={styles.detailText}>{hospital.soDienThoai}</Text>
            </View>

            <View style={styles.detailItem}>
              <Ionicons name="mail-outline" size={20} color="#666" />
              <Text style={styles.detailText}>{hospital.email}</Text>
            </View>

            <View style={styles.detailItem}>
              <Ionicons name="globe-outline" size={20} color="#666" />
              <Text style={styles.detailText}>{hospital.website}</Text>
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
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 16,
  },
  hospitalImage: {
    width: "100%",
    height: 250,
  },
  infoContainer: {
    padding: 16,
  },
  basicInfo: {
    marginBottom: 20,
  },
  hospitalName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#666",
    fontStyle: "italic",
  },
  contactButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 24,
  },
  contactButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    gap: 8,
  },
  phoneButton: {
    backgroundColor: "#2196F3",
  },
  emailButton: {
    backgroundColor: "#4CAF50",
  },
  websiteButton: {
    backgroundColor: "#FF9800",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
  detailsContainer: {
    backgroundColor: "#f8f9fa",
    borderRadius: 12,
    padding: 16,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    gap: 12,
  },
  detailText: {
    fontSize: 15,
    color: "#444",
    flex: 1,
  },
});

export default HospitalDetailScreen;
