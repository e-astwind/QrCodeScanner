import { Tabs } from "expo-router";
import { MaterialCommunityIcons, FontAwesome6 } from "@expo/vector-icons";
import { View } from "react-native";
export default function TabRoutesLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={({}) => ({
        tabBarStyle: {
          backgroundColor: "#141414",
          height: 80,
        },
        tabBarActiveTintColor: "#22B1F8",
        tabBarLabelPosition: "below-icon",
        tabBarInactiveTintColor: "#fff",
        tabBarLabelStyle: {
          bottom: 8,
          position: "absolute",
        },
      })}
    >
      <Tabs.Screen
        name="create"
        options={{
          headerTitleStyle: { color: "#fff", fontSize: 18 },
          headerStyle: {
            backgroundColor: "#141414",
            height: 80,
          },
          headerTitleAlign: "center",
          title: "Criar",
          tabBarIcon(props) {
            return <FontAwesome6 name="qrcode" size={24} color={props.color} />;
          },
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          headerTitleStyle: { color: "#fff", fontSize: 18 },
          headerStyle: {
            backgroundColor: "#141414",
            height: 80,
          },

          headerTitleAlign: "center",
          title: "Scanner",
          tabBarIcon() {
            return (
              <View
                style={{
                  backgroundColor: "#22B1F8",
                  height: 60,
                  width: 60,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="qrcode-scan"
                  size={24}
                  color={"#FFF"}
                />
              </View>
            );
          },
          tabBarLabel() {
            return <View />;
          },
        }}
      />
      <Tabs.Screen
        name="historic"
        options={{
          headerTitleStyle: { color: "#fff", fontSize: 18 },
          headerStyle: {
            backgroundColor: "#141414",
            height: 80,
          },
          headerTitleAlign: "center",
          title: "Histórico",
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                name="history"
                size={28}
                color={props.color}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
