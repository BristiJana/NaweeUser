import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Feather';
import ProcessBar from '../Components/ProcessBar';
import SwitchTab from '../Components/SwitchTab';
import CustomDropdown from '../Components/CustomDropdown';
import CustomTextInput from '../Components/CustomTextInput';
import Custombutton from '../Components/CustomButton';
import MtoMD from './MtoMDrop';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function MtoM({navigation}) {
  const [activeTab, setActiveTab] = useState('Drop at Home');
  const [isselected, setselected] = useState(false);
  const [selectedtime, setSelectedTime] = useState('8am-12pm');
  const [surity, setSurity] = useState(false);
  const [selectedparcel, addparcel] = useState(['sd']);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{height: 'auto'}}>
      <ProcessBar progress={0.5} />
      <SwitchTab
        activeTab={activeTab}
        setactiveTab={setActiveTab}
        leftoption="Drop at Home"
        rightoption="Drop at Booth"
      />

      <Text
        style={{
          fontFamily: 'Syne-Medium',
          fontSize: wp('4.5%'),
          marginHorizontal: wp('9%'),
          marginTop: hp('2%'),
          fontWeight: '700',
        }}>
        Parcel & Receiver Information
      </Text>
      <Text
        style={{
          marginHorizontal: wp('9%'),
          marginTop: hp('.1%'),
          color: '#fa892e',
        }}>
        (Subject to conditional charges)
      </Text>
      {selectedparcel.length != 0 ? (
        <>
          <TouchableOpacity
            style={styles.parcels}
            onPress={() => navigation.navigate('MtoMP', {name: 'MtoMP'})}>
            <Text>Your Parcels({selectedparcel.length})</Text>
            <Icon name="chevron-right" size={24} color="#fa8832" />
          </TouchableOpacity>
        </>
      ) : null}
      <CustomDropdown
        title="Destination"
        buttonWidth="80%"
        itemlist={['bhandara', 'Current Location']}
        placeholder="Destination"
        onPress={a => console.log(a)}
      />
      {activeTab == 'Drop at Home' ? (
        <>
          <Text style={styles.header}>Receivers Information</Text>
          <CustomTextInput placeholder="Search Landmark" visible={true} />
          <CustomTextInput placeholder="Name" visible={true} />
          <CustomTextInput placeholder="Address" visible={true} />
          <CustomTextInput placeholder="Add a Phone Number" visible={true} />
          <View style={styles.preferedtime}>
            <CheckBox
              value={isselected}
              onValueChange={setselected}
              tintColors={{true: '#fa892e', false: '#fa892e'}}
            />
            <View style={styles.prefered_time_text_container}>
              <Text style={styles.preferedtime_text}>Prefered Pickup Time</Text>
              <Text style={styles.preferedtime_text2}>
                (subject to additional charges)
              </Text>
            </View>
          </View>
          {isselected ? (
            <View style={styles.timeselection}>
              <View style={styles.row}>
                <TouchableOpacity onPress={() => setSelectedTime('8am-12pm')}>
                  <Text
                    style={
                      selectedtime == '8am-12pm'
                        ? styles.itemselected
                        : styles.preferedtime1
                    }>
                    8am-12pm
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedTime('1pm-6pm')}>
                  <Text
                    style={
                      selectedtime == '1pm-6pm'
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
                      selectedtime == '7pm-10pm'
                        ? styles.itemselected
                        : styles.preferedtime1
                    }>
                    7pm-10pm
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedTime('Anytime')}>
                  <Text
                    style={
                      selectedtime == 'Anytime'
                        ? styles.itemselected
                        : styles.preferedtime1
                    }>
                    Anytime
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}

          <Text
            style={{
              fontSize: wp('5%'),
              marginHorizontal: '10%',
              marginTop: hp('4%'),
              fontFamily: 'Syne-Regular',
              fontWeight: '700',
            }}>
            Parcel & Receivers Information
          </Text>
          <CustomDropdown
            title="Parcel Description"
            buttonWidth="80%"
            itemlist={[
              '0-5Kg (Light)',
              '5-20kg (Medium)',
              '20-50Kg(Heavy)',
              '50Kg>(Vey heavy)',
            ]}
            placeholder="Select Weight"
            onPress={a => console.log(a)}
          />
          <CustomDropdown
            buttonWidth="80%"
            itemlist={[
              '0-(L)50cm / (B) 50cm (Small)',
              '50cm – (L) 80cm / (B) 80cm (Medium)',
              '80cm - (L) 122cm / (B) 122cm (Large)',
              '122cm > (Very Large)',
            ]}
            onPress={a => console.log(a)}
            placeholder="Select Size"
          />
          <View style={styles.TextInput}>
            <TextInput
              multiline={true}
              placeholder="Description (Name/ condition of parcel)"
              textAlignVertical="top"
            />
          </View>
          <CustomDropdown
            buttonWidth="80%"
            itemlist={[
              'High Values',
              'Fragile',
              'Sensitive Documents',
              'Electronics',
              'Others',
            ]}
            placeholder="Parcel Type"
            onPress={a => console.log(a)}
          />
          <View style={styles.smallinput}>
            <TextInput
              multiline={true}
              placeholder="Any special instructions"
              textAlignVertical="top"
            />
          </View>
          <View style={styles.checkbox}>
            <CheckBox
              value={surity}
              onValueChange={() => setSurity(!surity)}
              tintColors={{true: '#fa892e', false: '#fa892e'}}
            />
            <View>
              <Text style={styles.checkboxText}>Insure Your Parcel</Text>
              <Text style={styles.smalltext}>
                (Subject to conditional charges)
              </Text>
            </View>
          </View>

          <Custombutton
            width={wp('50%')}
            height={hp('6%')}
            name="SAVE & ADD PARCEL"
            bgcolor="#fa8832"
            fontcolor="#fff"
          />
        </>
      ) : (
        <MtoMD nav={navigation} />
      )}
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <Custombutton
          name="BACK"
          bgcolor="white"
          fontcolor="black"
          height={hp('6%')}
          width={wp('40%')}
        />
        <Custombutton
          name="NEXT"
          bgcolor="#fa8832"
          fontcolor="white"
          height={hp('6%')}
          width={wp('40%')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    marginHorizontal: wp('9%'),
    elevation: 5,
    flex: 1,
    paddingHorizontal: wp('5%'),
    borderColor: 'white',
    borderRadius: wp('4%'),
    paddingBottom: hp('4%'),
    backgroundColor: 'white',
  },
  smallinput: {
    flex: 1,
    borderColor: 'white',
    borderWidth: 1,
    elevation: 5,
    backgroundColor: 'white',
    marginHorizontal: wp('9%'),
    borderRadius: wp('4%'),
    paddingBottom: hp('2%'),
    paddingHorizontal: wp('4%'),
  },
  checkbox: {
    flex: 1,
    padding: wp('3%'),
    marginHorizontal: wp('5%'),
    borderColor: '#fa892e',
    flexDirection: 'row',
  },
  checkboxText: {
    fontSize: wp('4%'),
    fontWeight: '500',
    padding: wp('1%'),
  },
  smalltext: {
    fontSize: wp('3%'),
    fontWeight: '500',
  },
  header: {
    fontSize: wp('5%'),
    fontWeight: '700',
    marginTop: hp('1%'),
    marginHorizontal: wp('10%'),
    fontFamily: 'Syne-Medium',
  },
  preferedtime: {
    flex: 1,
    padding: wp('2%'),
    marginTop: hp('2%'),
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
    fontSize: 13,
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
  parcels: {
    marginHorizontal: wp('10%'),
    borderRadius: wp('4%'),
    paddingVertical: hp('1.7%'),
    marginTop: hp('2%'),
    elevation: 4,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('5%'),
    textAlignVertical: 'center',
  },
});
