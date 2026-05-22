import { StyleSheet, Text, View } from "react-native";
import Profile from "../(drawer)/(tabs)/profile"
export default function Test() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Test Drawer Screen</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 24,
    fontWeight: "700",
  },
});