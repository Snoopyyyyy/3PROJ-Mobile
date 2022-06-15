import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, View, TouchableOpacity, Text, ScrollView, StatusBar } from 'react-native';
import IDriveLogo from "../../img/idrive-logo.svg";
import InputText from "../components/inputText";

const Login = () => {

    const navigation = useNavigation()
    const goTo = (route) => {
        navigation.navigate(route)
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: "center" }}>
            <StatusBar backgroundColor="#fff" />
            <IDriveLogo width={250} height={250} fill={"#3B338E"} />
            <View style={{ width: "80%" }}>
                <View style={{ paddingBottom: 60, paddingTop: 30 }}>
                    <InputText titleText="Email" holderText="example@supinfo.com" />
                    <InputText titleText="Password" holderText="***********************" password={true} />
                </View>

                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity onPress={e => { goTo("IDriveNavigation") }} style={{ borderRadius: 30, backgroundColor: "#3B338E", paddingVertical: 10, paddingHorizontal: 90 }}>
                        <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>Log in</Text>
                    </TouchableOpacity>
                    <Text style={{ paddingTop: 10, color: "#3B338E", fontSize: 15 }}>New user ? <Text onPress={e => { goTo("Sign up") }} style={{ textDecorationLine: 'underline', fontStyle: 'italic' }}>Sign up here.</Text></Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default Login;