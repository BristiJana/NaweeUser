import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';

export const CustomTextInput = ({lable, onChange, bgcolor, visible}) => (
  <View style={styles.maincontainer}>
    <Text style={{fontSize: 14, fontWeight: '600'}}>{lable}</Text>
    <View style={[styles.container, {backgroundColor: bgcolor}]}>
      <TextInput
        style={styles.textinputStyleLogin}
        placeholder={lable}
        secureTextEntry={!visible}
        onChangeText={onChange}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#FA8832',
  },
  maincontainer: {
    height: 60,
    width: '80%',
    alignSelf: 'center',
    marginTop: 50,
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
