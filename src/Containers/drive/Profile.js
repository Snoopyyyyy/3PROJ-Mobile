import React from 'react';
import { StyleSheet, ScrollView, Image, View } from 'react-native';
import ProfileLogo from '../../../img/profile-user.png'
import InputText from "../../components/inputText";

const Profile = () => {

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: "center" }}>
            <Image source={ProfileLogo} style={{ width: 150, height: 150, marginBottom: 75 }} />
            <View style={{ width: "80%" }}>
                <InputText titleText="First Name" holderText="First Name" blocked={true} value={"Test"} />
                <InputText titleText="Last Name" holderText="Last Name" blocked={true} />
                <InputText titleText="Email" holderText="example@supinfo.com" blocked={true} />
            </View>
        </ScrollView>
    );
};

export default Profile;