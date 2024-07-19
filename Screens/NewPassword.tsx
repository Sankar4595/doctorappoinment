import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
interface INavigate {
  navigation: any;
}
const NewPassword: React.FC<INavigate> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>New Password</Text>
      <Text style={styles.subtitle}>
        Your new password must be different from previously used password{" "}
      </Text>
      <View style={styles.formItem}>
        <Text>New Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.formInput}
          placeholder="New Password"
        />
      </View>
      <View style={styles.formItem}>
        <Text>Confirm Password</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Confirm Password"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CompleteProfile")}
      >
        <Text style={styles.buttonText}>Create New Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    paddingHorizontal: 20,
    marginVertical: 90,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    opacity: 0.5,
  },
  formItem: {
    width: "100%",
    marginBottom: 20,
    display: "flex",
    gap: 10,
  },
  formInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
  button: {
    backgroundColor: "#1e90ff",
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  oauthContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 20,
    gap: 20,
    width: "80%",
  },
  oauthButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  oauthButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  signUpLink: {
    marginTop: 20,
  },
  signUpText: {
    color: "#1e90ff",
    fontSize: 16,
  },
});
export default NewPassword;
