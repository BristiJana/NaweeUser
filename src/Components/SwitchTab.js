import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function SwitchTab({
  activeTab,
  setactiveTab,
  leftoption,
  rightoption,
}) {
  return (
    <View style={styles.container}>
      <HeaderButton
        text={leftoption}
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setactiveTab={setactiveTab}
        left={true}
      />
      <HeaderButton
        text={rightoption}
        btnColor="#fa892e"
        textColor="white"
        activeTab={activeTab}
        setactiveTab={setactiveTab}
        left={false}
      />
    </View>
  );
}

const HeaderButton = props => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab === props.text ? '#fa892e' : 'white',
        paddingVertical: hp('2%'),
        width: '100%',
        paddingHorizontal: wp('9%'),
        borderTopLeftRadius: props.left ? 15 : 0,
        borderBottomLeftRadius: props.left ? 15 : 0,
        borderTopRightRadius: props.left ? 0 : 15,
        borderBottomRightRadius: props.left ? 0 : 15,
        borderWidth: 1,
        borderColor: '#fa892e',
      }}
      onPress={() => {
        props.setactiveTab(props.text);
      }}>
      <Text
        style={{
          color: props.activeTab === props.text ? 'white' : '#fa892e',
          fontSize: wp('3.7%'),
          fontWeight: '700',
          alignSelf: 'center',
          fontFamily: 'Syne-Regular',
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: '2%',
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
