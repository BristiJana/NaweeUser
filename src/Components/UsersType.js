import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const UsersType = () => {
  const login = () => {};
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={login} style={styles.button}>
        <View style={styles.iconCard}>
        {/* {icon} */}
        </View>
        <View style={styles.textCard}>
          <Text style={styles.btnText}>Booth</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    paddingHorizontal: 30,
    height: '100%',
    marginTop: 10
  },
  button: {
    width: '80%',
    height: '15%',
    backgroundColor: '#f67525',
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    borderRadius: 20,
  },
  iconCard: {
    height: '100%',
    width: '33%',
    backgroundColor: 'white',
    borderRadius: 20,
    marginLeft: 0.4,
    // borderWidth: 1
  },
  textCard: {
    alignSelf: 'center',
    width: '67%',
    // borderWidth: 1
  },
  btnText: {
    alignSelf: 'center',
    fontSize: 35,
    color: 'white',
    fontWeight: '500',
  },
});

export default UsersType;
