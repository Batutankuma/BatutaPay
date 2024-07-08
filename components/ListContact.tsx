import { ContactModel } from "@/models/contact_models";
import { Transfert } from "@/models/models";
import { User } from "iconoir-react-native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const ListContact = React.memo(({ item }: { item: ContactModel }) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: 'black', borderRadius: 8, height: 40, width: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <User height={24} width={24} color="#d6d4ce" />
                </View>
            </View>
            <View style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-start' }}>
                <Text style={{ fontWeight: '800' }}>{item.firstName}</Text>
                <Text style={{ color: 'gray', fontWeight: '800', fontSize: 10 }}>{item.phoneNumbers[0].number == undefined ? '' : item.phoneNumbers[0].number}</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            </View>
        </View>
    )
});

const styles = StyleSheet.create({
    container: {
        height: 55,
        marginVertical: 2,
        flexDirection: 'row',
        justifyContent: 'center',
    }
})