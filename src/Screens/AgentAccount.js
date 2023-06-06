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
    name: 'Profile',
    val: 0,
    icon: '',
    info: '',
  },
  {
    id: '2',
    name: 'Personal Information',
    val: 1,
    icon: 'right',
    info: '',
  },
  {
    id: '3',
    name: 'Guarantors Information',
    val: 1,
    icon: 'right',
    info: '',
  },
  {
    id: '4',
    name: 'Emergency Contact',
    val: 1,
    icon: 'right',
    info: '',
  },
  {
    id: '5',
    name: 'Vehicle Information',
    val: 1,
    icon: 'right',
    info: '',
  },
  {
    id: '6',
    name: 'Bank Information',
    val: 1,
    icon: 'right',
    info: '',
  },
  {
    id: '7',
    name: 'Frequent Route',
    val: 1,
    icon: 'right',
    info: '',
  },
  {
    id: '8',
    name: 'Terms & Conditions',
    val: 0,
    icon: 'right',
    info: '',
  },
  {
    id: '9',
    name: 'Privacy Policy',
    val: 0,
    icon: 'right',
    info: '',
  },
  {
    id: '10',
    name: 'Change Password',
    val: 0,
    icon: 'right',
    info: '',
  },

  {
    id: '11',
    name: 'Version',
    val: 0,

    icon: '',
    info: '1.2.3',
  },
];

export default function AgentAccount() {
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
      <ImageBackground
        style={{
          backgroundColor: '#FA8832',
          height: 149,
          width: '100%',
          paddingTop: 17,
        }}>
        <Image
          source={require('./man.png')}
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            alignContent: 'center',
          }}
        />
      </ImageBackground>
      <ImageBackground
        source={require('./penback.png')}
        style={{
          width: 19,
          height: 19,
          position: 'absolute',
          top: 107,
          left: 226.8,
        }}>
        <Image
          source={require('./pen.png')}
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            alignContent: 'center',
            width: 11.45,
            height: 11.45,
            marginTop: 3.5,
          }}
        />
      </ImageBackground>
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
