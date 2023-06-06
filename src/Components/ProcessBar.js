import { View, Text } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function ProcessBar({progress}) {
  return (
    <View style={{marginHorizontal:wp('5%'),paddingVertical:hp('2%'),alignSelf:'center'}}>
    <Progress.Bar progress={progress} width={wp('50%')} color="#fa8832" />
    </View>
  )
}