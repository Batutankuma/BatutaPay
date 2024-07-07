import CardBalance from "@/components/Card_balance";
import CardBalanceGraph from "@/components/Card_balance_graph";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export default function HomePage() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>welcome</Text>
            <Text style={styles.header_title}>Sael Batuta </Text>
            <Text style={styles.balance_label}>$ 8,000</Text>
            <Text>solde</Text>
            <Text style={{fontWeight:'900',marginVertical:20}}>Statistique Compte</Text>
            <View style={{ height: 400, flexDirection: 'row' }}>
                <View style={{ height: 400, flex: 1 }}>
                    <CardBalanceGraph/>
                </View>
                <View style={{ height: 400, flex: 1 }}>
                    <CardBalance color="#e63c3a" label="Bonus received" montant={22.42} />
                    <CardBalance color="black" label="Bonus received" montant={122.00} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#d6d4ce'
    },
    header_title: {
        fontSize: 25,
        fontWeight: "600",
        marginBottom: 10,
    },
    balance_label: {
        fontSize: 35,
        marginTop: 10,
        fontWeight: '800'
    }
})