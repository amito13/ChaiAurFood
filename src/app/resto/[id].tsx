import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import RestoData from "../RestoData.json";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

export default function Resto() {
  const { id } = useLocalSearchParams();

  const restaurant = RestoData.restos.find(
    (item) => item.id === Number(id)
  );

  if (!restaurant) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Restaurant not found</Text>
      </View>
    );
  }

  const categories = ["Burger", "Sandwich", "Pizza", "Drinks"];

  const foods = [
    {
      id: 1,
      name: "Burger Ferguson",
      price: "$40",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600",
    },
    {
      id: 2,
      name: "Burger Ferguson",
      price: "$40",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600",
    },
   
  ];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: "#F3F4F6",
      }}
    >
      <View
        style={{
          padding: 20,
        }}
      >
        {/* IMAGE SECTION */}
        <View
          style={{
            position: "relative",
          }}
        >
          <Image
            source={{ uri: restaurant.image }}
            style={{
              width: "100%",
              height: 260,
              borderRadius: 30,
            }}
          />

          {/* BACK BUTTON */}
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 20,
              left: 20,
              width: 45,
              height: 45,
              borderRadius: 50,
              backgroundColor: "#fff",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>

          {/* MENU BUTTON */}
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              width: 45,
              height: 45,
              borderRadius: 50,
              backgroundColor: "#fff",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="ellipsis-horizontal" size={22} color="#000" />
          </TouchableOpacity>
        </View>

        {/* DETAILS */}
        <View
          style={{
            backgroundColor: "#fff",
            marginTop: -20,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            padding: 20,
          }}
        >
          {/* INFO ROW */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 25,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <AntDesign name="star" size={18} color="#FF7A00" />
              <Text style={{ fontWeight: "600" }}>
                {restaurant.rating}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <MaterialCommunityIcons
                name="truck-fast-outline"
                size={20}
                color="#FF7A00"
              />
              <Text style={{ fontWeight: "600" }}>Free</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Ionicons name="time-outline" size={20} color="#FF7A00" />
              <Text style={{ fontWeight: "600" }}>
                {restaurant.time}
              </Text>
            </View>
          </View>

          {/* TITLE */}
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              marginTop: 18,
              color: "#1F2937",
            }}
          >
            {restaurant.name}
          </Text>

          {/* DESCRIPTION */}
          <Text
            style={{
              color: "#9CA3AF",
              lineHeight: 24,
              marginTop: 10,
              fontSize: 15,
            }}
          >
            Maecenas sed diam eget risus varius blandit sit amet
            non magna. Integer posuere erat a ante venenatis.
          </Text>

          {/* CATEGORY BUTTONS */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              marginTop: 25,
            }}
          >
            {categories.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  paddingHorizontal: 22,
                  paddingVertical: 12,
                  backgroundColor:
                    index === 0 ? "#FF8A00" : "#fff",
                  borderRadius: 30,
                  marginRight: 12,
                  borderWidth: 1,
                  borderColor:
                    index === 0 ? "#FF8A00" : "#E5E7EB",
                }}
              >
                <Text
                  style={{
                    color: index === 0 ? "#fff" : "#374151",
                    fontWeight: "600",
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* FOOD SECTION */}
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              marginTop: 30,
              marginBottom: 20,
            }}
          >
            Burger (10)
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {foods.map((food) => (
              <View
                key={food.id}
                style={{
                  width: "48%",
                  backgroundColor: "#fff",
                  borderRadius: 25,
                  padding: 15,
                  shadowColor: "#000",
                  shadowOpacity: 0.05,
                  shadowRadius: 10,
                  elevation: 4,
                }}
              >
                <Image
                  source={{ uri: food.image }}
                  style={{
                    width: "100%",
                    height: 120,
                    resizeMode: "contain",
                  }}
                />

                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "700",
                    marginTop: 10,
                    color: "#1F2937",
                  }}
                >
                  {food.name}
                </Text>

                <Text
                  style={{
                    color: "#9CA3AF",
                    marginTop: 5,
                  }}
                >
                  Spicy Restaurant
                </Text>

                <View
                  style={{
                    marginTop: 15,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    {food.price}
                  </Text>

                  <TouchableOpacity
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 50,
                      backgroundColor: "#FF8A00",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons
                      name="add"
                      size={22}
                      color="#fff"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}