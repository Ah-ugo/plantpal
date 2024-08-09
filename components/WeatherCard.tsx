import { View } from 'react-native'
import React from 'react'
import { Card, HStack, Image, Text, VStack } from '@gluestack-ui/themed'

export default function WeatherCard({icon, name, country, temp, description, feels_like}:any) {
  return (
    <View>
        <Card p={"$3"}>
            <HStack alignItems='center' justifyContent='space-between'>
                <VStack>
                    <Text fontSize={"$xl"} fontWeight='$bold'>{name + ", " + country}</Text>
                    <Text fontSize={"$lg"} fontWeight='$semibold'>{temp} C</Text>
                    <Text fontSize={"$sm"} fontWeight='$light'>Feels Like {feels_like} C</Text>
                    <Text fontSize={"$sm"} fontWeight='$semibold'>{description}</Text>
                </VStack>
                <Image
                alt="img"
  source={{ uri: icon }}
  style={{ width: 100, height: "100%" }}
  resizeMode="contain"
/>

            </HStack>
        </Card>
    </View>
  )
}