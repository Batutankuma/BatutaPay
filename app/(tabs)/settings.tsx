import SettingView from "@/components/SettingView";
import { fakeUsers } from "@/models/models";
import { LogOut, Settings, HelpCircle, Language, User } from "iconoir-react-native";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export default function SettingPage() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ alignItems: 'center', marginBottom: 30 }}>
                <View style={{ height: 100, width: 100, backgroundColor: 'red', borderRadius: 100 }}>
                </View>
                <Text style={{ marginTop: 20, fontSize: 30, fontWeight: '800' }}>{fakeUsers[0].fullname}</Text>
                <Text>{fakeUsers[0].email}</Text>
            </View>
            <SettingView label="Mon Profil" Icons={<User height={24} width={24} color="black" />} />
            <SettingView label="Preferences" Icons={<Settings height={24} width={24} color="black" />} />
            <SettingView label="Language" Icons={<Language height={24} width={24} color="black" />} />
            <SettingView label="Customer Support " Icons={<HelpCircle height={24} width={24} color="black" />} />
            <SettingView label="Logout" Icons={<LogOut height={24} width={24} color="black" />} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#d6d4ce'
    },
})
