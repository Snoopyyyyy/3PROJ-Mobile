import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, View, Text, StatusBar, Image } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import IDriveScreen from './IDrive';
import ProfileScreen from './Profile';
import AddFileScreen from './AddFile';
import IDriveLogoFocused from "../../img/idrive-only-logo.png";
import IDriveLogo from "../../img/idrive-only-logo-bleu.png";

export default IDriveNavigation = () => {

    const navigation = useNavigation()
    const Tab = createMaterialTopTabNavigator()

    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: 'white',
        },
    };

    return (
        <NavigationContainer independent={true}>
            <StatusBar backgroundColor="#3B338E" />
            <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>

                <Tab.Screen name={"iDrive"} component={IDriveScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={focused ? IDriveLogoFocused : IDriveLogo} style={{ width: 25, height: 25 }} />
                        </View>
                    ),
                    tabBarStyle: {
                        backgroundColor: '#3B338E',
                    },
                }}></Tab.Screen>

                <Tab.Screen name={"Add File"} component={AddFileScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FontAwesome5 name="plus" size={20} color={focused ? '#fff' : '#5A4EDE'} />
                        </View>
                    ),
                    tabBarStyle: {
                        backgroundColor: '#3B338E',
                    }
                }}></Tab.Screen>

                <Tab.Screen name={"Profile"} component={ProfileScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FontAwesome5 name="user-alt" size={20} color={focused ? '#fff' : '#5A4EDE'} />
                        </View>
                    ),
                    tabBarStyle: {
                        backgroundColor: '#3B338E',
                    }
                }}></Tab.Screen>

            </Tab.Navigator>
        </NavigationContainer >
    );
};
