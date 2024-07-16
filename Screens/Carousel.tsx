import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

const Carousel = ({ navigation }: any) => {
  const scrollViewRef: any = useRef<ScrollView>(null);

  // Array of carousel items with their respective navigation targets
  const carouselItems = [
    {
      title: "Your Ultimate Doctor",
      subtitle: "Book appointments effortlessly and manage your health journey",
      targetScreen: "Home",
    },
    {
      title: "Your Ultimate Lawyer",
      subtitle:
        "Book legal consultations effortlessly and manage your legal journey",
      targetScreen: "LawyerScreen",
    },
    {
      title: "Your Ultimate Tutor",
      subtitle:
        "Book tutoring sessions effortlessly and manage your learning journey",
      targetScreen: "TutorScreen",
    },
  ];

  const handleNext = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: scrollViewRef.current.contentOffset.x + 300,
        animated: true,
      });
    }
  };

  const handlePrev = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: scrollViewRef.current.contentOffset.x - 300,
        animated: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {carouselItems.map((item, index) => (
          <View>
            <Image
              style={styles.background}
              source={require("../assets/1.jpg")}
            />
            <View key={index} style={[styles.content, { width: 300 }]}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate(item.targetScreen)}
              >
                <Text style={styles.buttonText}>Let’s Get Started</Text>
              </TouchableOpacity>
              <Text style={styles.signInText}>
                Skip to{" "}
                <Text
                  style={styles.signInLink}
                  onPress={() => navigation.navigate("SignIn")}
                >
                  Sign In
                </Text>
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.navigation}>
        <TouchableOpacity style={styles.arrowButton} onPress={handlePrev}>
          <Text style={styles.arrowText}>{"<"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrowButton} onPress={handleNext}>
          <Text style={styles.arrowText}>{">"}</Text>
        </TouchableOpacity>
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
  subtitle: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    marginVertical: 10,
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
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  arrowButton: {
    backgroundColor: "#1e90ff", // Blue color
    padding: 10,
    borderRadius: 20,
  },
  arrowText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Carousel;
