import { router } from "expo-router";
import { Button, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login() {
    let messega = "Rejoignez la communauté BatutaPay dès aujourd'hui et découvrez une nouvelle manière de gérer vos finances!";
    function changePage() {
        router.push('(tabs)/home');
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="black" />
            <Text style={{ fontSize: 35, fontWeight: '900', marginBottom: 30 }}>BATUTA PAY</Text>
            <Text style={{ textAlign: 'justify', fontSize: 15, fontWeight: "600", paddingRight: 10 }}>{messega}</Text>
            <View style={{ marginTop: 40, marginBottom: 10 }}>
                <TextInput placeholder="Email" style={{ borderWidth: 1, height: 50, padding: 10, marginVertical: 10 }} />
                <TextInput placeholder="Password" style={{ borderWidth: 1, height: 50, padding: 10, marginVertical: 10 }} />
                <Button onPress={() => changePage()} title="Se connecter" />
            </View>
            <Text>J'ai besoin d'un compte</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        paddingTop: 100,
        backgroundColor: 'white'
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
})