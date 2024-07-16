import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

const CompleteProfile = ({ navigation }: any) => {
  const [gender, setGender] = useState("male");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Complete Your Profile</Text>
      <Text style={styles.subtitle}>
        Don't worry, only you can see your personal data. No one else will be
        able to see it.
      </Text>
      <View style={styles.imageUploadContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.image}
        />
        <TouchableOpacity style={styles.imageUploadButton}>
          <Text style={styles.imageUploadButtonText}>Upload Image</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formItem}>
        <Text>Name</Text>
        <TextInput style={styles.formInput} placeholder="Name" />
      </View>
      <View style={styles.formItem}>
        <Text>Phone Number</Text>
        <TextInput style={styles.formInput} placeholder="Phone Number" />
      </View>
      <View style={styles.formItem}>
        <Text>Gender</Text>
        <Picker
          selectedValue={gender}
          style={styles.formInput}
          onValueChange={(itemValue: React.SetStateAction<string>) =>
            setGender(itemValue)
          }
        >
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={styles.buttonText}>Save Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
  imageUploadContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  imageUploadButton: {
    backgroundColor: "#1e90ff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  imageUploadButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
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
});

export default CompleteProfile;
