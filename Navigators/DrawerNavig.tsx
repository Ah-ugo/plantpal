import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../pages/mainPages/postScreens/HomeScreen';
import AskAI from '../pages/mainPages/postScreens/AskAI';
import Profile from '../pages/mainPages/postScreens/Profile';
import BottomNavig from './BottomNavig';
import CustomDrawerContent from '../components/DrawerItems';

const Drawer = createDrawerNavigator();
export default function DrawerNavig() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="MainTabs" component={BottomNavig} options={{ headerShown: false }} /> 
      {/* <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: false }}/> */}
      {/* <Drawer.Screen name="AskAI" component={AskAI} options={{ headerShown: false }}/> */}
    </Drawer.Navigator>
  )
}