import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import {
  Ionicons,
  Feather,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";

export default function Profile() {
  const section1 = [
    {
      id: 1,
      title: "Personal Info",
      icon: <Feather name="user" size={20} color="#FF7A59" />,
    },
    {
      id: 2,
      title: "Addresses",
      icon: <Ionicons name="map-outline" size={20} color="#6C63FF" />,
    },
  ];

  const section2 = [
    {
      id: 1,
      title: "Cart",
      icon: (
        <Ionicons name="cart-outline" size={20} color="#4DA6FF" />
      ),
    },
    {
      id: 2,
      title: "Favourite",
      icon: (
        <Ionicons name="heart-outline" size={20} color="#C94CFF" />
      ),
    },
    {
      id: 3,
      title: "Notifications",
      icon: (
        <Ionicons
          name="notifications-outline"
          size={20}
          color="#FFB547"
        />
      ),
    },
    {
      id: 4,
      title: "Payment Method",
      icon: (
        <MaterialIcons
          name="payment"
          size={20}
          color="#4DA6FF"
        />
      ),
    },
  ];

  const section3 = [
    {
      id: 1,
      title: "FAQs",
      icon: (
        <AntDesign
          name="questioncircleo"
          size={18}
          color="#FF7A59"
        />
      ),
    },
    {
      id: 2,
      title: "User Reviews",
      icon: <Feather name="slack" size={18} color="#3DD598" />,
    },
    {
      id: 3,
      title: "Settings",
      icon: (
        <Ionicons
          name="settings-outline"
          size={20}
          color="#6C63FF"
        />
      ),
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

        <Text style={styles.headerTitle}>Profile</Text>

        <TouchableOpacity style={styles.circleBtn}>
          <Ionicons
            name="ellipsis-horizontal"
            size={22}
            color="#000"
          />
        </TouchableOpacity>
      </View>

      {/* USER INFO */}
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: "https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png",
          }}
          style={styles.profileImage}
        />

        <View>
          <Text style={styles.name}>User</Text>
          <Text style={styles.subtitle}>I love fast food</Text>
        </View>
      </View>

      {/* SECTIONS */}
      <View style={styles.card}>
        {section1.map((item) => (
          <MenuItem
            key={item.id}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </View>

      <View style={styles.card}>
        {section2.map((item) => (
          <MenuItem
            key={item.id}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </View>

      <View style={styles.card}>
        {section3.map((item) => (
          <MenuItem
            key={item.id}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </View>

      {/* LOGOUT */}
      {/* <View style={styles.card}>
        <MenuItem
          title="Log Out"
          icon={
            <MaterialIcons
              name="logout"
              size={20}
              color="#FF5A5F"
            />
          }
        />
      </View> */}
    </ScrollView>
  );
}

function MenuItem({
  title,
  icon,
}: {
  title: string;
  icon: React.ReactNode;
}) {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <View style={styles.leftSide}>
        <View style={styles.iconBox}>{icon}</View>

        <Text style={styles.menuText}>{title}</Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={18}
        color="#A0A0A0"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  circleBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#ECEEF3",
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222",
  },

  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 35,
    marginBottom: 30,
  },

  profileImage: {
    width: 75,
    height: 75,
    borderRadius: 40,
    marginRight: 18,
  },

  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
  },

  subtitle: {
    marginTop: 6,
    color: "#9CA3AF",
    fontSize: 14,
  },

  card: {
    backgroundColor: "#ECEEF3",
    borderRadius: 24,
    paddingVertical: 6,
    marginBottom: 22,
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingVertical: 16,
  },

  leftSide: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconBox: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  menuText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
});