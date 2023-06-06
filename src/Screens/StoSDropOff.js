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
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import ProcessBar from '../Components/ProcessBar';
import SwitchTab from '../Components/SwitchTab';
import CustomDropdown from '../Components/CustomDropdown';
import Custombutton from '../Components/CustomButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function StoSDropOff({nav}) {
  const [activeTab, setActiveTab] = useState('Drop at Booth');
  const [surity, setSurity] = useState(false);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{marginVertical: '1%'}}>
      <Text
        style={{
          flex: 1,
          marginHorizontal: wp('9%'),
          fontSize: wp('5%'),
          fontWeight: '600',
        }}>
        Recieve at Booth near your receiver
      </Text>
      <Text
        style={{
          marginHorizontal: wp('9%'),
          marginVertical: hp('1%'),
          fontSize: wp('3.2%'),
          color: '#fa8832',
          letterSpacing: wp('0.5%'),
        }}>
        (You can pickup your parcel at any time)
      </Text>
      <View style={styles.location}>
        <TouchableOpacity onPress={() => nav.navigate('Sera', {name: 'Sera'})}>
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
      <Text
        style={{
          flex: 1,
          marginHorizontal: wp('10%'),
          fontSize: wp('4.8%'),
          fontWeight: '700',
          fontFamily: 'Syne-Regular',
        }}>
        Parcel Description
      </Text>
      <CustomDropdown
        buttonWidth="80%"
        itemlist={[
          '0-5Kg (Light)',
          '5-20kg (Medium)',
          '20-50Kg(Heavy)',
          '50Kg>(Vey heavy)',
        ]}
        placeholder="Select Parcel Description"
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
        placeholder="Select Parcel Size"
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
          <Text style={styles.smalltext}>(Subject to conditional charges)</Text>
        </View>
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
    fontSize: wp('5.2%'),
    fontWeight: '600',
    marginTop: hp('1%'),
    marginHorizontal: wp('10%'),
  },

  autocomplete: {
    flex: 0.2,
    paddingTop: '1%',
    marginHorizontal: wp('10%'),
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
