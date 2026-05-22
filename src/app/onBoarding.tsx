// # Premium Food Delivery Onboarding Screen (Expo + React Native)


import { useRouter } from "expo-router";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function OnBoarding() {
  const router = useRouter();

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <LinearGradient
        colors={["#FFF7EF", "#FFE7CF"]}
        style={styles.safeArea}
      >
        {/* Background Glow */}
        <View style={styles.orangeGlow} />
        <View style={styles.yellowGlow} />

        {/* Floating Emojis */}
        <Text style={styles.floatPizza}>☕</Text>
        <Text style={styles.floatBurger}>🍔</Text>
        <Text style={styles.floatCoffee}>☕</Text>

        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
            {/* Top Badge */}
            <View style={styles.badge}>
              <Ionicons name="flash" size={14} color="#D95D00" />
              <Text style={styles.badgeText}>
                Chai aur food
              </Text>
            </View>

            {/* Main Content */}
            <View style={styles.contentSection}>
              <Text style={styles.title}>
                Bad day?{"\n"}
                Let comfort arrive in{" "}
                <Text style={styles.highlight}>20 minutes.</Text>
              </Text>

              <Text style={styles.subtitle}>
                From cheesy pizzas to late-night chai, we deliver happiness
                right to your door.
              </Text>
            </View>

            {/* Quote Card */}
            <View style={styles.quoteCard}>
              <Text style={styles.quoteLabel}>TODAY’S FLAVOR NOTE</Text>

              <Text style={styles.quoteText}>
                Some meals fill your stomach. Great meals fix your mood.
              </Text>

              <View style={styles.miniRow}>
                <View style={styles.miniDot} />
                <Text style={styles.miniText}>
                  Trusted by 10M+ hungry people
                </Text>
              </View>
            </View>

            {/* CTA Buttons */}
            <View style={styles.buttonContainer}>
              <Pressable
                onPress={() => router.replace("/(auth)/login")}
                style={({ pressed }) => [
                  styles.button,
                  pressed && styles.buttonPressed,
                ]}
              >
                <LinearGradient
                  colors={["#1F1305", "#3A2312"]}
                  style={styles.buttonGradient}
                >
                  <Text style={styles.buttonText}>Find Food</Text>

                  <Ionicons
                    name="arrow-forward"
                    size={18}
                    color="#FFF"
                  />
                </LinearGradient>
              </Pressable>

              <Text style={styles.bottomText}>
                Fast delivery • Live tracking • Hot meals
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF7EF",
  },

  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 18,
    justifyContent: "space-between",
  },

  orangeGlow: {
    position: "absolute",
    top: -100,
    right: -60,
    width: 280,
    height: 280,
    borderRadius: 999,
    backgroundColor: "rgba(255, 140, 0, 0.18)",
  },

  yellowGlow: {
    position: "absolute",
    bottom: -120,
    left: -80,
    width: 260,
    height: 260,
    borderRadius: 999,
    backgroundColor: "rgba(255, 193, 7, 0.12)",
  },

  floatPizza: {
    position: "absolute",
    top: 140,
    right: 35,
    fontSize: 42,
    opacity: 0.18,
    transform: [{ rotate: "-12deg" }],
  },

  floatBurger: {
    position: "absolute",
    bottom: 220,
    left: 20,
    fontSize: 34,
    opacity: 0.14,
    transform: [{ rotate: "8deg" }],
  },

  floatCoffee: {
    position: "absolute",
    top: 240,
    left: 35,
    fontSize: 32,
    opacity: 0.16,
  },

  badge: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "rgba(255,255,255,0.72)",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.5)",
  },

  badgeText: {
    color: "#B45309",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },

  contentSection: {
    marginTop: 30,
  },

  title: {
    fontSize: 48,
    lineHeight: 54,
    fontWeight: "900",
    color: "#1E1207",
    letterSpacing: -1.5,
    marginBottom: 18,
  },

  highlight: {
    color: "#E86A12",
  },

  subtitle: {
    fontSize: 17,
    lineHeight: 28,
    color: "#6B4A2F",
    maxWidth: "92%",
    fontWeight: "500",
  },

  quoteCard: {
    backgroundColor: "rgba(255,255,255,0.82)",
    borderRadius: 28,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 6,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.7)",
  },

  quoteLabel: {
    color: "#D95D00",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 14,
  },

  quoteText: {
    color: "#2D2015",
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "700",
    marginBottom: 20,
  },

  miniRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  miniDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: "#FF8C42",
    marginRight: 10,
  },

  miniText: {
    color: "#7A5A3E",
    fontSize: 13,
    fontWeight: "600",
  },

  buttonContainer: {
    marginTop: 30,
  },

  button: {
    borderRadius: 22,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 5,
  },

  buttonGradient: {
    paddingVertical: 18,
    borderRadius: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  buttonPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.95,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "800",
    letterSpacing: 0.3,
  },

  bottomText: {
    textAlign: "center",
    marginTop: 18,
    color: "#7B614D",
    fontSize: 13,
    fontWeight: "600",
  },
});

