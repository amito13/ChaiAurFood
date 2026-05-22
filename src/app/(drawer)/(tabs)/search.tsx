import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

import {
  Ionicons,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";

export default function Search() {
  const keywords = [
    "Burger",
    "Sandwich",
    "Pizza",
    "Sandwich",
  ];

  const restaurants = [
    {
      id: 1,
      name: "Pansi Restaurant",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600",
    },
    {
      id: 2,
      name: "American Spicy Burger Shop",
      rating: "4.3",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600",
    },
    {
      id: 3,
      name: "Cafenio Coffee Club",
      rating: "4.0",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600",
    },
  ];

  const popularFoods = [
    {
      id: 1,
      name: "European Pizza",
      subtitle: "Uttora Coffee House",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600",
    },
    {
      id: 2,
      name: "Buffalo Pizza",
      subtitle: "Cafeinio Coffee Club",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600",
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Kuch kahne ka dhoodh rhe</Text>

        <TouchableOpacity style={styles.cartBtn}>
          <Ionicons
            name="bag-handle-outline"
            size={22}
            color="#fff"
          />

          <View style={styles.badge}>
            <Text style={styles.badgeText}>8</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* SEARCH INPUT */}
      <View style={styles.searchBox}>
        <View style={styles.searchLeft}>
          <Feather name="search" size={18} color="#9CA3AF" />

          <TextInput
            placeholder="Pizza"
            placeholderTextColor="#9CA3AF"
            style={styles.input}
          />
        </View>

        <TouchableOpacity>
          <MaterialIcons
            name="cancel"
            size={20}
            color="#D1D5DB"
          />
        </TouchableOpacity>
      </View>

      {/* RECENT KEYWORDS */}
      <Text style={styles.sectionTitle}>Recent Keywords</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 28 }}
      >
        {keywords.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.keywordBtn}
          >
            <Text style={styles.keywordText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* SUGGESTED RESTAURANTS */}
      <Text style={styles.sectionTitle}>
        Suggested Restaurants
      </Text>

      {restaurants.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.restaurantCard}
        >
          <Image
            source={{ uri: item.image }}
            style={styles.restaurantImage}
          />

          <View style={{ flex: 1 }}>
            <Text style={styles.restaurantName}>
              {item.name}
            </Text>

            <View style={styles.ratingRow}>
              <Ionicons
                name="star"
                size={14}
                color="#FF7A00"
              />

              <Text style={styles.ratingText}>
                {item.rating}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}

      {/* POPULAR FOOD */}
      <Text
        style={[
          styles.sectionTitle,
          { marginTop: 25, marginBottom: 20 },
        ]}
      >
        Popular Fast Food
      </Text>

      <View style={styles.foodContainer}>
        {popularFoods.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.foodCard}
          >
            <Image
              source={{ uri: item.image }}
              style={styles.foodImage}
            />

            <Text style={styles.foodName}>{item.name}</Text>

            <Text style={styles.foodSubtitle}>
              {item.subtitle}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 60,
    paddingHorizontal: 22,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 28,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },

  cartBtn: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  badge: {
    position: "absolute",
    top: -3,
    right: -2,
    backgroundColor: "#FF7A00",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  badgeText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "700",
  },

  searchBox: {
    backgroundColor: "#ECEEF3",
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 28,
  },

  searchLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  input: {
    marginLeft: 10,
    flex: 1,
    fontSize: 15,
    color: "#222",
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
    marginBottom: 18,
  },

  keywordBtn: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 22,
    paddingHorizontal: 18,
    paddingVertical: 10,
    marginRight: 12,
    backgroundColor: "#fff",
  },

  keywordText: {
    color: "#444",
    fontWeight: "500",
  },

  restaurantCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
  },

  restaurantImage: {
    width: 62,
    height: 62,
    borderRadius: 16,
    marginRight: 14,
  },

  restaurantName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
    marginBottom: 8,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  ratingText: {
    marginLeft: 6,
    color: "#444",
    fontWeight: "600",
  },

  foodContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 30,
  },

  foodCard: {
    width: "47%",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 24,
    paddingVertical: 20,
  },

  foodImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 14,
  },

  foodName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
    textAlign: "center",
  },

  foodSubtitle: {
    marginTop: 6,
    color: "#9CA3AF",
    fontSize: 13,
    textAlign: "center",
  },
});