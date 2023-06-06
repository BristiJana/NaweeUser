import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import CustomTextInput from '../Components/CustomTextInput';
import Icon from 'react-native-vector-icons/Entypo';
import CustomDropdown from '../Components/CustomDropdown';
import CustomButton from '../Components/CustomButton';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function DifferentAddress({navigation}) {
  return (
    <ScrollView
      contentContainerStyle={{height: 'auto', marginHorizontal: '3%'}}
      showsVerticalScrollIndicator={false}>
      <TouchableOpacity style={styles.location}>
        <Icon
          name="location"
          size={22}
          color="#fa892e"
          style={{alignSelf: 'center'}}
        />
        <Text style={styles.text}>Current Location</Text>
      </TouchableOpacity>
      <Text style={styles.or}>Or</Text>
      <View style={styles.location2}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Sera', {name: 'Sera'})}>
          <Text style={{fontFamily: 'Syne-Regular', fontSize: wp('3.7%')}}>
            Search Address from locations
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.locationtext}>
        <TouchableOpacity>
          <Text style={{fontFamily: 'Syne-Regular', fontSize: wp('3.7%')}}>
            Lagos city centre road
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.heading}>Add New Address Details</Text>
      <CustomTextInput placeholder="Name" />
      <CustomTextInput placeholder="Add Phone Number" />
      <CustomTextInput placeholder="Address line 1" />
      <CustomTextInput placeholder="Landmark" />
      <CustomTextInput placeholder="City" />
      <CustomDropdown
        placeholder="State/Province"
        buttonWidth={330}
        itemlist={['Maharashtra', 'Other']}
        onPress={a => console.log(a)}
      />
      <CustomTextInput placeholder="Zip Postal Code" />
      <CustomButton
        name="Save & Continue"
        width="50%"
        height="4%"
        fontcolor="white"
        bgcolor="#fa892e"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  location: {
    flex: 1,
    borderColor: 'white',
    borderWidth: 1,
    elevation: 5,
    backgroundColor: 'white',
    marginHorizontal: '8%',
    borderRadius: 15,
    marginVertical: '3%',
    paddingHorizontal: '23%',
    alignItems: 'center',
    paddingVertical: '3%',
    flexDirection: 'row',
    alignContent: 'center',
  },
  text: {
    alignSelf: 'center',
    marginHorizontal: '6%',
  },
  or: {
    fontSize: wp('4%'),
    fontWeight: '600',
    marginVertical: '5%',
    alignSelf: 'center',
  },
  heading: {
    flex: 1,
    fontSize: 17,
    marginHorizontal: '10%',
    textAlign: 'left',
    fontWeight: '700',
    marginTop: 10,
  },
  location2: {
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
  locationtext: {
    flex: 1,
    marginVertical: hp('.5%'),
    borderWidth: 1.6,
    justifyContent: 'center',
    marginHorizontal: wp('10%'),
    paddingVertical: hp('1.5%'),
    borderRadius: 10,
    borderColor: '#fa8832',
    paddingHorizontal: wp('3%'),
  },
});
