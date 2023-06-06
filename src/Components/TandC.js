import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const TandC = ({TermsHeading, TermsPara}) => {
  return (
    <View style={styles.termsContainer}>
      <Text style={styles.termsHeading}>{TermsHeading}</Text>
      <Text style={styles.termsPara}>{TermsPara}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  termsContainer: {
    width: 315,
    alignSelf: 'center',
    margin: 5,
    alignItems: 'left',
  },
  termsHeading: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FA8832',
  },
  termsPara: {
    fontSize: 12,
    fontWeight: '500',
  },
});
export default TandC;
