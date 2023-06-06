import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const OrderList = ({ListName, Status, date, nav}) => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.card}>
          <Text
            style={styles.ListName}
            onPress={() => nav.navigate('Os', {name: 'Os'})}>
            {ListName}
          </Text>
          <Text style={styles.OrderStatus}>{Status}</Text>
          <Text style={styles.date}>{date}</Text>
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
  ListName: {
    fontSize: 15,
    fontWeight: '600',
  },
  OrderStatus: {
    fontSize: 11,
    fontWeight: '400',
    color: '#FA8832',
    position: 'relative',
    right: '90%',
    top: '2%',
  },
  date: {
    fontSize: 12,
  },
});
export default OrderList;
