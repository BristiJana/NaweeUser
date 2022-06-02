import { View, Text } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';

export default function ProcessBar() {
  return (
    <View style={{paddingHorizontal:50}}>
    <Progress.Bar progress={0.3} width={320} color="white" />
    </View>
  )
}