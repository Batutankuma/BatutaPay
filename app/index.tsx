import { router } from "expo-router";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

export default function Login() {
    let messega = "Rejoignez la communauté BatutaPay dès aujourd'hui et découvrez une nouvelle manière de gérer vos finances!";
    function changePage() {
        router.push('(tabs)/home');
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="black" />
            <LinearGradient colors={['#e6e9f0', '#eef1f5']} style={{ flex: 1 }}>

            </LinearGradient>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
})