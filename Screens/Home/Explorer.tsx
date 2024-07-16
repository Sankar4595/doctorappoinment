import React from "react";
import BaseComponent from "../../components/BaseComponent";
import { StyleSheet, Text, View } from "react-native";

const Explorer = () => {
  return (
    <BaseComponent>
      <View>
        <Text>Explorer</Text>
      </View>
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
export default Explorer;
