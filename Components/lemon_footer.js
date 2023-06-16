import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function LemonFooter() {
  return (
    <SafeAreaView>
      <View>
        <Text>All rights reserved by Little Lemon, 2022</Text>
      </View>
    </SafeAreaView>
  );
}
