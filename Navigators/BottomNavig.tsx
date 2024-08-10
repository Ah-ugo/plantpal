import { View } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/mainPages/postScreens/HomeScreen';
import AskAI from '../pages/mainPages/postScreens/AskAI';
import Profile from '../pages/mainPages/postScreens/Profile';
import { Icon, Text } from '@gluestack-ui/themed';
import { Home, Messages, ProfileCircle, Scan } from 'iconsax-react-native';
import { CustomTabBarButton } from '../components/CustomTabBarButton';
import { Context } from '../Context/mainContext';
import { Center } from '@gluestack-ui/themed';
import HomeNavig from './HomeNavig';

const Tab = createBottomTabNavigator();
export default function BottomNavig({navigation}:any) {
  const {GenerateResult} = useContext(Context)
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
      <Tab.Screen name="Home" component={HomeNavig} options={{headerShown: false}} />
      {/* <Tab.Screen name="AskAI" component={AskAI} options={{headerShown: false}} /> */}
      <Tab.Screen 
        name="MiddleButton" 
        component={Profile} // Replace with the screen you want to navigate to on button press
        options={{
          tabBarIcon: () => <Scan color='white' size={30}/>,
          tabBarButton: (props) => (
            <CustomTabBarButton
              {...props}
              onPress={() => {GenerateResult(); navigation.navigate("Details")}} // Example action: open the drawer
            />
          ),
          tabBarShowLabel: false,
          tabBarLabel: ""
        }} 
      />
      <Tab.Screen name="Profile" component={HomeScreen} options={{headerShown: false}} listeners={{
          tabPress: e => {
            e.preventDefault(); // Prevent the tab from navigating to the component
            navigation.openDrawer(); // Open the drawer
          },
        }} /> 
    </Tab.Navigator>
  )
}