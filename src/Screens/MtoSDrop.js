import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Feather';
import ProcessBar from '../Components/ProcessBar';
import SwitchTab from '../Components/SwitchTab';
import CustomDropdown from '../Components/CustomDropdown';
import CustomButton from '../Components/CustomButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SafeAreaView from 'react-native-safe-area-view';

export default function MtoSDrop({nav}) {
  const [activeTab, setActiveTab] = useState('Drop at Booth');
  const [selectedparcel, addparcel] = useState(['asd']);
  const [surity, setSurity] = useState(false);

  return (
    <SafeAreaView style={{height: 'auto'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{height: 'auto'}}>
        <Text style={styles.header}>Recieve at Booth near your receiver</Text>
        <Text
          style={{
            flex: 1,
            marginHorizontal: wp('10%'),
            marginVertical: hp('1.4%'),
            fontSize: wp('3%'),
            color: '#fa8832',
          }}>
          (You can pickup your parcel at any time)
        </Text>
        <View style={styles.location}>
          <TouchableOpacity
            onPress={() => nav.navigate('Sera', {name: 'Sera'})}>
            <Text style={{fontFamily: 'Syne-Regular', fontSize: wp('3.7%')}}>
              Search booth from locations
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderColor: '#fa8832',
            borderRadius: 12,
            borderWidth: 1.6,
            marginVertical: hp('2%'),
            flex: 1,
            marginHorizontal: wp('10%'),
          }}>
          <View style={styles.location_row}>
            <Text>Lagos City Centre road (Booth432) </Text>
          </View>
          <View style={styles.location_row}>
            <Text>Lagos City Centre road (Booth123) </Text>
          </View>
          <View style={styles.location_row}>
            <Text>Lagos City Centre By Lake (Booth278) </Text>
          </View>
          <View style={styles.location_row}>
            <Text>Lagos City Centre near bank branch (Booth987) </Text>
          </View>
        </View>
        <Text style={styles.divider}>
          _____________________________________________________
        </Text>
        <Text
          style={{
            marginHorizontal: 35,
            marginVertical: 10,
            fontSize: 17,
            fontWeight: '600',
          }}>
          Parcel Description
        </Text>
        <Text
          style={{
            marginHorizontal: 35,
            fontSize: wp('3%'),
            color: '#fa8832',
          }}>
          You can Add upto 5 Parcels to 1 receiver.
        </Text>
        {selectedparcel.length != 0 ? (
          <>
            <TouchableOpacity
              style={styles.parcels}
              onPress={() => nav.navigate('MtoSP', {name: 'MtoSP'})}>
              <Text>Your Parcels({selectedparcel.length})</Text>
              <Icon name="chevron-right" size={24} color="#fa8832" />
            </TouchableOpacity>
          </>
        ) : null}
        <CustomDropdown
          buttonWidth={wp('80%')}
          itemlist={[
            '0-5Kg (Light)',
            '5-20kg (Medium)',
            '20-50Kg(Heavy)',
            '50Kg>(Vey heavy)',
          ]}
          placeholder="Select Weight"
          onPress={a => console.log(a)}
        />
        <View>
          <TextInput
            style={styles.textinput}
            multiline={true}
            placeholder="Description (Name/ condition of parcel)"
            textAlignVertical="top"
          />
        </View>
        <CustomDropdown
          buttonWidth={wp('80%')}
          itemlist={[
            '0-(L)50cm / (B) 50cm (Small)',
            '50cm – (L) 80cm / (B) 80cm (Medium)',
            '80cm - (L) 122cm / (B) 122cm (Large)',
            '122cm > (Very Large)',
          ]}
          onPress={a => console.log(a)}
          placeholder="Select Parcel Size"
        />
        <CustomDropdown
          buttonWidth={wp('80%')}
          itemlist={[
            'High Values',
            'Fragile',
            'Sensitive Documents',
            'Electronics',
            'Others',
          ]}
          placeholder="Select Parcel Type"
          onPress={a => console.log(a)}
        />
        <View>
          <TextInput
            style={styles.smallinput}
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
        <CustomButton
          name="SAVE & ADD PARCEL"
          width={wp('50%')}
          height={hp('5%')}
          fontcolor="white"
          bgcolor="#fa892e"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    padding: wp('3%'),
    marginHorizontal: wp('5%'),
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderColor: '#fa892e',
    flexDirection: 'row',
  },
  parcels: {
    flex: 1,
    marginHorizontal: wp('8%'),
    borderRadius: 15,
    paddingVertical: hp('2%'),
    marginTop: hp('2%'),
    elevation: 4,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: wp('5%'),
    paddingHorizontal: wp('5%'),
    textAlignVertical: 'center',
  },
  divider: {
    marginHorizontal: wp('4%'),
    marginVertical: '1%',
    color: '#fa8832',
    textAlign: 'center',
  },
  smallinput: {
    borderColor: 'white',
    borderWidth: 1,
    elevation: 5,
    backgroundColor: 'white',
    marginHorizontal: '9%',
    borderRadius: 20,
    paddingBottom: '4%',
    paddingHorizontal: '4%',
  },
  textinput: {
    marginHorizontal: wp('9%'),
    elevation: 5,
    flex: 1,
    paddingHorizontal: wp('5%'),
    borderColor: 'white',
    borderRadius: 20,
    paddingBottom: hp('5%'),
    backgroundColor: 'white',
  },

  checkboxText: {
    fontSize: wp('3.7%'),
    fontWeight: '500',
    padding: 5,
  },
  smalltext: {
    fontSize: 11,
    fontWeight: '500',
  },
  header: {
    fontSize: wp('4.5%'),
    fontWeight: '600',
    marginTop: hp('.2%'),
    marginHorizontal: wp('10%'),
  },
  preferedtime: {
    padding: 10,
    marginTop: 10,
    flexDirection: 'row',
    marginHorizontal: 30,
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  timeselection: {
    borderColor: '#fa892e',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  location: {
    flex: 1,
    marginVertical: hp('.5%'),
    borderWidth: 1.6,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp('10%'),
    paddingVertical: hp('1.5%'),
    borderRadius: 10,
    borderColor: '#fa8832',
  },
  location_row: {
    flex: 1,
    paddingHorizontal: wp('3.5%'),
    paddingVertical: hp('1%'),
  },
  location_text: {
    fontSize: wp('3%'),
    fontWeight: '700',
  },
});
