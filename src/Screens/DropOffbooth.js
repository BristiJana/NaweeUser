import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import SwitchTab from '../Components/SwitchTab';
import CheckBox from '@react-native-community/checkbox';

export default function DropOffbooth() {
  const [activeTab, setactiveTab] = useState('Drop-off');
  const [address1, setaddress1] = useState(false);
  const [address2, setaddress2] = useState(false);
  return (
    <ScrollView style={styles.container} contentContainerStyle={{height: 900}} showsVerticalScrollIndicator={false}>
      <SwitchTab activeTab={activeTab} setactiveTab={setactiveTab} />
      <Text style={styles.heading}>Sender Information</Text>
      <View style={styles.address}>
        <Text style={styles.label1}>dummy@gmail.com</Text>
        <Text style={styles.label2}>John Doe</Text>
        <View style={styles.checkbox}>
          <CheckBox
            value={address1}
            onValueChange={setaddress1}
            tintColors={{true: '#fa892e', false: '#fa892e'}}
          />
          <Text style={styles.checkboxText}>Dummy Address</Text>
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            value={address2}
            onValueChange={setaddress2}
            tintColors={{true: '#fa892e', false: '#fa892e'}}
          />
          <Text style={styles.checkboxText}>Dummy Address</Text>
        </View>
      </View>
      <Text style={styles.text}>Drop at your Nearby Booth</Text>
      <Text style={styles.subtext}>(You can drop-off your parcel anytime between 9am-7pm)</Text>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  heading: {
    fontSize: 15,
    fontWeight: '700',
    marginVertical: 15,
    marginHorizontal: 20,
  },
  address: {
    borderColor: '#fa892e',
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 20,
  },
  label1: {
    fontSize: 15,
    fontWeight: '400',
    padding: 12,
    color: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderColor: '#fa892e',
    backgroundColor: '#fa892e',
  },
  label2: {
    fontSize: 15,
    fontWeight: '700',
    padding: 10,
    color: '#fa892e',
  },
  checkbox: {
    padding: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderColor: '#fa892e',
    flexDirection: 'row',
  },
  checkboxText: {
    fontSize: 15,
    fontWeight: '500',
    padding: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    padding: 8,
    paddingHorizontal: 20,
    fontFamily: 'Roboto',
  },
  subtext:{
    fontSize: 13,
    fontWeight: '400',
    padding: 8,
    alignSelf: 'center',
    fontFamily: 'Roboto',
    color:'#fa892e'
  }
});
