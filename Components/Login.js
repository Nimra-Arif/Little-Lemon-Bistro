import React from "react";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  Button,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  Platform,
  ImageBackground,
} from "react-native";
import { useState , useEffect} from "react";

import Flat_List from "./scroll_view";
import LemonHeader from "./lemon_header";
import { app } from "../firebaseconfig";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Login({ navigation }) {

  const [email, onchangeemail] = React.useState("");
  const [password, onchangepassword] = React.useState("");



  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../assets/lemon_background.jpg")}
      style={{ flex: 1, height: "100%", width: "100%" }}
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/little_lemon_logo.png")}
          resizeMode="cover"
          style={{
            height: 120,
            width: "100%",
            paddingTop: 60,
            alignSelf: "center",
          }}
        />
        <Text style={styles.text_style}>Welcome to little lemon</Text>
        <Text style={styles.text_style2}>Login to continue</Text>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TextInput
            value={email}
            placeholder="Email Address"
            onChangeText={onchangeemail}
            style={styles.input_style}
            placeholderTextColor="grey"
            clearButtonMode="always"
          ></TextInput>
        </KeyboardAvoidingView>
        <KeyboardAvoidingView>
          <TextInput
            value={password}
            placeholder="Password"
            onChangeText={onchangepassword}
            style={styles.input_style}
            placeholderTextColor="grey"
            secureTextEntry={true}
            clearButtonMode="always"
          ></TextInput>

          <Pressable style={styles.button_style} onPress={()=>alert("log in")}>
            <Text style={styles.Button_text}>Login</Text>
          </Pressable>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text_style: {
    color: "black",
    fontSize: 30,
    alignSelf: "center",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  text_style2: {
    color: "black",
    fontSize: 25,
    alignSelf: "center",
    fontStyle: "italic",
    paddingTop: 25,
    fontWeight: "bold",
    paddingBottom: 70,
  },
  input_style: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "white",
    paddingBottom: 10,
  },
  button_style: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    fontSize: 16,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "yellow",
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  Button_text: {
    color: "black",
    fontSize: 10,
    fontSize: 20,
    fontStyle: "italic",
    textAlign: "center",
    fontWeight: "bold",
    justifyContent: "center",
  },
});
