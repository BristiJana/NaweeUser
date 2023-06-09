import {View, Text} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/Entypo';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


export default function CustomDropdown({title, itemlist, onPress, search,searchplaceholder,buttonWidth,placeholder}) {
  return (
    <View style={{flex:1}}>
      {title ? (
      <Text
        style={{
          fontSize: wp('4%'),
          fontWeight: '500',
          paddingLeft: wp('10%'),
          marginTop: hp('1.5%'),
          fontFamily:'Syne-Regular'
        }}>
        {title}
      </Text>
      ) : null}
      <View style={{flexDirection: 'row',marginTop:0 }}>
        <SelectDropdown
          data={itemlist}
          onSelect={(selectedItem, index) => {
            onPress(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          defaultButtonText={placeholder}
          
          renderDropdownIcon={() => (
            <Icon
              name="chevron-thin-down"
              type="FontAwesome"
              size={20}
              color="black"
              style={{paddingHorizontal:'2%', fontWeight: '700'}}
            />
          )}
          dropdownIconPosition="right"
          buttonTextStyle={{
            fontSize: 16,
            color: 'grey',
            fontFamily:'Syne-Regular',
            textAlign:'left',
            fontWeight: '600',
          }}
          buttonStyle={{
            marginHorizontal: '10%',
            marginTop:hp('2.5%'),
            width: buttonWidth,
            backgroundColor: '#fff',
            borderColor: '#fca15a',
            borderWidth: 2,
            borderRadius: 15,
          }}
          dropdownStyle={{
            width: '80%',
            backgroundColor: '#fff',
            borderColor: '#fca15a',
            borderWidth: 2,
            borderRadius: 19,
            alignSelf:'center',
            marginTop: hp('3%'),
          }}
          rowTextStyle={{
            fontSize: 15,
            fontWeight: '400',
            textAlign:'left',
            fontFamily:'Syne-Regular',
          }}
          selectedRowStyle={{
            backgroundColor: '#fee7d6',
          }}
          rowStyle={{
            borderBottomColor:'transparent',
            borderBottomWidth: 1,
          }}
          disableAutoScroll={true}
          search={search}
          searchPlaceHolder={searchplaceholder}
          searchTextStyle={{
            fontSize: 15,
            fontWeight: '400',
            padding: '2%',
            fontFamily:'Syne-Regular',
          }}
          
        />
        <SelectDropdown
          data={itemlist}
          onSelect={(selectedItem, index) => {
            onPress(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          defaultButtonText={placeholder}
          
          renderDropdownIcon={() => (
            <Icon
              name="chevron-thin-down"
              type="FontAwesome"
              size={20}
              color="black"
              style={{paddingHorizontal:wp('2%'), fontWeight: '700'}}
            />
          )}
          dropdownIconPosition="right"
          buttonTextStyle={{
            fontSize: 16,
            borderRadius: 40,
            color: 'grey',
            fontWeight: '600',
          }}
          buttonStyle={{
            marginHorizontal: '10%',
            marginVertical: '5%',
            width: buttonWidth,
            backgroundColor: '#fff',
            borderColor: '#fca15a',
            borderWidth: 2,
            borderRadius: 8,
          }}
          dropdownStyle={{
            width: '80%',
            backgroundColor: '#fff',
            borderColor: '#fca15a',
            borderWidth: 2,
            borderRadius: 19,
            alignSelf:'center',
            marginTop: '3%',
          }}
          rowTextStyle={{
            fontSize: 15,
            fontWeight: '400',
            textAlign:'left',
          }}
          selectedRowStyle={{
            backgroundColor: '#fee7d6',
          }}
          rowStyle={{
            borderBottomColor:'transparent',
            borderBottomWidth: 1,
          }}
          disableAutoScroll={true}
          search={search}
          searchPlaceHolder={searchplaceholder}
          searchTextStyle={{
            fontSize: 15,
            fontWeight: '400',
            padding: '2%',
          }}
          
          
        />
      </View>
    </View>
  );
}
