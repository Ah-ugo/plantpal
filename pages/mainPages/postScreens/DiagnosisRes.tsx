import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import MainPagesHeader from '../../../components/MainPagesHeader'
import { Box, Center, Image, Text } from '@gluestack-ui/themed'
import { Context } from '../../../Context/mainContext'

const height = Dimensions.get('window').height

export default function DiagnosisRes({navigation}:any) {
    const {aiResp} = useContext(Context)
  return (
    <View style={styles.container}>
      <MainPagesHeader hamFunc={() => navigation.openDrawer()} />
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Center>
                <Text fontSize={"$lg"} fontWeight='$bold' color='#08896A'>Diagnosis Result</Text>
            </Center>
            <Box height={height} borderWidth={'$1'} borderColor='#08896A' borderRadius={"$md"} mx={"$3"} my={"$3"} px={"$3"} py={"$3"} >
                <Text>{aiResp}</Text>
                <Center style={styles.watermarkContainer}>
                <Image alt="dckxj" style={[{width:100,height:100}, styles.watermark]} source={require("../../../assets/Vector.png")}/>
                </Center>
                
            </Box>
        </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollViewContent: {
      flexGrow: 1,
    },
    watermarkContainer: {
      ...StyleSheet.absoluteFillObject, // Positions the watermark absolutely
      display: "flex",
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1, // Ensure the watermark is above other content
    },
    watermark: {
      width: 100,
      height: 100,
      opacity: 0.3, // Adjust opacity for watermark effect
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      resizeMode: 'contain', // Adjust the image fit if necessary
      transform: [{ rotate: '-30deg' }], // Optional rotation
    },
  });