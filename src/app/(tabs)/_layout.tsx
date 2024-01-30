import { Tabs } from "expo-router";
import { MaterialCommunityIcons, FontAwesome6 } from "@expo/vector-icons";
export default function TabRoutesLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="create"
        options={{
          headerTitleStyle: { color: "#fff", fontSize: 18 },
          headerStyle: {
            backgroundColor: "#262626",
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
            backgroundColor: "#262626",
            height: 80,
          },
          headerTitleAlign: "center",
          title: "Scanner",
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                name="qrcode-scan"
                size={24}
                color={props.color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="historic"
        options={{
          headerTitleStyle: { color: "#fff", fontSize: 18 },
          headerStyle: {
            backgroundColor: "#262626",
            height: 80,
          },
          headerTitleAlign: "center",
          title: "Histórico",
          tabBarIcon(props) {
            return (
              <MaterialCommunityIcons
                name="history"
                size={24}
                color={props.color}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
