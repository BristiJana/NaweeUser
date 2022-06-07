import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/AntDesign';
import SwitchTab from '../Components/SwitchTab';
import CustomDropdown from '../Components/CustomDropdown';
import Custombutton from '../Components/CustomButton';

export default function SendParcel() {
  const [activeTab, setactiveTab] = useState('Pickup');
  const [address1, setaddress1] = useState(false);
  const [address2, setaddress2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  const [SelectedTime, setSelectedTime] = useState('8am-12pm');
  const [parcel_details, setparcel_details] = useState('');
  const [Destination, setdestination] = useState('');
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{height: 900}}
      showsVerticalScrollIndicator={false}>
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
      <Text style={styles.or}>Or</Text>
      <TouchableOpacity style={styles.add_address}>
        <Icon
          name="pluscircleo"
          size={24}
          color="#fa892e"
          style={{paddingLeft: 15, paddingRight: 15, fontWeight: '700'}}
        />
        <Text style={styles.add_address_text}>
          Send with A Different Address
        </Text>
      </TouchableOpacity>
      <View style={styles.preferedtime}>
        <CheckBox
          value={isSelected3}
          onValueChange={setSelection3}
          tintColors={{true: '#fa892e', false: '#fa892e'}}
        />
        <View style={styles.prefered_time_text_container}>
          <Text style={styles.preferedtime_text}>Prefered Pickup Time</Text>
          <Text style={styles.preferedtime_text2}>
            (subject to additional charges)
          </Text>
        </View>
      </View>
      {isSelected3 ? (
        <View style={styles.timeselection}>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => setSelectedTime('8am-12pm')}>
              <Text
                style={
                  SelectedTime == '8am-12pm'
                    ? styles.itemselected
                    : styles.preferedtime1
                }>
                8am-12pm
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedTime('1pm-6pm')}>
              <Text
                style={
                  SelectedTime == '1pm-6pm'
                    ? styles.itemselected
                    : styles.preferedtime1
                }>
                1pm-6pm
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => setSelectedTime('7pm-10pm')}>
              <Text
                style={
                  SelectedTime == '7pm-10pm'
                    ? styles.itemselected
                    : styles.preferedtime1
                }>
                7pm-10pm
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedTime('Anytime')}>
              <Text
                style={
                  SelectedTime == 'Anytime'
                    ? styles.itemselected
                    : styles.preferedtime1
                }>
                Anytime
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      <View style={styles.parcel_details}>
        <CustomDropdown
          placeholder="Parcel Details"
          itemlist={[
            'single Parcel to Single Receiver',
            'Multiple Parcel to Single Receiver',
            'Multiple Parcel to Multiple Receiver',
          ]}
          onPress={item => setparcel_details(item)}
        />
        <CustomDropdown
          placeholder="Destination Details"
          itemlist={['Inner-State', 'Within State']}
          onPress={item => setdestination(item)}
        />
      </View>
      <View style={styles.buttons}>
        <Custombutton
          name="Back"
          onPress={() => alert('Back')}
          bgcolor="white"
          fontcolor="grey"
          width={150}
        />
        <Custombutton
          name="Send"
          onPress={() => alert('Send')}
          bgcolor="#fa892e"
          fontcolor="#fff"
          width={150}
        />
      </View>
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
  or: {
    fontSize: 20,
    fontWeight: '600',
    padding: 8,
    alignSelf: 'center',
  },
  add_address: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    elevation: 10,
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  add_address_text: {
    fontSize: 15,
    fontWeight: '700',
    padding: 5,
    paddingLeft: 10,
  },
  preferedtime: {
    padding: 10,
    marginTop: 10,
    flexDirection: 'row',
    marginHorizontal: 7,
  },
  preferedtime_text: {
    fontSize: 15,
    fontWeight: '700',
    padding: 2,
  },
  preferedtime_text2: {
    fontSize: 13,
    fontWeight: '500',
  },
  prefered_time_text_container: {
    marginHorizontal: 20,
  },
  preferedtime1: {
    fontSize: 15,
    fontWeight: '500',
    padding: 2,
    borderWidth: 1,
    borderRadius: 17,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  timeselection: {
    borderColor: '#fa892e',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  itemselected: {
    backgroundColor: '#fa892e',
    borderRadius: 17,
    fontSize: 15,
    fontWeight: '500',
    padding: 2,
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 10,
    color: 'white',
  },
  parcel_details: {
    marginVertical: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },

});
