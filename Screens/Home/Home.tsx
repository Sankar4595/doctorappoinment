import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import BaseComponent from "../../components/BaseComponent";
interface INavigate {
  navigation: any;
}
const HomeScreen: React.FC<INavigate> = ({ navigation }) => {
  return (
    <BaseComponent>
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <Icon name="location-outline" size={24} color="#000" />
          <Text style={styles.locationText}>New York, USA</Text>
          <Icon name="chevron-down-outline" size={24} color="#000" />
        </View>
        <Icon name="notifications-outline" size={24} color="#000" />
      </View>

      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="options-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Upcoming Schedule</Text>
        <TouchableOpacity>
          <Text style={styles.sectionLink}>See all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.scheduleCard}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.doctorImage}
        />
        <View style={styles.scheduleDetails}>
          <Text style={styles.doctorName}>Dr. Jordan Simon</Text>
          <Text style={styles.consultationType}>Surgeon Consultation</Text>
          <View style={styles.scheduleInfo}>
            <Icon name="calendar-outline" size={16} color="#fff" />
            <Text style={styles.scheduleText}>25 January, Thursday</Text>
          </View>
          <View style={styles.scheduleInfo}>
            <Icon name="time-outline" size={16} color="#fff" />
            <Text style={styles.scheduleText}>09:00 AM - 10:00 PM</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.callButton}>
          <Icon name="call-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Doctor Specialty</Text>
        <TouchableOpacity>
          <Text style={styles.sectionLink}>See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal style={styles.specialtyContainer}>
        {["Dentist", "Neurologist", "Orthopadic", "Sergeon"].map(
          (specialty, index) => (
            <View key={index} style={styles.specialtyCard}>
              <Icon name="medical-outline" size={40} color="#1e90ff" />
              <Text style={styles.specialtyText}>{specialty}</Text>
            </View>
          )
        )}
      </ScrollView>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Nearby Hospitals</Text>
        <TouchableOpacity>
          <Text style={styles.sectionLink}>See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal style={styles.hospitalContainer}>
        {["Elevate Dental Hospital", "Maxlife Healthcare"].map(
          (hospital, index) => (
            <View key={index} style={styles.hospitalCard}>
              <Image
                source={{ uri: "https://via.placeholder.com/150" }}
                style={styles.hospitalImage}
              />
              <View style={styles.hospitalDetails}>
                <Text style={styles.hospitalName}>{hospital}</Text>
                <Text style={styles.hospitalLocation}>New York, USA</Text>
                <View style={styles.hospitalRating}>
                  <Icon name="star" size={16} color="#ffd700" />
                  <Text style={styles.ratingText}>4.5</Text>
                </View>
              </View>
            </View>
          )
        )}
      </ScrollView>
    </BaseComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingHorizontal: 15,
    marginVertical: 35,
    paddingBottom: 80,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    marginHorizontal: 5,
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
  searchButton: {
    marginLeft: 10,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionLink: {
    color: "#1e90ff",
    fontSize: 14,
  },
  scheduleCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e90ff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  scheduleDetails: {
    flex: 1,
    marginLeft: 10,
  },
  doctorName: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  consultationType: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 5,
  },
  scheduleInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  scheduleText: {
    color: "#fff",
    marginLeft: 5,
    fontSize: 14,
  },
  callButton: {
    backgroundColor: "#32cd32",
    padding: 10,
    borderRadius: 50,
  },
  specialtyContainer: {
    marginBottom: 20,
  },
  specialtyCard: {
    alignItems: "center",
    marginRight: 20,
  },
  specialtyText: {
    marginTop: 10,
    fontSize: 14,
  },
  hospitalContainer: {
    marginBottom: 20,
  },
  hospitalCard: {
    width: 200,
    marginRight: 20,
  },
  hospitalImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  hospitalDetails: {
    marginTop: 10,
  },
  hospitalName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  hospitalLocation: {
    color: "#777",
    fontSize: 14,
  },
  hospitalRating: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    borderTopWidth: 1,
    borderColor: "#ccc",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
  },
});

export default HomeScreen;
