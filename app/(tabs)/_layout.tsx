import { Tabs } from "expo-router";
import { Home, Settings } from "iconoir-react-native";

export default function RootTabs() {
    return (
        <Tabs screenOptions={{
            tabBarStyle: { backgroundColor: 'black' },
            tabBarActiveTintColor: '#e63c3a',
            tabBarIconStyle: { borderRadius: 20 },
            tabBarInactiveTintColor: '#d6d4ce',
            headerStyle: { backgroundColor: '#d6d4ce' }
        }}>
            <Tabs.Screen name="home" options={{ title: 'Home', tabBarIcon: ({ color }) => <Home height={20} width={20} color={color} /> }} />
            <Tabs.Screen name="settings" options={{ tabBarIcon: ({ color }) => <Settings height={20} width={20} color={color} /> }} />
        </Tabs>
    )
}