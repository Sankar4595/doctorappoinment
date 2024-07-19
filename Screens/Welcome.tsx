import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

interface INavigate {
  navigation: any;
}
const Welcome: React.FC<INavigate> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.background} source={require("../assets/1.jpg")} />
      <View style={styles.content}>
        <Text style={styles.title}>
          Your <Text style={styles.ultimate}>Ultimate</Text> Doctor
        </Text>
        <Text style={styles.title}>Appointment Booking App</Text>
        <Text style={styles.subtitle}>
          Book appointments effortlessly and manage your health journey
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.buttonText}>Let’s Get Started</Text>
        </TouchableOpacity>
        <Text style={styles.signInText}>
          Already have an account?{" "}
          <Text
            style={styles.signInLink}
            onPress={() => navigation.navigate("SignIn")}
          >
            Sign In
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  ultimate: {
    color: "#1e90ff", // Blue color
  },
  subtitle: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
    marginVertical: 20,
    opacity: 0.5,
  },
  button: {
    backgroundColor: "#1e90ff", // Blue color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  signInText: {
    color: "#000",
    fontSize: 16,
    marginTop: 20,
  },
  signInLink: {
    color: "#1e90ff", // Blue color
    textDecorationLine: "underline",
  },
});

export default Welcome;
