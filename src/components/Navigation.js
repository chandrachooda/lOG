import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Login"component={LoginScreen}/>
        <Stack.Screen name="Register"component={RegisterScreen}/>
        <Stack.Screen name="Home"component={HomeScreen}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigation