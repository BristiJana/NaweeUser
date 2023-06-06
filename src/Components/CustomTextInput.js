import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const CustomTextInput = ({lable,placeholder, onChange, bgcolor, visible}) => (
  <View style={styles.maincontainer}>
    {lable ?
    <Text style={{fontSize: wp('4%'), fontWeight: '600',fontFamily:'Syne-Regular',}}>{lable}</Text>
    : null}
    <View style={[styles.container, {backgroundColor: bgcolor}]}>
      <TextInput
        style={styles.textinputStyleLogin}
        placeholder={placeholder}
        secureTextEntry={!visible}
        onChangeText={onChange}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical:hp('1%'),
    width: '100%',
    alignSelf: 'center',
    marginTop:'2%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#FA8832',
  },
  maincontainer: {
    
    width: '80%',
    alignSelf: 'center',
    marginTop: hp('2%'),
  },
  textinputStyleLogin: {
    color: 'black',
    width: '80%',
    fontWeight: '700',
    paddingLeft: 18,
    paddingVertical: 2,
  },
  text: {
    fontSize: 23,
    color: '#ffe0bc',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  input: {
    width: '100%',
    height: 40,
    fontSize: 23,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    backgroundColor: '#ffe0bc',
    borderRadius: 10,
    flex: 1,
    paddingLeft: 40,
    opacity: 0.4,
  },
});

export default CustomTextInput;
