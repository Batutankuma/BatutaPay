import { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import * as Contacts from 'expo-contacts';
import { ContactModel, getArrayContact } from "@/models/contact_models";
import { ListContact } from "@/components/ListContact";

export default function AmisPage() {
    const [data,setData] = useState<ContactModel[]>([])
    useEffect(() => {
        (async () => {
            try {
                const { status } = await Contacts.requestPermissionsAsync();
                //verification si j'ai l'autorisation au contact
                if (status === 'granted') {
                    const { data } = await Contacts.getContactsAsync({});
                    if (data.length > 0) {
                        setData(getArrayContact(data))
                    }
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item)=> item.id.toString()}
                renderItem={({item})=> <ListContact item={item}/>}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#d6d4ce'
    }
})