import PhoneDialer from "@/components/phoneDialer";
import { useLocalSearchParams } from "expo-router";
import { User } from "iconoir-react-native";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";

export default function ContactDetail() {
    const data = useLocalSearchParams();
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ height: 60,alignItems: 'center', padding: 10, flexDirection: 'row' }}>
                <View style={{ borderRadius: 80, borderWidth: 1, height: 45, width: 45, marginRight: 10, justifyContent:'center', alignItems:'center'}}>
                <User height={30} width={30} color="black" />
                </View>
                <View>
                    <Text style={{ fontSize: 10 }}>{data.item}</Text>
                    <Text style={{ fontWeight: '800', fontSize: 20 }}>{data.name}</Text>
                </View>
            </View>
            <PhoneDialer />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor:'white'
    }
})
