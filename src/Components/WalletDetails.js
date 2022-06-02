import React from 'react';
// import {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const DATA = [
  {
    id: '1',
    item: 'AB123456',
    date: 'Date and time',
    price: '50',
  },
  {
    id: '2',
    item: 'AB123456',
    date: 'Date and time',
    price: '50',
  },
  {
    id: '3',
    item: 'AB123456',
    date: 'Date and time',
    price: '50',
  },
  {
    id: '4',
    item: 'AB123456',
    date: 'Date and time',
    price: '50',
  },
  {
    id: '5',
    item: 'AB123456',
    date: 'Date and time',
    price: '50',
  },
  {
    id: '6',
    item: 'AB123456',
    date: 'Date and time',
    price: '50',
  },
  {
    id: '7',
    item: 'AB123456',
    date: 'Date and time',
    price: '50',
  },
  {
    id: '8',
    item: 'AB123456',
    date: 'Date and time',
    price: '50',
  },
  {
    id: '9',
    item: 'AB123456',
    date: 'Date and time',
    price: '50',
  },
  {
    id: '10',
    item: 'AB123456',
    date: 'Date and time',
    price: '50',
  },
  {
    id: '11',
    item: 'AB123456',
    date: 'Date and time',
    price: '50',
  },
  {
    id: '12',
    item: 'AB123456',
    date: 'Date and time',
    price: '50',
  },
  {
    id: '13',
    item: 'AB123456',
    date: 'Date and time',
    price: '50',
  },
  {
    id: '14',
    item: 'AB123456',
    date: 'Date and time',
    price: '50',
  },
  {
    id: '15',
    item: 'AB123456',
    date: 'Date and time',
    price: '50',
  },
  {
    id: '16',
    item: 'AB123456',
    date: 'Date and time',
    price: '50',
  },
  {
    id: '17',
    item: 'AB123456',
    date: 'Date and time',
    price: '50',
  },
  {
    id: '18',
    item: 'AB123456',
    date: 'Date and time',
    price: '50',
  },
  {
    id: '19',
    item: 'AB123456',
    date: 'Date and time',
    price: '50',
  },
  // Other itme we can put in this form or get dynamically
  // {
  //     id: "Math.random();",
  //     item: "abcdef",
  //     date: "Date and time",
  //     price: "$50"
  // },
  // {
  //     id: "Math.random();",
  //     item: "abcdef",
  //     date: "Date and time",
  //     price: "$50"
  // }
];

const WalletDetails = () => {
  //   const [listItems, setListItems] = useState([]);

  //   const addListHandler = () => {
  //     setListItems(existListItem => [...existListItem, newListItem]);
  //   };

  return (
    <View style={styles.walletContainer}>
      {/* <FontAwesome5 name={'comments'} solid size={35} /> */}
      <FlatList
        data={DATA}
        renderItem={dataItem => {
          return (
            <>
              <View style={styles.listContainer}>
                <View style={styles.listItems}>
                  <Text style={styles.item}>{dataItem.item.item}</Text>
                  <Text style={styles.date}>{dataItem.item.date}</Text>
                </View>
                <View style={styles.price}>
                  <Text style={styles.priceText}>${dataItem.item.price}</Text>
                </View>
              </View>
            </>
          );
        }}
        style={styles.walletContainer}>
        keyExtractor={item => item.item.id}
        {/* {listItems.map(items => (
        <Text key={items}>{items}</Text>
      ))} */}
      </FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  walletContainer: {},
  walletContainer: {
    alignSelf: 'center',
  },
  listContainer: {
    width: 340,
    borderWidth: 1,
    //   paddingHorizontal: 120,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  listItems: {
    marginLeft: 10,
  },

  item: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  date: {
    fontWeight: 'bold',
  },
  price: {
    display: 'flex',
    alignSelf: 'center',
    marginLeft: 180,
  },
  priceText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'orange',
  },
});
export default WalletDetails;
