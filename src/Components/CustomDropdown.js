import {View, Text} from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CustomDropdown({placeholder, itemlist, onPress}) {
  return (
    <View style={{height: 60, marginBottom: 25, marginTop: 10}}>
      <Text
        style={{
          fontSize: 15,
          fontWeight: '500',
          paddingLeft: 50,
          paddingTop: 20,
          marginTop: 10,
        }}>
        {placeholder}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <SelectDropdown
          data={itemlist}
          onSelect={(selectedItem, index) => {
            onPress(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          defaultButtonText="Select"
          rowTextForSelection={(item, index) => {
            return item;
          }}
          renderDropdownIcon={() => (
            <Icon
              name="caret-down"
              type="FontAwesome"
              size={20}
              color="black"
              style={{paddingLeft: 15, paddingRight: 15, fontWeight: '700'}}
            />
          )}
          dropdownIconPosition="right"
          buttonTextStyle={{
            fontSize: 13,
            borderRadius: 30,
            color: 'grey',
            fontWeight: '700',
          }}
          buttonStyle={{
            padding: 10,
            marginHorizontal: 45,
            marginVertical: 20,
            width: '80%',
            backgroundColor: '#fff',
            borderColor: '#fca15a',
            borderWidth: 2,
            borderRadius: 10,
          }}
          dropdownStyle={{
            width: '80%',
            backgroundColor: '#fff',
            borderColor: '#fca15a',
            borderWidth: 2,
            borderRadius: 19,
            alignSelf: 'center',
          }}
          rowTextStyle={{
            fontSize: 15,
            fontWeight: '400',
            padding: 2,
          }}

        />
      </View>
    </View>
  );
}
