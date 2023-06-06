import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import TrackParcel from '../Components/TrackPacel';
// import CustomTextInput from '../Components/CustomTextInput';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const TrackParcelInfo = ({navigation}) => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.mainContainer}>
          <View style={styles.Container}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.img}
                source={require('../assests/person.png')}
              />
            </View>
            <Text style={styles.Heading}> Track Your Parcel ...!!</Text>
            <Text style={styles.para}>
              Enter your Track number to Search your Parcel
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Search your parcel by track number"
              style={styles.input}
              // onChangeText={text => onChange(text)}
            />
            <FontAwesome5 style={styles.iconBar} name="search" size={15} />
          </View>
          <Text style={styles.subHeading}>Your Parcels</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('TrackD', {name: 'TrackD'})}>
            <TrackParcel
              parcelName="AWB2323dfnj"
              loc1="Lagos"
              loc2="Abuja"
              ParcelStatus="Arrived"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('TrackD', {name: 'TrackD'})}>
            <TrackParcel
              parcelName="AWB2323dfnj"
              loc1="Lagos"
              loc2="Abuja"
              ParcelStatus="Delivered"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('TrackD', {name: 'TrackD'})}>
            <TrackParcel
              parcelName="AWB2323dfnj"
              loc1="Lagos"
              loc2="Abuja"
              ParcelStatus="Delivered"
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // alignSelf: 'center',
  },
  Container: {
    alignSelf: 'center',
    marginTop: 8,
  },

  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    width: 295,
    borderRadius: 10,
    height: 40,
    marginHorizontal: 50,
    marginTop: 40,
    borderColor: '#FA8832',
  },
  imageContainer: {
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
  },
  Heading: {
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    marginTop: 20,
  },
  subHeading: {
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 32,
    marginTop: 30,
    marginBottom: 10,
    color: 'black',
  },
  para: {
    width: 170,
    display: 'flex',
    textAlign: 'center',
    color: 'black',
    fontWeight: '400',
    fontSize: 12,
    marginTop: 10,
  },
  input: {
    padding: 10,
  },
  iconBar: {
    position: 'relative',
    left: '65%',
    top: '3.5%',
  },
});
export default TrackParcelInfo;
