import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RestoData from "../../RestoData.json";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Home() {
  
const navigation = useNavigation();
  const router = useRouter();

  const categories = [
    {
      emoji: "🔥",
      title: "All",
      active: true,
      imageURI: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
    },
    {
      emoji: "🌭",
      title: "Hot Dog",
      imageURI: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
    },
    {
      emoji: "🍔",
      title: "Burger",
      imageURI: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
    },
    {
      emoji: "🍕",
      title: "Pizza",
      imageURI: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
    },
  ];

  const restaurants = RestoData.restos;

  const goToResto = (id: number) => {
    router.push({
      pathname: "/resto/[id]",
      params: { id: String(id) },
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        <View style={styles.container}>
          {/* HEADER */}
          <View style={styles.header}>
          <Pressable
                  style={styles.menuButton}
                  onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                >
              <Feather name="menu" size={20} color="#2D2D2D" />
            </Pressable>

            {/* <View style={styles.notificationWrapper}>
              <View style={styles.notificationBadge}>
                <Text style={styles.notificationText}>2</Text>
              </View>

              <View style={styles.notificationButton}>
                <Ionicons
                  name="notifications-outline"
                  size={22}
                  color="#2D2D2D"
                />
              </View>
            </View> */ }
            <View style={styles.addressContainer}>
              <Text style={styles.deliverText}>DELIVER TO</Text>

              <View style={styles.locationRow}>
                <Text style={styles.locationTitle}>123 Main Street, City</Text>

                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={18}
                  color="#444"
                />
              </View>
            </View>
          </View>

          {/* GREETING */}
          <View style={styles.greetingContainer}>
            <Text style={styles.greetingMain}>
              Missing home? We know a place that tastes like it.
            </Text>
          </View>

          {/* SEARCH */}
          <View style={styles.searchContainer}>
            <Feather name="search" size={20} color="#A5A5A5" />

            <TextInput
              placeholder="Search dishes, restaurants"
              placeholderTextColor="#A5A5A5"
              style={styles.searchInput}
            />
          </View>

          {/* CATEGORY HEADER */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>All Categories</Text>

            <Pressable>
              <Text style={styles.seeAll}>See All</Text>
            </Pressable>
          </View>

          {/* CATEGORIES */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((item, index) => (
              <Pressable
                key={index}
                style={[
                  styles.categoryCard,
                  item.active && styles.activeCategoryCard,
                ]}
              >
                <Image
                  source={{
                    uri: item.imageURI,
                  }}
                  style={styles.categoryImage}
                />

                <Text
                  style={[
                    styles.categoryText,
                    item.active && styles.activeCategoryText,
                  ]}
                >
                  {item.title}
                </Text>
              </Pressable>
            ))}
          </ScrollView>

          {/* RESTAURANTS HEADER */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Open Restaurants</Text>

            <Pressable>
              <Text style={styles.seeAll}>See All</Text>
            </Pressable>
          </View>


          {/* RESTAURANT CARDS */}
          {restaurants.map((item) => (
            <Pressable
              key={item.id}
              style={styles.restaurantCard}
              onPress={() => goToResto(item.id)}
            >
              <Image
                source={{
                  uri: item.image,
                }}
                style={styles.restaurantImage}
              />

              <SafeAreaView style={styles.restaurantContent}>
                <Text style={styles.restaurantTitle}>{item.name}</Text>

                <View style={styles.infoRow}>
                  <View style={styles.infoItem}>
                    <Ionicons name="star" size={16} color="#D26B00" />

                    <Text style={styles.infoText}>{item.rating}</Text>
                  </View>

                  <View style={styles.infoItem}>
                    <Ionicons
                      name="bicycle-outline"
                      size={16}
                      color="#D26B00"
                    />

                    <Text style={styles.infoText}>Free</Text>
                  </View>

                  <View style={styles.infoItem}>
                    <Ionicons name="time-outline" size={16} color="#D26B00" />

                    <Text style={styles.infoText}>{item.time}</Text>
                  </View>
                </View>
              </SafeAreaView>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF7EF",
  },

  container: {
    paddingHorizontal: 20,
    paddingTop: 12,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },

  menuButton: {
    width: 48,
    height: 48,
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },

  notificationWrapper: {
    position: "relative",
  },

  notificationButton: {
    width: 45,
    height: 45,
    borderRadius: 999,
    backgroundColor: "#181C2E",
    justifyContent: "center",
    alignItems: "center",
  },

  notificationBadge: {
    position: "absolute",
    top: -2,
    right: -2,
    zIndex: 10,

    width: 20,
    height: 20,
    borderRadius: 999,
    backgroundColor: "#FF7622",

    justifyContent: "center",
    alignItems: "center",
  },

  notificationText: {
    color: "#FFF",
    fontSize: 11,
    fontWeight: "700",
  },

  addressContainer: {
    marginBottom: 18,
  },

  deliverText: {
    color: "#D26B00",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 0.8,
    marginBottom: 4,
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  locationTitle: {
    fontSize: 14,
    color: "#5E4631",
    fontWeight: "600",
  },

  greetingContainer: {
    marginBottom: 28,
    marginTop: 6,
  },

  greetingName: {
    fontSize: 28,
    fontWeight: "600",
    color: "#1F1305",
    marginBottom: 4,
  },

  greetingMain: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1F1305",
    lineHeight: 36,
  },

  searchContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },

  searchInput: {
    marginLeft: 12,
    flex: 1,
    fontSize: 15,
    color: "#1F1305",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#1F1305",
  },

  seeAll: {
    color: "#D26B00",
    fontSize: 14,
    fontWeight: "700",
  },

  categoryCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
    marginBottom: 32,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },

  activeCategoryCard: {
    backgroundColor: "#FFE5B4",
    shadowColor: "#D26B00",
    shadowOpacity: 0.15,
  },

  categoryEmoji: {
    fontSize: 22,
    marginRight: 10,
  },

  categoryText: {
    fontSize: 15,
    color: "#1F1305",
    fontWeight: "600",
  },

  activeCategoryText: {
    fontWeight: "800",
    color: "#D26B00",
  },

  categoryImage: {
    width: 44,
    height: 44,
    borderRadius: 12,
    marginRight: 10,
  },

  restaurantCard: {
    marginBottom: 28,
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },

  restaurantImage: {
    width: "100%",
    height: 200,
    borderRadius: 0,
    marginBottom: 0,
  },

  restaurantContent: {
    paddingHorizontal: 18,
    paddingVertical: 16,
  },

  restaurantTitle: {
    fontSize: 20,
    color: "#1F1305",
    fontWeight: "800",
    marginBottom: 6,
  },

  restaurantSubtitle: {
    color: "#8C6B52",
    fontSize: 13,
    marginBottom: 14,
    fontWeight: "500",
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  infoItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  infoText: {
    marginLeft: 6,
    color: "#1F1305",
    fontWeight: "700",
    fontSize: 13,
  },
});
