import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import SupinfoLogo from "../../img/supinfo-logo.png";
import InputText from "../components/inputText";

const Login = () => {

    const navigation = useNavigation()
    const goTo = (route) => {
        navigation.navigate(route)
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-evenly', alignItems: "center" }}>

            <Image source={SupinfoLogo} resizeMode="stretch" style={{ width: 200, height: 200 }} />

            <View style={{ width: "80%" }}>
                <InputText titleText="Email" holderText="example@supinfo.com" />
                <InputText titleText="Password" holderText="***********************" password={true} />
            </View>

            <View style={{ alignItems: "center" }}>
                <TouchableOpacity style={{ borderRadius: 30, backgroundColor: "#3B338E", paddingVertical: 10, paddingHorizontal: 90 }}>
                    <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>Log in</Text>
                </TouchableOpacity>
                <Text style={{ paddingTop: 10, color: "#3B338E", fontSize: 15 }}>New user ? <Text onPress={e => { goTo("Sign up") }} style={{ textDecorationLine: 'underline', fontStyle: 'italic' }}>Sign up here.</Text></Text>
            </View>
        </ScrollView>
    );
};

export default Login;