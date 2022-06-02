import {View, Text,TouchableOpacity,StyleSheet} from 'react-native';
import React from 'react';

export default function SwitchTab(props) {
  return (
    <View style={styles.container}>
      <HeaderButton text='Booth' btnColor="white" textColor="black" activeTab={props.activeTab} setactiveTab={props.setactiveTab} left={true} />
      <HeaderButton text='Agent' btnColor="#fa892e" textColor="white" activeTab={props.activeTab} setactiveTab={props.setactiveTab} left={false}/>
    </View>
  );
}

const HeaderButton = props => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab === props.text ? '#fa892e' : 'white',
        paddingVertical: 10,
        width:120,
        paddingHorizontal: 25,
        borderTopLeftRadius: props.left ? 30 : 0,
        borderBottomLeftRadius: props.left ? 30 : 0,
        borderTopRightRadius: props.left ? 0 : 30,
        borderBottomRightRadius: props.left ? 0 : 30,
        borderWidth:  1,
        borderColor : 'grey'
      }}
      onPress={() => props.setactiveTab(props.text)}>
      <Text
        style={{
          color: props.activeTab === props.text ? 'white' : '#817c7c',
          fontSize: 20,
          fontWeight: '700',
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
  
