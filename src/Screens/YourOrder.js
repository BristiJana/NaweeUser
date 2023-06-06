import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
// import DropdownOdersList from '../Components/DropdownOdersList';
import ActiveDropDownList from '../Components/ActiveDropdownList';
import CancelledDropDownList from '../Components/CancelledDropdownList';
import CompleteDropDownList from '../Components/CompeleteDropdownList';

const YourOrder = ({navigation}) => {
  return (
    <>
      <SafeAreaView>
        <ActiveDropDownList nav={navigation} />
        <CompleteDropDownList />
        <CancelledDropDownList nav={navigation} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});
export default YourOrder;
