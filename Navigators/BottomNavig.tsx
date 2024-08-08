import { View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/mainPages/postScreens/HomeScreen';
import AskAI from '../pages/mainPages/postScreens/AskAI';
import Profile from '../pages/mainPages/postScreens/Profile';
import { Icon } from '@gluestack-ui/themed';
import { Home, Messages, ProfileCircle } from 'iconsax-react-native';

const Tab = createBottomTabNavigator();
export default function BottomNavig({navigation}:any) {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return <Home color={color} size={size} variant={focused ? 'Bold' : 'Outline'} />;
          } else if (route.name === 'AskAI') {
            return <Messages color={color} size={size} variant={focused ? 'Bold' : 'Outline'} />;
          } else if (route.name === 'Profile') {
            return <ProfileCircle color={color} size={size} variant={focused ? 'Bold' : 'Outline'} />;
          }
        },
        tabBarActiveTintColor: '#08896A',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      <Tab.Screen name="AskAI" component={AskAI} options={{headerShown: false}} />
      <Tab.Screen name="Profile" component={HomeScreen} options={{headerShown: false}} listeners={{
          tabPress: e => {
            e.preventDefault(); // Prevent the tab from navigating to the component
            navigation.openDrawer(); // Open the drawer
          },
        }} /> 
    </Tab.Navigator>
  )
}