import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import IDriveLogo from "../../img/idrive-logo.svg";
import InputText from "../components/inputText";

const Signup = () => {

    const navigation = useNavigation()
    const goTo = (route) => {
        navigation.navigate(route)
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: "center" }}>
            <IDriveLogo width={250} height={250} fill={"#3B338E"} />
            <View style={{ width: "80%" }}>
                <View style={{ paddingBottom: 30 }}>
                    <InputText titleText="First Name" holderText="First Name" />
                    <InputText titleText="Last Name" holderText="Last Name" />
                    <InputText titleText="Email" holderText="example@supinfo.com" />
                    <InputText titleText="Password" holderText="***********************" password={true} />
                </View>

                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity onPress={e => { goTo("IDriveNavigation") }} style={{ borderRadius: 30, backgroundColor: "#3B338E", paddingVertical: 10, paddingHorizontal: 90 }}>
                        <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>Sign up</Text>
                    </TouchableOpacity>
                    <Text style={{ paddingTop: 10, color: "#3B338E", fontSize: 15 }}>Already Registered? <Text onPress={e => { goTo("Log in") }} style={{ textDecorationLine: 'underline', fontStyle: 'italic' }}>Log in here.</Text></Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default Signup;