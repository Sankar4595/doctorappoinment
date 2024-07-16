import React from "react";
import BaseComponent from "../../components/BaseComponent";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

const Chat = () => {
  const [messages, setMessages] = React.useState<any>([]);

  const handleSend = (text: string | undefined) => {
    const newMessage = {
      id: messages.length + 1,
      text,
      sender: "user", // Assuming user sends the message
      timestamp: new Date().getTime(),
    };
    setMessages([...messages, newMessage]);
  };

  const renderMessage = ({ item }: any) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === "user" ? styles.userMessage : styles.otherMessage,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <BaseComponent>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.scrollContainer}
        inverted // This will display messages from bottom to top
      />
      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          onChangeText={handleSend}
          onSubmitEditing={(event) => handleSend(event.nativeEvent.text)}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </BaseComponent>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    maxWidth: "80%",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C6",
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#E5E5EA",
  },
  messageText: {
    fontSize: 16,
  },
  scrollContainer: {
    paddingHorizontal: 15,
    paddingBottom: 80,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    borderTopWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#1e90ff",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Chat;
