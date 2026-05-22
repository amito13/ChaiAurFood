import { View, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import RestoData from "../RestoData.json";

export default function Resto() {
  const { id } = useLocalSearchParams();

  const restaurant = RestoData.restos.find(
    (item) => item.id === Number(id)
  );

  if (!restaurant) {
    return (
      <View>
        <Text>Restaurant not found</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Image
        source={{ uri: restaurant.image }}
        style={{
          width: "100%",
          height: 250,
          borderRadius: 20,
        }}
      />

      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginTop: 20,
        }}
      >
        {restaurant.name}
      </Text>

      <Text>⭐ {restaurant.rating}</Text>

      <Text>⏱️ {restaurant.time}</Text>
    </View>
  );
}