import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SectionList,
  SafeAreaView,
  Button,
  Image,
  Pressable,
  FlatList,
  Alert,
  ImageBackground,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import { useState } from "react";
import Feedback from "./feedback";

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: "$5.00" },
      { name: "Moutabal", price: "$5.00" },
      { name: "Falafel", price: "$7.50" },
      { name: "Marinated Olives", price: "$5.00" },
      { name: "Kofta", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00" },
      { name: "Smoked Salmon", price: "$14.00" },
      { name: "Kofta Burger", price: "$11.00" },
      { name: "Turkish Kebab", price: "$15.50" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: "11K" },
      { name: "Buttered Rice", price: "$3.00" },
      { name: "Bread Sticks", price: "$3.00" },
      { name: "Pita Pocket", price: "$3.00" },
      { name: "Lentil Soup", price: "$3.75" },
      { name: "Greek Salad", price: "$6.00" },
      { name: "Rice Pilaf", price: "$4.00" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00" },
      { name: "Tartufo", price: "$3.00" },
      { name: "Tiramisu", price: "$5.00" },
      { name: "Panna Cotta", price: "$5.00" },
    ],
  },
];

const separator = () => (
  <View style={{ borderBottomWidth: 1, padding: 10, borderColor: "#EDEFEE" }} />
);
const flat_header = () => <Text style={styles.header_style}>View Menu</Text>;

const flat_footer = () => (
  <View
    style={{
      backgroundColor: "yellow",
      width: "100%",
      justifyContent: "center",
    }}
  >
    <Text style={{ alignSelf: "center" }}>
      All rights reserved by Little Lemon, 2023
    </Text>
  </View>
);

const Item = ({ name, price }) => (
  <View style={styles.innercontainer_style}>
    <Text style={styles.text_style}>{name}</Text>
    <Text style={styles.text_style}>{price}</Text>
  </View>
);
export default function Flat_List({ navigation }) {
  // const renderItem = ({ item }) => <Item name={item} />;
  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;
  const renderSectionHeader = ({ section: { title } }) => (
    <View style={{ backgroundColor: "yellow" }}>
      <Text style={styles.header_style1}>{title} </Text>
    </View>
  );
  const [showMenu, setShowMenu] = useState(false);
  return (

    <ImageBackground
    resizeMode="cover"
    source={require("../assets/lemon_background.jpg")}
    style={{ flex: 1, height:"100%", width:"100%"}}
  >
    <View style={{ flex: 1 }}>
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
      <View>
        {!showMenu && (
          <Text style={styles.text_style1}>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. View
            our menu to explore our cuisine with daily specials!
          </Text>
        )}
      </View>
      <View
        style={{
          color: "yellow",
          fontSize: 40,
          fontStyle: "italic",
        }}
      >
        <Pressable
          style={styles.button_style}
          onPress={() => setShowMenu(!showMenu)}
        >
          <Text style={styles.Button_text}>
            {showMenu ? "Home" : "View Menu"}
          </Text>
        </Pressable>
        {!showMenu && (
          <Pressable
            style={styles.button_style2}
            onPress={() => navigation.navigate("FeedBack")}
          >
            <Text style={styles.Button_text}>Send us your feedback</Text>
          </Pressable>
        )}
        {showMenu && (
          <SectionList
            keyExtractor={(item, index) => item + index}
            sections={menuItemsToDisplay}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            ItemSeparatorComponent={separator}
            ListHeaderComponent={flat_header}
            ListFooterComponent={flat_footer}
          ></SectionList>
        )}
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header_style: {
    flexWrap: "wrap",
    color: "black",
    fontSize: 40,
    alignSelf: "center",
    fontStyle: "italic",
    borderColor: "yellow",
    borderRadius: 2,
    fontWeight: "bold",
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
    fontSize: 18,
    alignSelf: "center",
    fontStyle: "italic",
    textAlign: "center",
    paddingLeft: 10,
    paddingTop: 25,
    paddingRight: 15,
    paddingBottom: 10,
  },
  text_style1: {
    flexWrap: "wrap",
    color: "black",
    fontSize: 16,
    alignSelf: "center",
    fontStyle: "italic",
    textAlign: "center",
    paddingLeft: 10,
    paddingTop: 25,
    paddingRight: 15,
    paddingBottom: 30,
  },
  button_style: {
    height: 50,
    width: 300,
    backgroundColor: "yellow",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  button_style2: {
    height: 50,
    width: 300,
    backgroundColor: "yellow",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",

    marginBottom: 40,
  },
  Button_text: {
    color: "black",
    fontSize: 26,
    fontWeight: "bold",
    fontStyle: "italic",
  },
});
