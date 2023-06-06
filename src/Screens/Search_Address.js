import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/Feather';
import SafeAreaView from 'react-native-safe-area-view';
export default function Search_Address({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchcontainer}>
        <GooglePlacesAutocomplete
          placeholder="Search City"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'YOUR API KEY',
            language: 'en',
          }}
          styles={{
            textInputContainer: {width: wp('80%')},
            container: {height: hp('7%')},
            textInput: {backgroundColor: 'transparent'},
          }}
        />
        <TouchableOpacity>
          <Icon
            name="search"
            size={wp('6%')}
            color="#000"
            style={{marginVertical: hp('1%'), marginHorizontal: wp('2%')}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.listcontainer}>
        <TouchableOpacity
          style={styles.listitem}
          onPress={() => navigation.navigate('Difa', {name: 'Difa'})}>
          <Text>Lagos City Centre Road</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listitem}
          onPress={() => navigation.navigate('Difa', {name: 'Difa'})}>
          <Text>Lagos City Town Hall</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listitem}
          onPress={() => navigation.navigate('Difa', {name: 'Difa'})}>
          <Text>Lagos City Library Area</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listitem}
          onPress={() => navigation.navigate('Difa', {name: 'Difa'})}
          s>
          <Text>Lagos City Near Bank</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: hp('3%'),
    marginHorizontal: wp('3%'),
  },
  searchcontainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: wp('3%'),
    marginRight: wp('5%'),
    borderColor: '#fa8832',
    borderWidth: 1,
    borderRadius: 15,
    maxHeight: hp('6%'),
  },
  listcontainer: {
    flex: 1,
    marginHorizontal: wp('5%'),
    marginTop: hp('3%'),
  },
  listitem: {
    marginVertical: hp('2%'),
    borderBottomColor: '#fff2e9',
    borderBottomWidth: 1,
    paddingBottom: hp('1%'),
  },
});
