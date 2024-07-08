import { ContactModel } from "@/models/contact_models";
import { Transfert } from "@/models/models";
import { Link } from "expo-router";
import { User } from "iconoir-react-native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const ListContact = React.memo(({ item }: { item: ContactModel }) => {
    return (
        <Link href={{ pathname: `/contact/${item.id}`, params: { item: item.phoneNumbers[0].number, name: item.firstName } }}>
            <View style={styles.container}>
                <View style={styles.circle_avatar}>
                    <View style={styles.avatar}>
                        <User height={24} width={24} color="#d6d4ce" />
                    </View>
                </View>
                <View style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 10 }}>
                    <Text style={{ fontWeight: '800' }}>{item.firstName}</Text>
                    <Text style={{ color: 'gray', fontWeight: '800', fontSize: 10 }}>{item.phoneNumbers[0].number == undefined ? '' : item.phoneNumbers[0].number}</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 10 }}>
                </View>
            </View>
        </Link>
    )
});

const styles = StyleSheet.create({
    container: {
        height: 55,
        marginVertical: 2,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    circle_avatar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
    },
    avatar: {
        backgroundColor: 'black',
        borderRadius: 8,
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    }
})