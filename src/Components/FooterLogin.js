import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const FooterLogin = ({footertext, footerbtntext, nav}) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{footertext} ?</Text>
      <TouchableOpacity
        style={styles.footerBtn}
        onPress={() => nav.navigate('Signup', {name: 'Signup'})}>
        <Text style={styles.footerBtnText}>{footerbtntext}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
  },
  footerText: {
    fontWeight: '400',
    // color: '#f4f3ee',
    padding: 5,
    fontSize: 15,
  },
  footerBtnText: {
    // color: '#f4f3ee',
    paddingTop: 3,
    paddingLeft: 1,
    fontWeight: '400',
    fontSize: 15,
    textDecorationLine: 'underline',
    color: '#FA8832',
  },
});
export default FooterLogin;
