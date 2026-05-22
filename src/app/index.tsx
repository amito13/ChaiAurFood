import { Link } from "expo-router";
import { Text, View, StyleSheet, Pressable} from "react-native";
import OnBoarding from "./onBoarding";
export default function Index() {
  return ( <OnBoarding /> );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
