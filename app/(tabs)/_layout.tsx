import { Tabs } from "expo-router";
import { Home, Settings } from "iconoir-react-native";

export default function RootTabs() {
    return (
        <Tabs>
            <Tabs.Screen name="home" options={{ tabBarIcon: ({ color }) => <Home height={20} width={20} color={color} /> }} />
            <Tabs.Screen name="settings" options={{ tabBarIcon: ({ color }) => <Settings height={20} width={20} color={color} /> }} />
        </Tabs>
    )
}