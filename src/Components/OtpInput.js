import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import OTPTextInput from 'react-native-otp-textinput';

export default function OtpInput() {
  const [Otp, setOtp] = useState('');

  useEffect(() => {
    console.log(Otp);
  }, [Otp]);
  return (
    <View style={styles.container}>
      <OTPTextInput handleTextChange={e => setOtp(e)} tintColor="#fa8832" offTintColor="#fa8832"  textInputStyle={styles.roundedTextInput} containerStyle={styles.container} />
    </View>
  );
}

const styles = StyleSheet.create({
  textinput: {
    width: 70,
    height: 70,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fcad72',
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 2,
    alignSelf:'center'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
