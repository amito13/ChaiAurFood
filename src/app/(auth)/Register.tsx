import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  StatusBar,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import {
  Feather,
  Ionicons,
} from "@expo/vector-icons";

import { router } from "expo-router";

const Register = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
      />

      <SafeAreaView style={styles.safeArea}>
        {/* TOP IMAGE */}
        

        {/* CARD */}
        <View style={styles.card}>
          {/* HEADER */}
          <Text style={styles.title}>
            Create Account ☕
          </Text>

          <Text style={styles.subtitle}>
            Register to start ordering food
          </Text>

          {/* NAME */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Full Name
            </Text>

            <TextInput
              placeholder="Enter your name"
              placeholderTextColor="#A5A5A5"
              style={styles.input}
            />
          </View>

          {/* EMAIL */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Email
            </Text>

            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#A5A5A5"
              style={styles.input}
            />
          </View>

          {/* PASSWORD */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Password
            </Text>

            <View style={styles.passwordContainer}>
              <TextInput
                placeholder="••••••••"
                placeholderTextColor="#A5A5A5"
                secureTextEntry
                style={styles.passwordInput}
              />

              <Feather
                name="eye-off"
                size={20}
                color="#A5A5A5"
              />
            </View>
          </View>

          {/* PHONE */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Phone Number
            </Text>

            <TextInput
              placeholder="Enter phone number"
              placeholderTextColor="#A5A5A5"
              style={styles.input}
            />
          </View>
          <Pressable
            onPress={() =>
              router.replace("/(drawer)/(tabs)/home")
            }
          >
            <Text style={styles.guestText}>
              Continue as Guest
            </Text>
          </Pressable>

          {/* REGISTER BUTTON */}
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
              Register
            </Text>
          </Pressable>

          {/* LOGIN */}
          <Pressable
            onPress={() =>
              router.push("/(auth)/login")
            }
          >
            <Text style={styles.bottomText}>
              Already have an account?{" "}
              <Text style={styles.orangeText}>
                Login
              </Text>
            </Text>
          </Pressable>

          {/* GUEST */}
          <Pressable
            onPress={() =>
              router.replace("/(drawer)/(tabs)/home")
            }
          >
            <Text style={styles.guestText}>
              Continue as Guest
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  topContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },

  card: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    marginHorizontal: 20,
    borderRadius: 30,
    padding: 24,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#222",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: "#777",
    marginBottom: 28,
  },

  inputGroup: {
    marginBottom: 18,
  },

  label: {
    fontSize: 15,
    color: "#333",
    marginBottom: 10,
    fontWeight: "600",
  },

  input: {
    height: 58,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 18,
    fontSize: 15,
  },

  passwordContainer: {
    height: 58,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
  },

  passwordInput: {
    flex: 1,
    fontSize: 15,
  },

  button: {
    height: 60,
    backgroundColor: "#FF5A36",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 24,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "700",
  },

  bottomText: {
    textAlign: "center",
    color: "#666",
    fontSize: 15,
  },

  orangeText: {
    color: "#FF5A36",
    fontWeight: "700",
  },

  guestText: {
    textAlign: "center",
    marginTop: 18,
    color: "#FF5A36",
    fontSize: 15,
    fontWeight: "700",
  },
});