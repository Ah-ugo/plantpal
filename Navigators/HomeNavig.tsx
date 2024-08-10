import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/mainPages/postScreens/HomeScreen';
import DiagnosisRes from '../pages/mainPages/postScreens/DiagnosisRes';

const Stack = createStackNavigator();

export default function HomeNavig() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="Details" component={DiagnosisRes} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}