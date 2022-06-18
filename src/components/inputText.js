import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const inputText = (props) => {
    return (
        <View style={{ paddingBottom: 10, width: props.split && "50%", paddingRight: 10 }}>
            <Text style={{ paddingHorizontal: 20, paddingVertical: 3, fontSize: 15 }}>{props.titleText}</Text>
            <TextInput
                style={styles.inputText}
                placeholder={props.holderText}
                secureTextEntry={props.password ?? false}
                onChangeText={props.onChange}
                value={props.value}
                editable={!props.blocked ?? false} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputText: {
        backgroundColor: "#ececec",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        fontSize: 15,
        color: '#000'
    }
});

export default inputText;