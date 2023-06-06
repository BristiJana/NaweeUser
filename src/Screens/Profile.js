import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Micon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import inflections from 'i/lib/inflections';
import {ScrollView} from 'react-native-gesture-handler';
const data = [
  {label: 'Male', value: '1'},
  {label: 'Female', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];
const data1 = [
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const data2 = [
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const it = ['male', 'female'];
const info = [
  {
    id: '1',
    name: 'Name',
    val: 'Mayuu P',
    icon: '',
  },
  {
    id: '2',
    name: 'Email ID',
    val: 'mayuu2209@gmail.com',
    icon: '',
  },
  {
    id: '3',
    name: 'Password',
    val: '**********',
    icon: '',
  },
  {
    id: '4',
    name: 'Phone',
    val: '8777319730',
    icon: '',
  },
];

const info1 = [
  {
    id: '5',
    name: 'Address',
    val: '123,skyhigh lights,17th floor,3D',
    icon: '',
  },
  {
    id: '6',
    name: 'Landmark',
    val: 'Near Lagoon Lake',
    icon: '',
  },
];
export default function Profile() {
  const [value, setValue] = useState('Male');
  const [value1, setValue1] = useState('dfd');
  const [value2, setValue2] = useState('dhgh');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.head}>Personal Information</Text>
        {info.map(user => (
          <>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.item}>{user.name}</Text>

              <Text style={styles.item}>{user.val}</Text>
            </View>
            <View
              style={{
                height: 1,
                backgroundColor: '#FA8832',
                marginHorizontal: 4,
                width: 302,
                opacity: 0.45,
              }}
            />
          </>
        ))}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.item}>Sex</Text>

          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={100}
            labelField="label"
            valueField="value"
            searchPlaceholder="Search..."
            value={value}
            onChange={item => {
              setValue(item.value);
            }}
          />
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: '#FA8832',
            marginHorizontal: 3,
            width: 302,
            opacity: 0.45,
          }}
        />
        {info1.map(user => (
          <>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.item}>{user.name}</Text>

              <Text style={styles.item}>{user.val}</Text>
            </View>
            <View
              style={{
                height: 1,
                backgroundColor: '#FA8832',
                marginHorizontal: 4,
                width: 302,
                opacity: 0.45,
              }}
            />
          </>
        ))}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.item}>City</Text>

          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data1}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            searchPlaceholder="Search..."
            value={value2}
            onChange={item => {
              setValue(item.value2);
            }}
          />
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: '#FA8832',
            marginHorizontal: 4,
            width: 302,
            opacity: 0.45,
          }}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.item}>State/Province</Text>

          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data2}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            searchPlaceholder="Search..."
            value={value1}
            onChange={item => {
              setValue(item.value1);
            }}
          />
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: '#FA8832',
            marginHorizontal: 4,
            width: 302,
            opacity: 0.45,
          }}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.item}>Zip/Postal Code</Text>

          <Text style={styles.item}>987567</Text>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: '#FA8832',
            marginHorizontal: 4,
            width: 302,
            opacity: 0.45,
          }}
        />
        <Text style={styles.item}>How did you hear about us?</Text>
        <Text
          style={{
            fontSize: 14,
            marginLeft: 20,
            marginBottom: 16,
            fontFamily: 'Syne',
            fontStyle: 'normal',
            fontWeight: '500',

            lineHeight: 14,

            color: '#333333',
          }}>
          Friends
        </Text>
        <View
          style={{
            height: 1,
            backgroundColor: '#FA8832',
            marginHorizontal: 4,
            width: 302,
            opacity: 0.45,
          }}
        />
        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={() => {}}>
            <LinearGradient
              colors={['#FA8832', '#FA8832']}
              style={styles.signIn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                UPDATE
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 100,
    marginTop: 20,
    flex: 1,
    height: 860,
  },
  head: {
    fontSize: 14,
    marginBottom: 10,
    marginLeft: 16,
    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '500',

    lineHeight: 17,

    color: '#333333',
  },
  item: {
    padding: 20,
    fontSize: 14,
    marginTop: 5,
    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '500',

    lineHeight: 14,

    color: '#333333',
  },
  selectedTextStyle: {
    fontSize: 14,
    marginTop: 5,
    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '500',

    lineHeight: 14,

    color: '#333333',
  },
  placeholderStyle: {
    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '500',

    color: '#333333',
    marginLeft: 30,
  },
  iconStyle: {
    width: 22,
    height: 22,
    color: '#333333',
  },
  dropdown: {
    margin: 16,
    height: 50,
    width: 70,
    marginTop: 5,
    marginLeft: 20,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: ' #FA8832',
    borderRadius: 10,
    width: 130,
    height: 50,
    borderRadius: 5,
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: ' #FA8832',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
