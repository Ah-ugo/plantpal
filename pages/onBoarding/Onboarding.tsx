import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { Avatar, Text } from 'react-native-paper';
import { Box, Button, ButtonText, HStack, Image, VStack } from '@gluestack-ui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from '@gluestack-ui/themed';

export default function OnboardingComp({navigation}) {
  return (
    
    <Onboarding
    bottomBarColor='#fff'
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image alt='img1' style={{width: 320, height: 320}} resizeMode='cover' source={require('../../assets/onboard1.png')} />,
      title: 'Health Check',
      subtitle: 'Take picture of your crop or upload image to detect diseases and recieve treament advice',
    },
    {
        backgroundColor: '#fff',
        image: <Image alt='img1' style={{width: 320, height: 320}} resizeMode='cover' source={require('../../assets/onboard2.png')} />,
        title: 'Community',
        subtitle: 'Ask a question about your crop to receive help from the community',
      },
      {
        backgroundColor: '#fff',
        image: <Image alt='img1' style={{width: 320, height: 320}} resizeMode='cover' source={require('../../assets/onboard3.png')} />,
        title: 'Cultivation Tips',
        subtitle: (
            <Box>
                <Text>Receive farming advice about how to improve your yied</Text>
                <VStack gap={'$2'} mt={50}>
                    <Button onPress={()=>navigation.navigate('signIn')} bgColor='#08896A' height={'$12'}><ButtonText>Sign up</ButtonText></Button>
                    <Button onPress={()=>navigation.navigate('login')} borderColor='#08896A' height={'$12'} borderWidth={1} bgColor='transparent'><ButtonText color='#08896A'>Log in</ButtonText></Button>
                </VStack>
            </Box>

        ),
      },
  ]}
/>

  )
}