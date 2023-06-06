import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import Icon1 from 'react-native-vector-icons/Feather';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomDropdown from '../Components/CustomDropdown';
import CustomTextInput from './CustomTextInput';
import CustomButton from './CustomButton';
import CheckBox from '@react-native-community/checkbox';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function ExpandableForMany({HeaderText, isDropoFF}) {
  const [expanded, setexpanded] = useState(false);
  const [isselected, setselected] = useState(false);
  const [selectedtime, setSelectedTime] = useState('8am-12pm');
  const [surity, setSurity] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: hp('2%'),
        borderBottomColor: 'orange',
        borderWidth: 1,
        paddingBottom: hp('2%'),
        marginHorizontal: wp('2%'),
        borderRightColor: 'white',
        borderTopColor: 'white',
        borderLeftColor: 'white',
        marginVertical: hp('1%'),
      }}>
      <Collapse
        isExpanded={expanded}
        align="center"
        onToggle={isExpanded => setexpanded(isExpanded)}>
        <CollapseHeader style={{paddingHorizontal: wp('10%')}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{alignSelf: 'center', fontFamily: 'Syne-Regular'}}>
              {HeaderText}
            </Text>
            {expanded ? (
              <Icon name="chevron-up" size={20} color="#000" />
            ) : (
              <Icon name="chevron-down" size={20} color="#000" />
            )}
          </View>
        </CollapseHeader>
        <CollapseBody>
          <View
            style={{
              height: 'auto',
            }}>
            
            <CustomDropdown
              buttonWidth={wp('80%')}
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
            <View>
              <TextInput
                style={styles.TextInput}
                multiline={true}
                placeholder="Description (Name/ condition of parcel)"
                textAlignVertical="top"
              />
            </View>
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
            {isDropoFF ? (
              <>
                <Text style={styles.header}>
                  Recieve at Booth near your receiver
                </Text>
                <Text
                  style={{
                    marginHorizontal: wp('10%'),
                    marginVertical: hp('1%'),
                    fontSize: wp('3.5%'),
                    color: '#fa8832',
                  }}>
                  (You can pickup your parcel at any time)
                </Text>
                <View style={styles.autocomplete}>
                  <GooglePlacesAutocomplete
                    placeholder="Search booths near you"
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                      console.log(data, details);
                    }}
                    styles={{
                      container: {
                        flex: 1,
                        marginVertical: hp('2%'),
                        borderRadius: wp('4%'),
                        borderColor: '#fa8832',
                        borderWidth: 1,
                        width: wp('80%'),
                        alignSelf: 'center',
                      },
                      textInput: {
                        borderRadius: wp('5%'),
                        fontSize: 16,
                        fontFamily: 'Syne-Regular',
                        backgroundColor: 'transparent',
                      },
                    }}
                    query={{
                      key: 'YOUR API KEY',
                      language: 'en',
                    }}
                    renderRightButton={() => (
                      <TouchableOpacity>
                        <Icon1
                          name="search"
                          size={24}
                          color="black"
                          style={{
                            padding: wp('3%'),
                            fontWeight: '700',
                          }}
                        />
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </>
            ) : (
              <>
                <Text style={styles.header}>Receivers Information</Text>
                <CustomTextInput placeholder="Search Landmark" />
                <CustomTextInput placeholder="Name" />
                <CustomTextInput placeholder="Address" />
                <CustomTextInput placeholder="Add a Phone Number" />
                <View style={styles.preferedtime}>
                  <CheckBox
                    value={isselected}
                    onValueChange={setselected}
                    tintColors={{true: '#fa892e', false: '#fa892e'}}
                  />
                  <View style={styles.prefered_time_text_container}>
                    <Text style={styles.preferedtime_text}>
                      Prefered Pickup Time
                    </Text>
                    <Text style={styles.preferedtime_text2}>
                      (subject to additional charges)
                    </Text>
                  </View>
                </View>
                {isselected ? (
                  <View style={styles.timeselection}>
                    <View style={styles.row}>
                      <TouchableOpacity
                        onPress={() => setSelectedTime('8am-12pm')}>
                        <Text
                          style={
                            selectedtime == '8am-12pm'
                              ? styles.itemselected
                              : styles.preferedtime1
                          }>
                          8am-12pm
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => setSelectedTime('1pm-6pm')}>
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
                      <TouchableOpacity
                        onPress={() => setSelectedTime('7pm-10pm')}>
                        <Text
                          style={
                            selectedtime == '7pm-10pm'
                              ? styles.itemselected
                              : styles.preferedtime1
                          }>
                          7pm-10pm
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => setSelectedTime('Anytime')}>
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
              </>
            )}
            <View style={styles.buttoncontainer}>
              <CustomButton
                name="DELETE"
                bgcolor="#fff"
                width={wp('50%')}
                height="70%"
                fontcolor={hp('6%')}
              />
              <CustomButton
                name="UPDATE"
                bgcolor="#fca15a"
                width={wp('50%')}
                height={hp('6%')}
                fontcolor="#fff"
              />
            </View>
          </View>
        </CollapseBody>
      </Collapse>
    </View>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    flex: 1,
    fontFamily: 'Syne-Regular',
    borderColor: 'white',
    borderWidth: 1,
    elevation: 5,
    backgroundColor: 'white',
    marginHorizontal: wp('7%'),
    borderRadius: 20,
    paddingBottom: hp('5%'),
    marginVertical: hp('1%'),
    alignSelf: 'stretch',
    marginLeft: wp('9%'),
    paddingHorizontal: wp('3%'),
  },
  smallinput: {
    flex: 1,
    borderColor: 'white',
    borderWidth: 1,
    elevation: 5,
    backgroundColor: 'white',
    marginHorizontal: wp('7%'),
    borderRadius: wp('4%'),
    paddingBottom: hp('2%'),
    paddingHorizontal: wp('4%'),
    marginLeft: wp('9%'),
    marginVertical:hp('1%')
  },
  buttoncontainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    flex: 1,
    marginBottom: '5%',
  },
  checkbox: {
    padding: wp('2%'),
    flex: 1,
    marginHorizontal: wp('8%'),
    borderColor: '#fa892e',
    flexDirection: 'row',
  },
  checkboxText: {
    fontSize: wp('3.5%'),
    fontWeight: '500',
    padding: wp('1%'),
  },
  smalltext: {
    fontSize: wp('3%'),
    fontWeight: '500',
  },
  header: {
    fontSize: wp('4.5%'),
    fontWeight: '700',
    marginTop: hp('1%'),
    marginHorizontal: wp('9%'),
    fontFamily: 'Syne-Medium',
  },
  preferedtime: {
    flex: 1,
    padding: wp('2%'),
    marginTop: hp('2%'),
    flexDirection: 'row',
    marginHorizontal: wp('4%'),
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
});
