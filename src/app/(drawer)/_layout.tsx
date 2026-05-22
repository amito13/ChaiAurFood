import {
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";

import { Drawer } from "expo-router/drawer";
import { router } from "expo-router";

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      
      {/* Existing Drawer Screens */}
      <DrawerItem
        label="Home"
        onPress={() => router.push("/home")}
      />

      <DrawerItem
        label="Orders"
        onPress={() => router.push("/orders")}
      />

      {/* Reused Profile Screen */}
      <DrawerItem
        label="Profile"
        onPress={() => router.push("/profile")}
      />

    </DrawerContentScrollView>
  );
}

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => (
        <CustomDrawerContent {...props} />
      )}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerItemStyle: {
            display: "none",
          },
        }}
      />

      <Drawer.Screen
        name="test"
        options={{
          title: "Test",
        }}
      />
    </Drawer>
  );
}