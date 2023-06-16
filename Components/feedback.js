import React from "react";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  Image,
  KeyboardAvoidingView,
  ImageBackground,
  ScrollView,
  Platform,
} from "react-native";
import { useColorScheme } from "react-native";

export default function Feedback() {
  const [firstname, onchangefirstname] = React.useState("");
  const [lastname, onchangelastname] = React.useState("");
  const [message, onchangemessage] = React.useState("");
  return (

    <ImageBackground
    resizeMode="cover"
    source={require("../assets/lemon_background.jpg")}
    style={{ flex: 1, height:"100%", width:"100%"}}
  >
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView keyboardDismissMode="on-drag">
      <Image
      source={require("../assets/little_lemon_logo.png")}
      resizeMode="cover"
      style={{
        height: 120,
        width: "100%",
        paddingTop: 50,
        alignSelf: "center",
      }}
    />
        <Text numberOfLines={2} style={styles.header_style}>
          How was your visit to Little lemon??
        </Text>
        <Text style={styles.text_style}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. View our
          menu to explore our cuisine with daily specials!
        </Text>
        <TextInput
          placeholderTextColor="grey"
          value={firstname}
          placeholder="First Name"
          onChangeText={onchangefirstname}
          style={styles.input_style}
        ></TextInput>
        <TextInput
          placeholderTextColor="grey"
          value={lastname}
          placeholder="Last Name"
          onChangeText={onchangelastname}
          style={styles.input_style}
        ></TextInput>

        <TextInput
          placeholderTextColor="grey"
          value={message}
          placeholder="Please leave feedback "
          onChangeText={onchangemessage}
          style={styles.input_style1}
          multiline={true}
          maxLength={250}
        ></TextInput>
      </ScrollView>
    </KeyboardAvoidingView>
    </ImageBackground>  
  );
}

const styles = StyleSheet.create({
  header_style: {
    flexWrap: "wrap",
    color: "black",
    fontSize: 20,
    alignSelf: "center",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  header_style1: {
    flexWrap: "wrap",
    color: "black",
    fontSize: 30,
    alignSelf: "center",
    fontStyle: "italic",
    borderColor: "yellow",
    borderRadius: 2,
    paddingTop: 10,
    paddingBottom: 10,
  },

  innercontainer_style: {
    flexWrap: "wrap",
    color: "yellow",
    fontSize: 40,
    fontStyle: "italic",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text_style: {
    flexWrap: "wrap",
    color: "black",
    fontSize: 15,
    alignSelf: "center",
    fontStyle: "italic",
    paddingLeft: 10,
    paddingRight: 15,
    paddingBottom: 15,
    paddingTop: 30,
    textAlign: "center",
  },
  input_style: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "yellow",
  },
  input_style1: {
    height: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "yellow",
    textAlignVertical: "top",
  },
});
