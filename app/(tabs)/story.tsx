import ListView from "@/components/ListView";
import { fakeTransferts } from "@/models/models";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";

export default function HistoryPage() {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={fakeTransferts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ListView item={item} />}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d6d4ce',
        flex: 1
    }
})