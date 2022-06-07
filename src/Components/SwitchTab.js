import {View, Text,TouchableOpacity,StyleSheet} from 'react-native';
import React from 'react';

export default function SwitchTab(props) {
  return (
    <View style={styles.container}>
      <HeaderButton text='Pickup' btnColor="white" textColor="black" activeTab={props.activeTab} setactiveTab={props.setactiveTab} left={true} />
      <HeaderButton text='Drop-off' btnColor="#fa892e" textColor="white" activeTab={props.activeTab} setactiveTab={props.setactiveTab} left={false}/>
    </View>
  );
}

const HeaderButton = props => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab === props.text ? '#fa892e' : 'white',
        paddingVertical: 10,
        width:160,
        paddingHorizontal: 25,
        borderTopLeftRadius: props.left ? 15 : 0,
        borderBottomLeftRadius: props.left ? 15 : 0,
        borderTopRightRadius: props.left ? 0 : 15,
        borderBottomRightRadius: props.left ? 0 : 15,
        borderWidth:  1,
        borderColor : '#fa892e'
      }}
      onPress={() => props.setactiveTab(props.text)}>
      <Text
        style={{
          color: props.activeTab === props.text ? 'white' : '#fa892e',
          fontSize: 20,
          fontWeight: '700',
          alignSelf:'center'
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      alignSelf: 'center',
      justifyContent: "center",
      flexDirection: "row",
    },
  });
  
