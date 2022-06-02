import React from 'react';
import {View, Image} from 'react-native';

const Logo = () => {
  return (
    <View
      style={{
        width: 800,
        height: 800,
        borderRadius: 600,
        backgroundColor: '#FA8832',
        marginTop: '-40%',
        alignSelf: 'center',  
        zIndex: -2,
        flexDirection: 'column-reverse',
      }}>
      <View
        style={{
          height: 100,
          width: 160,
          alignSelf: 'center',
          paddingTop: '10%',
          
        }}>
        <Image style={{height:75,width:'auto',top:20,marginTop:15}} source={require('../res/Images/logo.png')} />
      </View>
    </View>
  );
};

export default Logo;