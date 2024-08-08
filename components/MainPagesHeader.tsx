import { View } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper'
import { HStack, Pressable, StatusBar, Text } from '@gluestack-ui/themed'
import { HambergerMenu } from 'iconsax-react-native'

export default function MainPagesHeader({hamFunc}:any) {
  return (
      <Appbar.Header style={{backgroundColor: "#08896A"}}>
        <StatusBar backgroundColor={"#08896A"} barStyle="light-content"/>
        <HStack mx={'$3'} alignItems='center' gap={'$3'}>
            <Pressable onPress={hamFunc}>
        <HambergerMenu size="25" color="#fff"/>
        </Pressable>
        <Text color='white' fontWeight='$bold' fontSize={"$xl"}>Plantpal</Text>
        </HStack>
      </Appbar.Header>
  )
}