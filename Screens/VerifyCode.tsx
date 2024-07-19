import React, { useState, useRef } from "react";
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputKeyPressEventData,
  TouchableOpacity,
  View,
} from "react-native";
interface INavigate {
  navigation: any;
}
const VerifyCode: React.FC<INavigate> = ({ navigation }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const refs: any = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 3) {
      refs[index + 1].current.focus();
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      refs[index - 1].current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Verify Code</Text>
      <Text style={styles.subtitle}>
        Please enter the code we just sent to your email
      </Text>
      <View style={styles.formItem}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={refs[index]}
            style={styles.formInput}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            keyboardType="numeric"
            maxLength={1}
          />
        ))}
      </View>
      <View style={styles.subText}>
        <Text style={styles.otpMess}>Didn't receive OTP?</Text>
        <Text style={styles.otpText}>Resend code</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("NewPassword")}
      >
        <Text style={styles.buttonText}>Verify</Text>
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
  formItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  formInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    textAlign: "center",
    paddingHorizontal: 10,
    height: 40,
    width: 40,
    fontSize: 18,
  },
  subText: {
    flexDirection: "row",
    alignItems: "center",
  },
  otpMess: {
    opacity: 0.5,
  },
  otpText: {
    color: "#1e90ff",
    textDecorationLine: "underline",
    marginLeft: 5,
  },
});

export default VerifyCode;
