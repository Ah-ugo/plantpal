import { View } from 'react-native'
import React from 'react'
import { Button, ButtonText, Card, HStack, Text, VStack } from '@gluestack-ui/themed'
import { Image } from '@gluestack-ui/themed'

export default function PlantScanCard({openFunc, openFunc1, img}:any) {
  return (
    <View>
        <Card>
            <HStack justifyContent='space-between' alignItems='center' gap={"$10"}>
            <Image
                alt="img"
  source={img? {uri:img}:require("../assets/scanimg.png")}
  style={{ width: 150, height: "100%" }}
  resizeMode="cover"
  rounded={"$lg"}
/>
<VStack alignItems='center' flex={1}>
    <Text fontSize={"$sm"} fontWeight='$light'>Take a picture</Text>
    <Text fontSize={"$sm"} fontWeight='$light'>See a diagnosis</Text>
    <Text fontSize={"$sm"} fontWeight='$light'>Get a medicine</Text>
    <Button onPress={openFunc} variant="outline" action="positive" mt={"$5"} px={"$6"} rounded={"$3xl"} size='sm' flex={1} justifyContent='center'><ButtonText textAlign='center'>Take Picture</ButtonText></Button>
    <Button onPress={openFunc1} variant="outline" action="positive" mt={"$5"} rounded={"$3xl"} size='sm'><ButtonText textAlign='center'>Upload From Device</ButtonText></Button>
</VStack>
            </HStack>
        </Card>
    </View>
  )
}