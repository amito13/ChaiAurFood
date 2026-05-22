import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function Orders() {
  const [activeTab, setActiveTab] = useState("ongoing");

  const ongoingOrders = [
    {
      id: 1,
      category: "Food",
      name: "Pizza Hut",
      price: "$35.25",
      items: "03 Items",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600",
      orderId: "#162432",
    },
    {
      id: 2,
      category: "Drink",
      name: "McDonald",
      price: "$40.15",
      items: "02 Items",
      image:
        "https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=600",
      orderId: "#242432",
    },
    {
      id: 3,
      category: "Drink",
      name: "Starbucks",
      price: "$10.20",
      items: "01 Items",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600",
      orderId: "#240112",
    },
  ];

  const historyOrders = [
    {
      id: 1,
      category: "Food",
      status: "Completed",
      name: "Pizza Hut",
      price: "$35.25",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600",
      orderId: "#162432",
    },
    {
      id: 2,
      category: "Drink",
      status: "Completed",
      name: "McDonald",
      price: "$40.15",
      image:
        "https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=600",
      orderId: "#242432",
    },
    {
      id: 3,
      category: "Drink",
      status: "Canceled",
      name: "Starbucks",
      price: "$10.20",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600",
      orderId: "#240112",
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.circleBtn}>
          <Ionicons name="chevron-back" size={22} color="#000" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>My Orders</Text>

        <TouchableOpacity style={styles.circleBtn}>
          <Ionicons
            name="ellipsis-horizontal"
            size={22}
            color="#000"
          />
        </TouchableOpacity>
      </View>

      {/* TABS */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => setActiveTab("ongoing")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "ongoing" && styles.activeTabText,
            ]}
          >
            Ongoing
          </Text>

          {activeTab === "ongoing" && (
            <View style={styles.activeLine} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tab}
          onPress={() => setActiveTab("history")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "history" && styles.activeTabText,
            ]}
          >
            History
          </Text>

          {activeTab === "history" && (
            <View style={styles.activeLine} />
          )}
        </TouchableOpacity>
      </View>

      {/* ORDERS */}
      {activeTab === "ongoing"
        ? ongoingOrders.map((item) => (
            <View key={item.id} style={styles.orderCard}>
              <View style={styles.orderTop}>
                <Text style={styles.category}>
                  {item.category}
                </Text>

                <Text style={styles.orderId}>
                  {item.orderId}
                </Text>
              </View>

              <View style={styles.orderInfo}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.foodImage}
                />

                <View style={{ flex: 1 }}>
                  <Text style={styles.foodName}>
                    {item.name}
                  </Text>

                  <View style={styles.priceRow}>
                    <Text style={styles.price}>
                      {item.price}
                    </Text>

                    <Text style={styles.dot}>|</Text>

                    <Text style={styles.items}>
                      {item.items}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.btnRow}>
                <TouchableOpacity
                  style={styles.primaryBtn}
                >
                  <Text style={styles.primaryBtnText}>
                    Track Order
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.outlineBtn}
                >
                  <Text style={styles.outlineBtnText}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        : historyOrders.map((item) => (
            <View key={item.id} style={styles.orderCard}>
              <View style={styles.orderTop}>
                <View style={styles.statusRow}>
                  <Text style={styles.category}>
                    {item.category}
                  </Text>

                  <Text
                    style={[
                      styles.status,
                      {
                        color:
                          item.status === "Completed"
                            ? "#16A34A"
                            : "#EF4444",
                      },
                    ]}
                  >
                    {item.status}
                  </Text>
                </View>

                <Text style={styles.orderId}>
                  {item.orderId}
                </Text>
              </View>

              <View style={styles.orderInfo}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.foodImage}
                />

                <View style={{ flex: 1 }}>
                  <Text style={styles.foodName}>
                    {item.name}
                  </Text>

                  <Text style={styles.price}>
                    {item.price}
                  </Text>
                </View>
              </View>

              <View style={styles.btnRow}>
                <TouchableOpacity
                  style={styles.outlineBtn}
                >
                  <Text style={styles.outlineBtnText}>
                    Rate
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.primaryBtn}
                >
                  <Text style={styles.primaryBtnText}>
                    Re-Order
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 35,
  },

  circleBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#ECEEF3",
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },

  tabsContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },

  tab: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 14,
    position: "relative",
  },

  tabText: {
    color: "#B0B0B0",
    fontSize: 16,
    fontWeight: "600",
  },

  activeTabText: {
    color: "#FF7A00",
  },

  activeLine: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 3,
    backgroundColor: "#FF7A00",
    borderRadius: 10,
  },

  orderCard: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 18,
    marginBottom: 22,
  },

  orderTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  category: {
    fontSize: 15,
    color: "#444",
    fontWeight: "600",
  },

  status: {
    fontSize: 14,
    fontWeight: "700",
  },

  orderId: {
    color: "#A0A0A0",
    fontWeight: "600",
  },

  orderInfo: {
    flexDirection: "row",
    marginBottom: 22,
  },

  foodImage: {
    width: 70,
    height: 70,
    borderRadius: 16,
    marginRight: 14,
  },

  foodName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
    marginBottom: 8,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },

  dot: {
    marginHorizontal: 10,
    color: "#B0B0B0",
  },

  items: {
    color: "#A0A0A0",
    fontWeight: "500",
  },

  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 14,
  },

  primaryBtn: {
    flex: 1,
    backgroundColor: "#FF7A00",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
  },

  primaryBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },

  outlineBtn: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: "#FF7A00",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
  },

  outlineBtnText: {
    color: "#FF7A00",
    fontWeight: "700",
    fontSize: 15,
  },
});