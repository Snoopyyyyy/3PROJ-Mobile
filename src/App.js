import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, View, Navigator } from 'react-native';
import Signup from './Containers/Signup'
import Login from './Containers/Login'
import Drive from './Containers/Drive'

const Stack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Log in' screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name='Sign up' component={Signup} />
    //     <Stack.Screen name='Log in' component={Login} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Drive />
  );
}
