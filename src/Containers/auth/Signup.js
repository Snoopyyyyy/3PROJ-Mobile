import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { register } from "../../services/UserService";
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import IDriveLogo from "../../../img/idrive-logo.svg";
import InputText from "../../components/inputText";

export default function Signup() {
    const navigation = useNavigation()
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");

    const goTo = (route) => {
        navigation.navigate(route)
    }

    const submit = (event) => {
        event.preventDefault();

        if (password === confPassword) {
            register(firstName, lastName, email, password).then(data => {
                if (data.err) {
                    alert(data.err);
                } else {
                    goTo("IDriveNavigation")
                }
            }).catch(err => alert(err));
        } else {
            console.warn(); ('Not same password')
        }
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: "center" }}>
            <IDriveLogo width={250} height={250} fill={"#3B338E"} />
            <View style={{ width: "80%" }}>
                <View style={{ flexDirection: 'row' }}>
                    <InputText titleText="First Name" holderText="First Name" onChange={text => setFirstName(text)} value={firstName} split />
                    <InputText titleText="Last Name" holderText="Last Name" onChange={text => setLastName(text)} value={lastName} split />
                </View>
                <View style={{ paddingBottom: 30 }}>
                    <InputText titleText="Email" holderText="example@supinfo.com" onChange={text => setEmail(text)} value={email} />
                    <InputText titleText="Password" holderText="***********************" onChange={text => setPassword(text)} value={password} password={true} />
                    <InputText titleText="Confirm Password" holderText="***********************" onChange={text => setConfPassword(text)} value={confPassword} password={true} />
                </View>

                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity onPress={submit} style={{ borderRadius: 30, backgroundColor: "#3B338E", paddingVertical: 10, paddingHorizontal: 90 }}>
                        <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>Sign up</Text>
                    </TouchableOpacity>
                    <Text style={{ paddingTop: 10, color: "#3B338E", fontSize: 15 }}>Already Registered? <Text onPress={e => { goTo("Log in") }} style={{ textDecorationLine: 'underline', fontStyle: 'italic' }}>Log in here.</Text></Text>
                </View>
            </View>
        </ScrollView >
    )
}