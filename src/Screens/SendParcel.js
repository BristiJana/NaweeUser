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
import ProcessBar from '../Components/ProcessBar';
import Dof from './DropOffbooth';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function SendParcel({navigation}) {
  const [activeTab, setactiveTab] = useState('Pickup');
  const [address1, setaddress1] = useState(false);
  const [address2, setaddress2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);
  const [SelectedTime, setSelectedTime] = useState('8am-12pm');
  const [parcel_details, setparcel_details] = useState('');
  const [trans, settrans] = useState('');
  const [Destination, setdestination] = useState('');
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{height: 'auto', margin: 5}}
      showsVerticalScrollIndicator={false}>
      <ProcessBar progress={0.2} />
      <SwitchTab
        activeTab={activeTab}
        setactiveTab={setactiveTab}
        leftoption="Pickup"
        rightoption="Drop-off"
      />
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
          <Text style={styles.checkboxText}>Lorem ipsum dummy address</Text>
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            value={address2}
            onValueChange={setaddress2}
            tintColors={{true: '#fa892e', false: '#fa892e'}}
          />
          <Text style={styles.checkboxText}>Lorem ipsum dummy address</Text>
        </View>
      </View>
      {activeTab == 'Pickup' ? (
        <>
          <Text style={styles.or}>Or</Text>
          <TouchableOpacity
            style={styles.add_address}
            onPress={() => navigation.navigate('Difa', {name: 'Difa'})}>
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

          <View style={styles.parcel_details}>
            <CustomDropdown
              title="Parcel Details"
              itemlist={[
                'single Parcel to Single Receiver',
                'Multiple Parcel to Single Receiver',
                'Multiple Parcel to Multiple Receiver',
              ]}
              placeholder="Select Parcel Details"
              onPress={item => {
                setparcel_details(item);
                parcel_details == 'single Parcel to Single Receiver'
                  ? settrans('StoS')
                  : parcel_details == 'Multiple Parcel to Single Receiver'
                  ? settrans('MtoS')
                  : settrans('MtoM');
              }}
              buttonWidth={wp('77%')}
            />
          </View>
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
        </>
      ) : (
        <Dof nav={navigation} />
      )}
      <View style={styles.buttons}>
        <Custombutton
          name="Back"
          onPress={() => alert('Back')}
          bgcolor="white"
          fontcolor="grey"
          width={wp('50%')}
          height={hp('6%')}
        />
        <Custombutton
          name="Next"
          onPress={() => navigation.navigate(trans, {name: trans})}
          bgcolor="#fa892e"
          fontcolor="#fff"
          width={wp('50%')}
          height={hp('6%')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp('3%'),
    flex: 1,
  },
  heading: {
    fontSize: wp('4%'),
    fontWeight: '700',
    marginVertical: hp('2%'),
    marginHorizontal: wp('5%'),
  },
  address: {
    borderColor: '#fa892e',
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: wp('4%'),
  },
  label1: {
    fontSize: wp('4%'),
    fontWeight: '400',
    padding: 12,
    color: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderColor: '#fa892e',
    backgroundColor: '#fa892e',
  },
  label2: {
    fontSize: wp('3.5%'),
    fontWeight: '700',
    padding: 10,
    color: '#fa892e',
  },
  checkbox: {
    padding: wp('2%'),
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderColor: '#fa892e',
    flexDirection: 'row',
  },
  checkboxText: {
    fontSize: wp('3.3%'),
    fontWeight: '500',
    padding: wp('1%'),
  },
  or: {
    fontSize: wp('4%'),
    fontWeight: '600',
    padding: wp('1.3%'),
    alignSelf: 'center',
  },
  add_address: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    elevation: 5,
    backgroundColor: 'white',
    padding: wp('3%'),
    marginTop: hp('2%'),
    flexDirection: 'row',
    marginHorizontal: wp('4%'),
  },
  add_address_text: {
    fontSize: 15,
    fontWeight: '700',
    padding: 5,
    paddingLeft: wp('1%'),
  },
  preferedtime: {
    flex: 1,
    padding: wp('2%'),
    flexDirection: 'row',
    marginHorizontal: wp('7%'),
  },
  preferedtime_text: {
    fontSize: wp('4%'),
    fontWeight: '600',
    padding: wp('.5%'),
    fontFamily: 'Syne-Regular',
  },
  preferedtime_text2: {
    fontSize: wp('3%'),
    fontFamily: 'Syne-Regular',
    fontWeight: '500',
  },
  prefered_time_text_container: {
    marginHorizontal: wp('3%'),
  },
  preferedtime1: {
    fontSize: wp('3.5%'),
    fontWeight: '500',
    padding: wp('2%'),
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: wp('4%'),
    paddingHorizontal: wp('10%'),
    paddingVertical: hp('2%'),
    fontFamily: 'Syne-Regular',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: '1%',
  },
  timeselection: {
    borderColor: '#fa892e',
    borderWidth: 1,
    borderRadius: wp('5%'),
    padding: '2%',
    marginHorizontal: wp('5%'),
    marginVertical: hp('1%'),
  },
  itemselected: {
    backgroundColor: '#fa892e',
    borderRadius: wp('4%'),
    fontSize: wp('3.5%'),
    fontWeight: '500',
    padding: '2%',
    fontFamily: 'Syne-Regular',
    paddingHorizontal: wp('10%'),
    paddingVertical: hp('2%'),
    color: 'white',
  },
  parcel_details: {
    marginVertical: hp('2%'),
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: hp('1%'),
    marginRight: wp('2%'),
  },
});
