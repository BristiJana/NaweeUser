import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Feather';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import CustomButton from '../Components/CustomButton';
import SwitchTab from '../Components/SwitchTab';
import CustomDropdown from '../Components/CustomDropdown';

export default function CancelledOrder3({nav}) {
  const [activeTab, setactiveTab] = useState('Drop-off');
  const [isselected, setselected] = useState(false);
  const [selectedtime, setSelectedTime] = useState('8am-12pm');
  return (
    <ScrollView style={styles.Main} showsVerticalScrollIndicator={false}>
      <Text style={styles.header}>Recieve at Booth near your receiver</Text>
      <Text
        style={{
          marginHorizontal: '5%',
          marginVertical: '1%',
          fontSize: 12,
          color: '#fa8832',
        }}>
        (You can pickup your parcel at any time)
      </Text>

      <CustomDropdown
        title="Destination"
        buttonWidth="80%"
        itemlist={['bhandara', 'Current Location']}
        placeholder="Destination"
        onPress={a => console.log(a)}
      />

      <View style={styles.autocomplete}>
        <GooglePlacesAutocomplete
          placeholder="Search booths near you"
          fetchDetails={true}
          onPress={(data, details = null) => {
            console.log(data, details);
          }}
          styles={{
            container: {
              marginVertical: '3%',
              borderRadius: 15,
              marginHorizontal: '8%',
              borderColor: '#fa8832',
              borderWidth: 1,
            },
            textInput: {
              borderRadius: 15,
              fontSize: 17,
              backgroundColor: 'transparent',
            },
          }}
          query={{
            key: 'YOUR API KEY',
            language: 'en',
          }}
          renderRightButton={() => (
            <TouchableOpacity
              onPress={() => nav.navigate('Sera', {name: 'Sera'})}>
              <Icon1
                name="search"
                size={24}
                color="black"
                style={{
                  padding: '3%',
                  fontWeight: '700',
                }}
              />
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={{flex: 1, marginHorizontal: '8%'}}>
        <Text style={{color: '#FA8832', marginVertical: '1%', fontSize: 14}}>
          Final amount will be calculated in next step, Please cross-check your
          order thoroughly before confirming.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    marginHorizontal: '2%',
  },
  headerContainer: {
    flex: 1,
    marginTop: '5%',
    paddingVertical: '2%',
    marginBottom: '3%',
    marginHorizontal: '5%',
    borderBottomWidth: 1,
    borderBottomColor: '#FA8832',
  },
  header: {
    fontSize: 17,
    fontWeight: '500',
    marginHorizontal: '5%',
    marginTop: '4%',
  },
  parcelbox: {
    marginVertical: '3%',
    borderWidth: 1,
    marginHorizontal: '5%',
    borderColor: '#FA8832',
    borderRadius: 10,
  },
  parcelheading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '3%',
    borderBottomColor: '#FA8832',
    borderBottomWidth: 1,
    paddingVertical: '3%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '3%',
    paddingVertical: '2%',
  },
  timeselection: {
    borderColor: '#fa892e',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  rawtext: {
    marginHorizontal: '3%',
    marginVertical: '1%',
    paddingVertical: '2%',
  },
  rowitem: {
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.5,
  },
  summary: {
    marginHorizontal: '5%',
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 5,
    marginVertical: '3%',
    paddingTop: '2%',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    paddingVertical: '2%',
    backgroundColor: '#FA8832',
    paddingVertical: '5%',
    paddingHorizontal: '3%',
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#FA8832',
    borderWidth: 1,
    marginVertical: '3%',
    flex: 1,
    marginHorizontal: '3%',
    borderRadius: 10,
    padding: '4%',
  },
  totalitem: {
    paddingHorizontal: 10,
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
