import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

export default function GradientButton({name,onPress}) {
  return (
      <LinearGradient colors={['#f1832d', '#d57128']} start={{x: 0.05, y: 0.1}} end={{x: 0.7, y: 0.7 }} style={{height:42,alignSelf:'center',borderRadius:20,marginTop:50,width:250,flexDirection:'row',justifyContent:'center'}}   >
    <TouchableOpacity  onPress={()=> onPress("click")} >
        
        <Text style={{color:'white',fontSize:18,alignSelf:'center',paddingVertical:5,fontWeight:'700'}}>{name}</Text>
    </TouchableOpacity>
    </LinearGradient>
  )
};