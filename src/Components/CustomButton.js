import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

export default function CustomButton({
  name,
  bgcolor,
  fontcolor,
  width,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgcolor,
        height: 42,
        alignSelf: 'center',
        borderRadius: 12,
        marginBottom: 10,
        marginTop: 60,
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
            fontSize: 16,
            alignSelf: 'center',
            paddingVertical: 10,
            fontWeight: '600',
            fontFamily: "'Syne', sans-serif",
          }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
