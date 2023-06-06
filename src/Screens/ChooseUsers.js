import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import UsersType from '../Components/UsersType';

const ChooseUsers = () => {
  return (
    <>
      <SafeAreaView>
        <UsersType user="Customer" iconName="user-circle" />
        <UsersType user="Guest" iconName="user-circle" />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default ChooseUsers;
