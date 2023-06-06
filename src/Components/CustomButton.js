import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function CustomButton({
  name,
  bgcolor,
  height,
  fontcolor,
  width,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={{
        flex:1,
        marginHorizontal:wp('2%'),
        backgroundColor: bgcolor,
        height: height,
        alignSelf: 'center',
        borderRadius: 12,
        marginBottom: hp('3%'),
        marginTop: hp('4%'),
        width: width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: fontcolor,
            fontSize: wp('4.6%'),
            alignSelf: 'center',
            paddingVertical: hp('1%'),
            fontWeight: '600',
            fontFamily: 'Syne-Regular',
          }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
