import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, View, Navigator } from 'react-native';
import Signup from './Containers/auth/Signup'
import Login from './Containers/auth/Login'
import IDriveNavigation from './Containers/drive/IDriveNavigation'

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName='IDriveNavigation' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Sign up' component={Signup} />
        <Stack.Screen name='Log in' component={Login} />
        <Stack.Screen name='IDriveNavigation' component={IDriveNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
