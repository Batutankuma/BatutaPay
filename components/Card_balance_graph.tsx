import { GraphDown } from "iconoir-react-native"
import { StyleSheet, View,Text } from "react-native"

export default function CardBalanceGraph() {
    return (
        <View style={style.container}>
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <GraphDown height={80} width={80} color="white"/>
            </View>
            <View style={{flex:1, justifyContent:'space-around', padding:10, alignItems:'center'}}>
                <Text style={{fontWeight:'800',fontSize:18,textAlign:'center', color:'#d6d4ce'}}>Tokens To By For 33%</Text>
                <Text style={{fontWeight:'800', fontSize:20, color:"#e63c3a"}}>8990TB</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        borderRadius: 15,
        padding: 10,
        margin: 10,
        paddingVertical: 30,
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column'
    }
})