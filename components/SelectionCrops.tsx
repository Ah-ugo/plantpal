import { View } from 'react-native'
import React from 'react'
import { Card, Center, Image, Pressable, Text } from '@gluestack-ui/themed'

export default function SelectionCrops({img, title, action}:any) {
  return (
    <Pressable onPress={action}>
      <Card size="md" variant="elevated" p="$3" width={60} height={60}>
        <Center>
        <Image alt='fruit' style={{width: "100%", height: "100%"}} source={{uri: img}} resizeMode='contain' p={'$2'}/>
        </Center>
      </Card>
      <Center>
      <Text fontSize={'$sm'} fontWeight='$light' mt={'$1'}>{title}</Text>
      </Center>
    </Pressable>
  )
}