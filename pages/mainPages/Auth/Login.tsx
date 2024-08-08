import { TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Appbar } from 'react-native-paper'
import { ArrowLeft } from 'iconsax-react-native'
import { AlertCircleIcon, Box, Center, CheckboxIndicator, CheckboxLabel, FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText, HStack, Image, Input, InputField, Link, LinkText, StatusBar, Text, VStack } from '@gluestack-ui/themed'
import { Checkbox } from '@gluestack-ui/themed'
import { CheckboxIcon } from '@gluestack-ui/themed'
import { CheckIcon } from '@gluestack-ui/themed'
import { Button } from '@gluestack-ui/themed'
import { ButtonText } from '@gluestack-ui/themed'
import { InputSlot } from '@gluestack-ui/themed'
import { InputIcon } from '@gluestack-ui/themed'
import { EyeIcon } from '@gluestack-ui/themed'
import { EyeOffIcon } from '@gluestack-ui/themed'

export default function Login({navigation}) {
    const [showPassword, setShowPassword] = useState(false)
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState
    })
  }
  return (
    <SafeAreaProvider style={{backgroundColor: "#fff"}}>
        <StatusBar translucent backgroundColor={"white"}/>
        <Appbar.Header style={{paddingHorizontal: 10}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <ArrowLeft size="20" color="#08896A"/>
            </TouchableOpacity>
        </Appbar.Header>

        <View>
            <Center>
                <Image alt='img' width={200} height={200} source={require("../../../assets/login.png")}/>
                <Text fontSize={20} fontWeight='600'>Welcome Back !</Text>
                <Text fontSize={16} fontWeight='400' mt={'$3'}>Log in to contiune</Text>
            </Center>

            
        <VStack gap={"$5"} my={"$3"} mx={"$3"}>
        <FormControl size="md" isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={false} >
            <FormControlLabel mb='$2'>
              <FormControlLabelText fontSize={16} fontWeight='400'>Enter email</FormControlLabelText>
            </FormControlLabel>
            <Input size='lg'>
              <InputField
                type="text"
                // defaultValue="12345"
                placeholder="Email"
              />
              
            </Input>
            
          </FormControl>
          <FormControl size='lg' isDisabled={false} isInvalid={false} isReadOnly={false} isRequired={false} >
            <FormControlLabel mb='$2'>
              <FormControlLabelText fontSize={16} fontWeight='400'>Enter your password</FormControlLabelText>
            </FormControlLabel>
            <Input size='lg'>
              <InputField
                type={showPassword ? "text" : "password"}
                // defaultValue="12345"
                placeholder="********"
              />
              <InputSlot pr="$3" onPress={handleState}>
              {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
              <InputIcon
                as={showPassword ? EyeIcon : EyeOffIcon}
                color="black"
              />
            </InputSlot>
            </Input>
            <FormControlHelper>
              {/* <FormControlHelperText>
                Must be at least 6 characters.
              </FormControlHelperText> */}
            </FormControlHelper>
            <FormControlError>
              <FormControlErrorIcon
                as={AlertCircleIcon}
              />
              <FormControlErrorText>
                At least 6 characters are required.
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
        </VStack >
        <HStack mx={'$3'} justifyContent='space-between'>
        <Box><Text></Text></Box>
<TouchableOpacity>
    <Text color='#08896A'>Forget password?</Text>
</TouchableOpacity>
        </HStack>
        <Button onPress={()=>navigation.navigate("selectCrop")} mx={'$3'} mb={'$3'} mt={'$7'} bgColor='#08896A' height={'$12'}><ButtonText>Log in</ButtonText></Button>
        <Center>
        <Link onPress={()=>navigation.navigate('signIn')}><Text>Don’t have an account?  <LinkText color='#08896A'>Sign up</LinkText></Text></Link>
        </Center>
        </View>
    </SafeAreaProvider>
  )
}