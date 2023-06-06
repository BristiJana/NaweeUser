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
const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const Dropi = () => {
  const [value1, setValue1] = useState('');

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={value1}
      searchPlaceholder="Search..."
      value={value1}
      onChange={item => {
        setValue1(item.value);
      }}
    />
  );
};
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
  {
    id: '5',
    name: 'Sex',
    val: 'Male',
    icon: 'keyboard-arrow-down',
  },
  {
    id: '6',
    name: 'Address',
    val: '123,skyhigh lights,17th floor,3D',
    icon: '',
  },
  {
    id: '7',
    name: 'Landmark',
    val: 'Near Lagoon Lake',
    icon: '',
  },
  {
    id: '8',
    name: 'City',
    val: 'City',
    icon: 'keyboard-arrow-down',
  },
  {
    id: '9',
    name: 'State/Province',
    val: 'State/Province',
    icon: 'keyboard-arrow-down',
  },
  {
    id: '10',
    name: 'Zip/Postal Code',
    val: '987567',
    icon: '',
  },

  {
    id: '11',
    name: 'How did you hear about us ?',
    val: '',
    icon: '',
  },
];

export default function AgentProfile() {
  const myItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: '#FA8832',
          marginHorizontal: 5,
          width: 302,
        }}
      />
    );
  };

  const myListEmpty = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={styles.item}>No data found</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.head}>Personal Information</Text>
      <FlatList
        style={{paddingBottom: 40}}
        data={info}
        renderItem={({item}) => (
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.item}>{item.name}</Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.item}>{item.val}</Text>
              <Micon
                name={item.icon}
                size={28}
                color="#000"
                style={{marginTop: 16, marginRight: 10}}
                onPress={() => {
                  Dropi;
                }}
              />
            </View>
          </View>
        )}
        ItemSeparatorComponent={myItemSeparator}
        ListEmptyComponent={myListEmpty}
        ListFooterComponent={() => (
          <>
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
          </>
        )}
      />
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
  dropdown: {
    margin: 16,
    height: 50,

    borderBottomWidth: 1,
    borderBottomColor: '#FA8832',
    borderStyle: 'solid',
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
