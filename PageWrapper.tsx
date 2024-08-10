import 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import React from 'react'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import {config} from '@gluestack-ui/config';
import OnboardingComp from './pages/onBoarding/Onboarding';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Signin from './pages/mainPages/Auth/Signin';
import Login from './pages/mainPages/Auth/Login';
import SelectCrops from './pages/mainPages/postScreens/SelectCrops';
import DrawerNavig from './Navigators/DrawerNavig';
import BottomNavig from './Navigators/BottomNavig';
import ContextProvider from './Context/mainContext';

const Stack = createStackNavigator();

export default function PageWrapper() {
  return (
    <ContextProvider>
    <GluestackUIProvider config={config}>
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="onBoarding" component={OnboardingComp} options={{headerShown: false}} />
        <Stack.Screen name="signIn" component={Signin} options={{headerShown: false}} />
        <Stack.Screen name="login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="selectCrop" component={SelectCrops} options={{headerShown: false}} />
        <Stack.Screen name="mainHome" component={DrawerNavig} options={{headerShown: false}} />
        {/* <Stack.Screen name="mainHome2" component={BottomNavig} options={{headerShown: false}} /> */}
        </Stack.Navigator>
        </NavigationContainer>
    </GluestackUIProvider>
    </ContextProvider>
  )
}