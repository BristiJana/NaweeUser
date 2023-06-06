import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const OrderDropdown = ({OrderName, RecieverName, nav}) => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.card}>
            <Text
              style={styles.ListName}
              onPress={() => nav.navigate('Order', {name: 'Order'})}>
              {OrderName}
            </Text>
            <Text style={styles.recieverName}>{RecieverName}</Text>
            <FontAwesome5 style={styles.icon} name="angle-down" size={20} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '80%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#FA8832',
    borderRadius: 10,

    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: '5%',
    marginHorizontal: '10%',
  },
  Content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '3%',
  },
  ListName: {
    fontSize: 14,
    fontWeight: '600',
  },
});
export default OrderDropdown;
