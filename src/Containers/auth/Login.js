import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, View, TouchableOpacity, Text, ScrollView, StatusBar } from 'react-native';
import { login } from "../../services/UserService";
import IDriveLogo from "../../../img/idrive-logo.svg";
import InputText from "../../components/inputText";

export default function Login() {
    const navigation = useNavigation()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = (event) => {
        event.preventDefault();

        login(email, password).then(data => {
            goTo("IDriveNavigation")
        }).catch(err => {
            console.warn(err);
        })
    }

    const goTo = (route) => {
        navigation.navigate(route)
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: "center" }}>
            <StatusBar backgroundColor="#fff" />
            <IDriveLogo width={250} height={250} fill={"#3B338E"} />
            <View style={{ width: "80%" }}>
                <View style={{ paddingBottom: 60, paddingTop: 30 }}>
                    <InputText titleText="Email" holderText="example@supinfo.com" onChange={text => setEmail(text)} value={email} />
                    <InputText titleText="Password" holderText="***********************" onChange={text => setPassword(text)} value={password} password={true} />
                </View>

                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity onPress={submit} style={{ borderRadius: 30, backgroundColor: "#3B338E", paddingVertical: 10, paddingHorizontal: 90 }}>
                        <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>Log in</Text>
                    </TouchableOpacity>
                    <Text style={{ paddingTop: 10, color: "#3B338E", fontSize: 15 }}>New user ? <Text onPress={e => { goTo("Sign up") }} style={{ textDecorationLine: 'underline', fontStyle: 'italic' }}>Sign up here.</Text></Text>
                </View>
            </View>
        </ScrollView>
    )
}