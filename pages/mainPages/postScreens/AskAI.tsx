import { View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MainPagesHeader from '../../../components/MainPagesHeader'

export default function AskAI({navigation}:any) {
  return (
   <SafeAreaProvider>
    <MainPagesHeader hamFunc={() => navigation.openDrawer()} />
   </SafeAreaProvider>
  )
}