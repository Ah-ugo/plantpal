import { Dimensions, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Appbar } from 'react-native-paper'
import { Box, Button, ButtonText, Center, HStack, Input, InputField, InputIcon, InputSlot, SearchIcon, StatusBar, Text, VStack } from '@gluestack-ui/themed'
import SelectionCrops from '../../../components/SelectionCrops'
import axios from 'axios'
import { Spinner } from '@gluestack-ui/themed'

export default function SelectCrops({navigation}:any) {
    // Get the height of the viewport
const { height: viewportHeight } = Dimensions.get('window');
const [plantData, setPlantData] = useState([])
const [loading, setLoading] = useState(false)

// Calculate the height equivalent to 1vh
const oneVH = viewportHeight * 0.01;

const config = {
    headers : {
        'accept': 'application/json',
  'X-Parse-Application-Id': 'r69HAOoMtOs1YXVvlNlp34QGJ38xdbdxyq69riqD',
  'X-Parse-REST-API-Key': 'ulRpqPbd2jnmopVLvd6sMCdE7IKcTD7TniF40rhA'
    }
}

const LoadCrops = async() => {
    setLoading(true)
    await axios.get("https://parseapi.back4app.com/classes/plantList", config).then(res=>{
        setLoading(false)
        setPlantData(res?.data?.results)
        console.log(res?.data?.results)
    }).catch(err=>{
        setLoading(false)
        console.log(err)
    })
}

useEffect(()=>{
    LoadCrops()
},[])
  return (
    <SafeAreaProvider style={{backgroundColor: "white", flex: 1}}>
        <StatusBar translucent backgroundColor={"white"}/>
        <Appbar.Header>
            <VStack gap={'$3'} mx={'$2'}>
                <Text fontSize={'$lg'} fontWeight='$bold' color='$black'>Select your crop</Text>
                <Text fontSize={'$sm'} fontWeight='$light'>Get special advisory for your crop</Text>
            </VStack>
        </Appbar.Header>
        <View style={{flex: 1}}>
            <Box mx={'$3'} mt={'$4'}>
        <Input
  variant="outline"
  size="xl"
  borderWidth={"$1"}
  borderRadius={"$md"}
  borderColor='#08896A'
  isDisabled={false}
  isInvalid={false}
  isReadOnly={false}
>
  <InputField placeholder="Search" placeholderTextColor={"#08896A"} />
  <InputSlot pr="$3">
              {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
              <InputIcon
                as={SearchIcon}
                color="#08896A"
              />
            </InputSlot>
</Input>
</Box>

<Box mx={'$3'} mt={'$4'}>
    <Text fontWeight='$bold' fontSize={'$sm'}>You can add maximum of 8 crops</Text>
</Box>

<HStack flexWrap='wrap' mx={'$5'} gap={'$6'} mt={'$4'}>
    {loading ?
    <Box flex={1} justifyContent='center' flexDirection='row' alignItems='center' style={{width: "100%"}}> 
    <Center>
          <Spinner color={"#08896A"} size="small" /> 
          </Center>
          </Box>:
      plantData.map(res=>{
        return <SelectionCrops key={res?.objectId} title={res?.plantName} img={res?.plantImage?.url}/>
    }).reverse()}
</HStack>

{/* Footer */}
<Box bottom={'$0'} mb={'$4'} style={{width: "100%", position: "absolute", bottom: 0, left: 0, right: 0 }}>
    <HStack justifyContent='space-between' mx={'$3'}>
        
    <Button size="md" variant="link" action="positive" isDisabled={false} isFocusVisible={false} >
          <ButtonText fontSize={'$sm'} fontWeight='$light'>Skip </ButtonText>
        </Button>

        
        <Button onPress={()=>navigation.navigate("mainHome")} size="sm" variant="solid" action="positive" px={"$9"} borderRadius="$3xl" isDisabled={false} isFocusVisible={false} >
          <ButtonText>Next </ButtonText>
        </Button>
      
      
    </HStack>
</Box>
        </View>
    </SafeAreaProvider>
  )
}