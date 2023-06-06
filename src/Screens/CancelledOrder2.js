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
import CustomButton from '../Components/CustomButton';
import SwitchTab from '../Components/SwitchTab';
import CustomTextInput from '../Components/CustomTextInput';
import CheckBox from '@react-native-community/checkbox';
import Can3 from './CancelledOrder3';

export default function CancelledOrder2({navigation}) {
  const [activeTab, setactiveTab] = useState('Pickup');
  const [isselected, setselected] = useState(false);
  const [selectedtime, setSelectedTime] = useState('8am-12pm');
  return (
    <ScrollView style={styles.Main} showsVerticalScrollIndicator={false}>
      <View style={styles.headerContainer}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 16, fontWeight: '600'}}>AWP7685</Text>
            <Text style={{color: '#f27b7b'}}> (Cancelled)</Text>
          </View>
          <Text style={{fontSize: 14, fontWeight: '600'}}>31/03/2022</Text>
        </View>
        <Text style={{fontSize: 15, fontWeight: '500'}}>Parcel-PAR576</Text>
      </View>
      <View style={styles.parcelbox}>
        <View style={styles.parcelheading}>
          <Text
            style={{fontSize: 17, fontWeight: '500', marginHorizontal: '3%'}}>
            PAR57
          </Text>
          <Icon
            name="chevron-thin-down"
            size={20}
            color="black"
            style={{marginHorizontal: '3%'}}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.rowitem}>Weight:</Text>
          <Text style={styles.rowitem}>2kg</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowitem}>Size:</Text>
          <Text style={styles.rowitem}>50cm*50cm</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowitem}>Parcel Type::</Text>
          <Text style={styles.rowitem}>Document</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowitem}>Description</Text>
        </View>
        <View style={styles.rawtext}>
          <Text>It contains some important documents.</Text>
          <Text style={{color: '#FA8832', marginVertical: '1%', fontSize: 14}}>
            Special Instructions: Please hand it over to Mr. parav Khurana only.
          </Text>
        </View>
      </View>
      <SwitchTab
        activeTab={activeTab}
        setactiveTab={setactiveTab}
        leftoption="Pickup"
        rightoption="Drop-off"
      />
      {activeTab == 'Pickup' ? (
        <>
          <Text style={styles.header}>Receivers Information</Text>
          <CustomTextInput placeholder="Search Landmark" visible={true} />
          <CustomTextInput placeholder="Name" visible={true} />
          <CustomTextInput
            placeholder="Address"
            visible={true}
            onPress={() => navigation.navigate('Sera', {name: 'Sera'})}
          />
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
          <View style={{flex: 1, marginHorizontal: '5%'}}>
            <Text
              style={{color: '#FA8832', marginVertical: '1%', fontSize: 14}}>
              Final amount will be calculated in next step, Please cross-check
              your order thoroughly before confirming.
            </Text>
          </View>
        </>
      ) : (
        <Can3 nav={navigation} />
      )}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <CustomButton
          name="BACK"
          fontcolor="black"
          bgcolor="white"
          width="30%"
          height="60%"
        />
        <CustomButton
          name="NEXT"
          fontcolor="white"
          bgcolor="#FA8832"
          width="30%"
          height="60%"
        />
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
    marginHorizontal: 35,
    marginTop: '4%',
  },
  preferedtime: {
    padding: '2%',
    marginTop: '2%',
    flexDirection: 'row',
    marginHorizontal: '5%',
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
    marginHorizontal: '5%',
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
