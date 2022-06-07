import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import OtpInput from '../Components/OtpInput';
import Otp from '../assets/svg/Otp.svg';

export default function OtpScreen() {
  return (
    <View style={styles.card}>
        <Otp width={170} height={170} style={styles.animation}/>
        <Text style={styles.text}>Enter Security Code</Text>
        <Text style={styles.little} >Enter the code that we sent to you</Text>
        <OtpInput />
        <Text style={styles.sendotp} >Send another code in 01:00 min</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: '90%',
    width: '90%',
    elevation: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    flexDirection: 'column',
    marginTop: 40,
    alignSelf: 'center',
    paddingHorizontal:5

  },
  little:{
      fontSize:15,
      fontWeight:'400',
      marginVertical:20,
      textAlign:'center'
  },
  text:{
    fontSize: 20,
    fontWeight: '400',
    marginTop: 10,
    alignSelf: 'center',
    color: '#fa8832',
  },
  animation:{
    width: '70%',
    alignSelf:'center',
    marginTop:20,
    paddingTop:20
  },
  sendotp:{
    fontSize: 15,
    fontWeight: '400',
    alignSelf: 'center',
    color: '#fa8832',
    marginVertical: 20,
    textDecorationLine: 'underline',
  }
});
