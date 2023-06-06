import {View, Text} from 'react-native';
import React from 'react';

export default function CustomText({text, size, color}) {
  return (
    <View style={{paddingVertical: 15, alignSelf: 'center'}}>
      <Text style={{fontSize: size, fontWeight: '700', color: color,fontFamily:'Syne-Regular'}}>
        {text}
      </Text>
    </View>
  );
}
