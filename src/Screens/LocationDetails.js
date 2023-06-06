import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomTextInput from '../Components/CustomTextInput';
import CustomDropdown from '../Components/CustomDropdown';
import CustomButton from '../Components/CustomButton';

const LocationDetails = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.card}>
            <TouchableOpacity style={styles.button}>
              <FontAwesome name="map-marker" size={25} color="#FA8832" />
              <Text style={styles.text}>Current Location</Text>
            </TouchableOpacity>
          </View>
          <Text>OR</Text>
          <View style={styles.details}>
            <Text>Add New Address Details</Text>
            <CustomTextInput textLable="Name" />
            <CustomTextInput textLable="Add a Phone Number" />
            <CustomTextInput textLable="Address Line 1" />
            <CustomTextInput textLable="Landmark" />
            <CustomTextInput textLable="City" />
            <CustomDropdown itemlist="State" />
            <CustomTextInput textLable="Zip/Postal Code" />
            <CustomButton
              name="Sava & Continue"
              bgcolor="#FA8832"
              width={145}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignSelf: 'center',
  },
  card: {},
  button: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'green',
    width: 280,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    padding: 12,
  },
});

export default LocationDetails;
