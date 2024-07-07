import { Transfert } from "@/models/models";
import { PiggyBank } from "iconoir-react-native";
import { View, Text, StyleSheet } from "react-native";

export default function ListView({ item }: { item: Transfert }) {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{backgroundColor:'black',borderRadius:8, height:40, width:40, justifyContent:'center',alignItems:'center'}}>
                    <PiggyBank height={24} width={24} color="#d6d4ce" />
                </View>
            </View>
            <View style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-start' }}>
                <Text style={{ fontWeight: '800' }}>{item.destinateur.fullname}</Text>
                <Text style={{ color: 'gray', fontWeight: '800', fontSize: 10 }}>{item.data}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 15, fontWeight: '800' }}>${item.montant}</Text>
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