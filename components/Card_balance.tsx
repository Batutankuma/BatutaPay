import { Cube } from "iconoir-react-native";
import { ColorValue, StyleSheet, Text, View } from "react-native";

export default function CardBalance({ color, label, montant }: { color: ColorValue, label: string, montant: number }) {
    return (
        <View style={[style.container,{backgroundColor: color}]}>
            <Cube height={24} width={24} color="white" />
            <Text style={{color:'white'}}>{label}</Text>
            <Text style={{color:'#d6d4ce', fontSize:20, fontWeight:'900'}}>${montant}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 15,
        padding: 10,
        paddingVertical: 30,
        height: 100, 
        margin: 10, 
        justifyContent: 'space-between', 
        flexDirection: 'column'
    }
})