import React from 'react';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StyleSheet, ScrollView, TabBarIOSItem, View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons'

export default Drive = () => {

    const Tab = createBottomTabNavigator()

    const goTo = (route) => {
        navigation.navigate(route)
    }

    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{ showLabel: false }} screenOptions={{ headerShown: false }}>

                <Tab.Screen name={"iDrive"} component={IDriveScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FontAwesome5 name="home" size={25} color={focused ? '#3B338E' : '#cecece'} />
                        </View>
                    ),
                }}></Tab.Screen>

                <Tab.Screen name={"Add File"} component={AddFileScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FontAwesome5 name="plus" size={30} color={focused ? '#3B338E' : '#cecece'} />
                        </View>
                    ),
                }}></Tab.Screen>

                <Tab.Screen name={"Profile"} component={ProfileScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FontAwesome5 name="user-alt" size={25} color={focused ? '#3B338E' : '#cecece'} />
                        </View>
                    ),
                }}></Tab.Screen>

            </Tab.Navigator>
        </NavigationContainer>
    );
};

function IDriveScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>iDrive</Text>
        </View>
    );
}

function AddFileScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Add File</Text>
        </View>
    );
}

function ProfileScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Profile</Text>
        </View>
    );
}
