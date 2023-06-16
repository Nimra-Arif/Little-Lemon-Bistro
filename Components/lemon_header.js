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

export default function LemonHeader() {
  return (
    <SafeAreaView>
      <View style={{ borderBottomWidth: 1, padding: 10, borderColor: "white" , paddingTop:20}} >
    
      </View>
    </SafeAreaView>
  );
}
{/* <Text style={{flexWrap:"wrap", color:"black", fontSize:37,fontWeight:"bold",alignSelf:"center",fontStyle:"italic",justifyContent:"center"   }}>Little Lemon </Text> */}