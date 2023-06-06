import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Micon from 'react-native-vector-icons/MaterialIcons';
import Aicon from 'react-native-vector-icons/AntDesign';
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

const info = [
  {
    id: '1',
    name: 'Profile',
    val: 0,
    icon: 'right',
    info: '',
    nav: 'Profile',
  },

  {
    id: '2',
    name: 'Terms & Conditions',
    val: 0,
    icon: 'right',
    info: '',
  },
  {
    id: '3',
    name: 'Privacy Policy',
    val: 0,
    icon: 'right',
    info: '',
    nav: '',
  },
  {
    id: '4',
    name: 'Change Password',
    val: 0,
    icon: 'right',
    info: '',
    nav: 'Confirm',
  },

  {
    id: '5',
    name: 'Version',
    val: 0,

    icon: '',
    info: '1.2.3',
    nav: '',
  },
];

export default function Setting({navigation}) {
  const myItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: '#FA8832',
          marginHorizontal: 5,
          width: 302,
          opacity: 0.46,
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
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        style={{
          paddingBottom: 40,
          marginLeft: 40,
          marginRight: 40,
          marginBottom: 100,
        }}
        data={info}
        renderItem={({item}) => (
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={item.val === 1 ? styles.item : styles.itemSelected}>
              {item.name}
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={[styles.item, {paddingRight: 0}]}>{item.info}</Text>
              <Aicon
                name={item.icon}
                size={20}
                color="#333333"
                style={{marginTop: 24, marginRight: 10}}
                onPress={() => navigation.navigate(item.nav)}
              />
            </View>
          </View>
        )}
        ItemSeparatorComponent={myItemSeparator}
        ListEmptyComponent={myListEmpty}
        ListFooterComponent={() => (
          <>
            <View
              style={{
                height: 1,
                backgroundColor: '#FA8832',
                marginHorizontal: 4,
                width: 302,
                opacity: 0.46,
              }}
            />
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

    flex: 1,
  },
  itemSelected: {
    padding: 16,
    paddingBottom: 10,
    paddingLeft: 7,
    fontSize: 16,
    marginTop: 5,
    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '690',

    lineHeight: 19,

    color: '#333333',
  },
  item: {
    padding: 20,
    paddingBottom: 10,
    fontSize: 14,
    marginTop: 5,
    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '400',

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
