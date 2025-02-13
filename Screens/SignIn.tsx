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
const SignIn: React.FC<INavigate> = ({ navigation }) => {
  const handleOAuth = (provider: string) => {
    console.log(`Logging in with ${provider}`);
    navigation.navigate("HomeScreen");
  };

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
      <Text style={styles.subtitle}>
        Hi, Welcome back! You have been missed.
      </Text>
      <View style={styles.formItem}>
        <Text>Email</Text>
        <TextInput style={styles.formInput} placeholder="Email" />
      </View>
      <View style={styles.formItem}>
        <Text>Password</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.oauthContainer}>
        <TouchableOpacity
          style={[styles.oauthButton, { backgroundColor: "#db4437" }]}
          onPress={() => handleOAuth("google")}
        >
          <Text style={styles.oauthButtonText}>Sign In with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.oauthButton, { backgroundColor: "#000000" }]}
          onPress={() => handleOAuth("apple")}
        >
          <Text style={styles.oauthButtonText}>Sign In with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.oauthButton, { backgroundColor: "#3b5998" }]}
          onPress={() => handleOAuth("facebook")}
        >
          <Text style={styles.oauthButtonText}>Sign In with Facebook</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.signUpLink} onPress={handleSignUp}>
        <Text
          onPress={() => navigation.navigate("SignUp")}
          style={styles.signUpText}
        >
          Don't have an account? Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
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

export default SignIn;
