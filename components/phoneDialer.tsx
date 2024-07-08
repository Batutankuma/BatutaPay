import { SendDollars } from 'iconoir-react-native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const numbers = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '.', '0'
];

const PhoneDialer = () => {
    const [input, setInput] = useState('');

    const handlePress = (number: any) => {
        setInput(prev => prev + number);
    };

    const handleDelete = () => {
        setInput(prev => prev.slice(0, -1));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.input}>${input == '' ? '0.0' : input}</Text>
            <View style={styles.grid}>
                {numbers.map((number, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.numberButton}
                        onPress={() => handlePress(number)}
                    >
                        <Text style={styles.numberText}>{number}</Text>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={handleDelete}
                >
                    <Text style={styles.numberText}>⌫</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.sendButton}
                onPress={handleDelete}
            >
                <SendDollars height={30} width={30} color="white" />
                <Text style={styles.senderText}>Sender </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    input: {
        fontSize: 32,
        marginBottom: 20,
    },
    grid: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    numberButton: {
        width: '30%',
        margin: '1.66%',
        height: 50,
        justifyContent: 'center',
        backgroundColor: '#d6d4ce',
        alignItems: 'center',
        borderRadius: 0,
    },
    deleteButton: {
        width: '30%',
        margin: '1.66%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff4d4d',
        borderRadius: 0,
    },
    sendButton: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        borderRadius: 5,
    },
    senderText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 10
    },
    numberText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default PhoneDialer;
