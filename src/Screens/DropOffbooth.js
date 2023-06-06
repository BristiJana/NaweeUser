import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import SwitchTab from '../Components/SwitchTab';
import CheckBox from '@react-native-community/checkbox';
import CustomDropdown from '../Components/CustomDropdown';
import ProcessBar from '../Components/ProcessBar';
import Custombutton from '../Components/CustomButton';
import SafeAreaView from 'react-native-safe-area-view';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function DropOffbooth({nav}) {
  const [activeTab, setactiveTab] = useState('Drop-off');
  const [address1, setaddress1] = useState(false);
  const [address2, setaddress2] = useState(false);
  return (
    <SafeAreaView>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{height: 'auto', margin: '1%'}}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>Drop at your Nearby Booth</Text>
        <Text style={styles.subtext}>
          (You can drop-off your parcel anytime between 9am-7pm)
        </Text>
        <View style={styles.location}>
          <TouchableOpacity>
            <Text style={{fontFamily: 'Syne-Regular', fontSize: wp('3.7%')}}>
              Search from booths near you
            </Text>
          </TouchableOpacity>
        </View>
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
            marginHorizontal: wp('8%'),
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
        <CustomDropdown
          title="Parcel Details"
          itemlist={[
            'single Parcel to Single Receiver',
            'Multiple Parcel to Single Receiver',
            'Multiple Parcel to Multiple Receiver',
          ]}
          onPress={a => console.log(a)}
          search={true}
          searchplaecholder="search Booths Near you"
          buttonWidth="85%"
          placeholder="Select Parcel Details"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '2%',
  },
  heading: {
    fontSize: wp('4.5%'),
    fontWeight: '700',
    marginVertical: hp('2%'),
    marginHorizontal: wp('5%'),
    fontFamily: 'Syne-Regular',
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
    padding: '3%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderColor: '#fa892e',
    flexDirection: 'row',
  },
  checkboxText: {
    fontSize: wp('3.5%'),
    fontWeight: '500',
    padding: '2%',
  },
  text: {
    fontSize: wp('4.5%'),
    fontWeight: '700',
    padding: wp('3%'),
    paddingHorizontal: wp('7%'),
    marginVertical: hp('.5%'),
    fontFamily: 'Syne-Regular',
  },
  subtext: {
    fontSize: wp('3%'),
    fontWeight: '400',
    alignSelf: 'center',
    fontFamily: 'Roboto',
    color: '#fa892e',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: '5%',
  },
  location: {
    flex: 1,
    marginVertical: hp('1%'),
    borderWidth: 1.6,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp('8%'),
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
