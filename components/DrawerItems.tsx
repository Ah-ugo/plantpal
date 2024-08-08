import { Avatar, AvatarFallbackText, AvatarImage, Box, Center, HStack, Pressable, Text, VStack } from '@gluestack-ui/themed';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { ArrowLeft, Book1, Camera, Home, Message } from 'iconsax-react-native';
import React from 'react';
import { View, TouchableOpacity } from 'react-native';

function CustomDrawerContent(props:any) {
  return (
    <DrawerContentScrollView {...props}>
      <Box mx={"$3"} mt={"$2"}>
        <HStack>
            <Pressable onPress={()=>props.navigation.dispatch(DrawerActions.toggleDrawer())}>
            <ArrowLeft size="25" color="black"/>
            </Pressable>
        </HStack>
        <Center mt={"$3"}>
            <Avatar size='xl' mb={"$3"} backgroundColor='#08896A'>
        {/* <AvatarImage
        alt={"something"}
        source={{
          uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        }}
      /> */}
      <AvatarFallbackText>Solomon Brown</AvatarFallbackText>
      </Avatar>
      <Text fontSize={"$xl"} fontWeight='$bold'>Solomon Brown</Text>
      <Text fontSize={"$md"} fontWeight='$light'>solomon4@gmail.com</Text>
        </Center>

        <VStack mt={"$7"} gap={"$5"}>
            <Pressable>
                <HStack gap={5} alignItems='center'>
                    <Home size={20} color='#08896A'/>
                    <Text fontSize={"$lg"} fontWeight='$medium'>Home</Text>
                </HStack>
            </Pressable>

            <Pressable>
                <HStack gap={5} alignItems='center'>
                    <Camera size={20} color='#08896A'/>
                    <Text fontSize={"$lg"} fontWeight='$medium'>Take pic</Text>
                </HStack>
            </Pressable>

            <Pressable>
                <HStack gap={5} alignItems='center'>
                    <Message size={20} color='#08896A'/>
                    <Text fontSize={"$lg"} fontWeight='$medium'>Ask AI</Text>
                </HStack>
            </Pressable>

            <Pressable>
                <HStack gap={5} alignItems='center'>
                    <Book1 size={20} color='#08896A'/>
                    <Text fontSize={"$lg"} fontWeight='$medium'>Tips</Text>
                </HStack>
            </Pressable>
        </VStack>
      </Box>
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
