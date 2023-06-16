import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Button,
  Image,
  ImageBackground,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { useColorScheme } from "react-native";

import LemonHeader from "./Components/lemon_header";
import Flat_List from "./Components/scroll_view";
import Feedback from "./Components/feedback";
import Login from "./Components/Login";

const stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();

export default function App() {
  const colorScheme = useColorScheme();
  const DB="mongodb+srv://user1:user1@cluster0.saaqbyq.mongodb.net/db1?retryWrites=true&w=majority"
  return (
    <View
      style={[
        styles.container,
        colorScheme === "light"
          ? { backgroundColor: "whiite" }
          : { backgroundColor: "white" },
      ]}
    >
      <NavigationContainer>
        <tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "login") {
                iconName = "ios-log-in";
              } else if (route.name === "Menu") {
                iconName = "ios-list";
              } else if (route.name === "FeedBack") {
                iconName = "ios-chatbubble";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <tab.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
          <tab.Screen
            name="Menu"
            component={Flat_List}
            options={{ headerShown: false }}
          />
          <tab.Screen
            name="FeedBack"
            component={Feedback}
            options={{ headerShown: false }}
          />
        </tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "white",
    paddingTop: 60,
  },
});

/// stacked navigation

{
  /* <NavigationContainer >
<stack.Navigator
  initialRouteName="login"
  screenOptions={{
    headerStyle: { backgroundColor: "white" },
    contentContainerStyle: { backgroundColor: "black" },
  }}
  
>
  <stack.Screen
    name="login"
    component={Login}
    options={{ headerShown: false }}
    
  />
  <stack.Screen name="Menu" component={Flat_List}
  

  />
  <stack.Screen name="FeedBack" component={Feedback} />
</stack.Navigator>
</NavigationContainer> */
}
