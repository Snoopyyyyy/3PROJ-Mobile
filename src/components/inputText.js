import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const inputText = (props) => {
    return (
        <View style={{ paddingBottom: 10 }}>
            <Text style={{ paddingHorizontal: 20, paddingVertical: 3, fontSize: 15 }}>{props.titleText}</Text>
            <TextInput
                style={styles.inputText}
                placeholder={props.holderText}
                secureTextEntry={props.password ?? false} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputText: {
        backgroundColor: "#d9d9d9",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        fontSize: 15
    }
});

export default inputText;