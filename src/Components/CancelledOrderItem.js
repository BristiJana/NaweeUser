import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CancelledOrderItem = ({ListName, Statusdate, nav}) => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.card}>
            <Text
              style={styles.ListName}
              onPress={() => nav.navigate('Can', {name: 'Can'})}>
              {ListName}
            </Text>
            <Text style={styles.statusDate}>{Statusdate}</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '3%',
    paddingHorizontal: '5%',
    borderBottomWidth: 1,
    borderBottomColor: '#FA8832',
  },
  statusDate: {
    fontSize: 11,
    fontWeight: '400',
    color: '#F17373',
  },
  ListName: {
    fontSize: 15,
    fontWeight: '600',
  },
});
export default CancelledOrderItem;
