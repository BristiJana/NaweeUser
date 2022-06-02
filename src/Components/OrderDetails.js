import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';

const ORDERDATA = [
  {
    // id: Math.random(),
    key: "Math.random()",
    lagos: ' Lagos',
    sender: 'Sender details',
    receiver: 'Receiver details',
    description: 'Description about the product',
  },
];

const OrderDetails = () => {
  return (
    <View style={styles.orderMainContainer}>
      <FlatList
        data={ORDERDATA}
        renderItem={element => {
          return (
            <View>
              <Text style={styles.lagos}>Logos: {element.item.lagos}</Text>
              <Text style={styles.lagos}>Sender: {element.item.sender}</Text>
              <Text style={styles.lagos}>Receiver: {element.item.receiver}</Text>
              <Text style={styles.lagos}>
                Description: {element.item.description}
              </Text>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={item => item.key}
        style={styles.orderContainer}></FlatList>
    </View>
  );
};
const styles = StyleSheet.create({
  orderMainContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  lagos: {
    fontSize: 18,
    fontWeight: '600',
    margin: 2,
    color: 'black',
  },
  orderContainer: {
    width: '90%',
    height: '26%',
    borderWidth: 1,
    borderRadius: 28,
    paddingLeft: 10,
    lineHeight: 40,
  },
  btn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '32%',
    backgroundColor: 'orange',
    borderRadius: 6,
    marginTop: 10,
  },
  btnText: {
    display: 'flex',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 17,
  },
});

export default OrderDetails;
