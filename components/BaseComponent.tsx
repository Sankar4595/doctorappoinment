import {
  useNavigation,
  NavigationProp,
  useRoute,
} from "@react-navigation/native";
import React, { ReactNode } from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

interface BaseComponentProps {
  children: ReactNode;
}

const BaseComponent: React.FC<BaseComponentProps> = ({ children }) => {
  const navigation = useNavigation<NavigationProp<any>>();
  const route = useRoute();

  // Function to determine if a screen is active
  const isActive = (screen: string) => {
    return route.name === screen;
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {children}
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <Icon
            name={isActive("HomeScreen") ? "home" : "home-outline"}
            size={30}
            color={isActive("HomeScreen") ? "#1e90ff" : "#000"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Explorer")}>
          <Icon
            name={isActive("Explorer") ? "grid" : "grid-outline"}
            size={30}
            color={isActive("Explorer") ? "#1e90ff" : "#000"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Icon
            name={isActive("Chat") ? "chatbox" : "chatbox-outline"}
            size={30}
            color={isActive("Chat") ? "#1e90ff" : "#000"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Appointment")}>
          <Icon
            name={isActive("Appointment") ? "calendar" : "calendar-outline"}
            size={30}
            color={isActive("Appointment") ? "#1e90ff" : "#000"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Icon
            name={isActive("Profile") ? "person" : "person-outline"}
            size={30}
            color={isActive("Profile") ? "#1e90ff" : "#000"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingHorizontal: 15,
    paddingVertical: 35,
    paddingBottom: 80,
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

export default BaseComponent;
