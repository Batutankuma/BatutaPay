import { Transfert } from "@/models/models";
import { PiggyBank, Settings } from "iconoir-react-native";
import { View, Text, StyleSheet } from "react-native";

export default function SettingView({label}:{label:string}) {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{height: 40, width: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <Settings height={24} width={24} color="black" />
                </View>
            </View>
            <View style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-start' }}>
                <Text style={{ fontWeight: '800', fontSize:20 }}>{label}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 15, fontWeight: '800' }}></Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 55,
        marginVertical: 2,
        flexDirection: 'row',
        justifyContent: 'center',
    }
})