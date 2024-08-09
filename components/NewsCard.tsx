import { View } from 'react-native'
import React from 'react'
import { Card, HStack, Text, VStack } from '@gluestack-ui/themed'
import { Image } from '@gluestack-ui/themed'

export default function NewsCard({url, title, time, img}:any) {
    const ts = new Date(time)
  return (
    <View style={{flex: 1,}}>
        <Card flex={1}>
            <HStack flex={1} gap={"$2"}>
            <VStack flex={1} gap={"$2"}>
                <Text fontSize={"$sm"} fontWeight='$light'>{url.substring(0, 41)}</Text>
                <Text fontSize={"$md"} fontWeight='$medium'>{title}</Text>
                <Text fontSize={"$xs"} fontWeight='$thin'>{ts.toDateString()}</Text>
            </VStack>
            {img ?<Image
                alt="img"
                rounded={"$lg"}
  source={{ uri: img }}
  style={{ width: 100, height: "100%" }}
  resizeMode="contain"
/>: null}
            </HStack>
        </Card>
    </View>
  )
}