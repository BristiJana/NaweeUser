import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Feather';
import CustomButton from '../Components/CustomButton';

export default function CancelledOrder({navigation}) {
  return (
    <ScrollView style={styles.Main} showsVerticalScrollIndicator={false}>
      <View style={styles.headerContainer}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 16, fontWeight: '600'}}>AWP7685</Text>
            <Text style={{color: '#f27b7b'}}> (Cancelled)</Text>
          </View>
          <Text style={{fontSize: 14, fontWeight: '600'}}>31/03/2022</Text>
        </View>
        <Text style={{fontSize: 15, fontWeight: '500'}}>Parcel-PAR576</Text>
      </View>
      <View style={styles.parcelbox}>
        <View style={styles.parcelheading}>
          <Text
            style={{fontSize: 17, fontWeight: '500', marginHorizontal: '3%'}}>
            PAR57
          </Text>
          <Icon
            name="chevron-thin-down"
            size={20}
            color="black"
            style={{marginHorizontal: '3%'}}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.rowitem}>Weight:</Text>
          <Text style={styles.rowitem}>2kg</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowitem}>Size:</Text>
          <Text style={styles.rowitem}>50cm*50cm</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowitem}>Parcel Type::</Text>
          <Text style={styles.rowitem}>Document</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowitem}>Description</Text>
        </View>
        <View style={styles.rawtext}>
          <Text>It contains some important documents.</Text>
          <Text style={{color: '#FA8832', marginVertical: '1%', fontSize: 14}}>
            Special Instructions: Please hand it over to Mr. parav Khurana only.
          </Text>
        </View>
        <View style={{marginHorizontal: '3%', marginVertical: '1%'}}>
          <Text style={{fontSize: 17, fontWeight: '600', letterSpacing: 1}}>
            Receiver Address
          </Text>
          <Text style={{fontSize: 15, fontWeight: '400'}}>Home Delivery</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowitem}>Name:</Text>
          <Text style={styles.rowitem}>Johny Heartz</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowitem}>Address:</Text>
          <Text style={styles.rowitem}>123,New skylake road</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowitem}>Landmark:</Text>
          <Text style={styles.rowitem}>Logos lagoon lake</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowitem}>Phone:</Text>
          <Text style={styles.rowitem}>123456789</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowitem}>Preferred Delivery Time:</Text>
          <Text style={styles.rowitem}>Anytime</Text>
        </View>
      </View>
      <View>
        <Text
          style={{marginHorizontal: '2%', fontSize: 19, fontWeight: 'bold'}}>
          Order Summary
        </Text>
        <View style={styles.summary}>
          <View style={styles.row}>
            <Text style={styles.rowitem}>Parcel Delivery Cost:</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#FA8832', fontSize: 16}}>₦ </Text>
              <Text style={styles.rowitem}> 15200</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowitem}>Home Pickup & Delivery Cost:</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#FA8832', fontSize: 16}}>₦ </Text>
              <Text style={styles.rowitem}> 2000</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowitem}>
              Preffered Pickup & Delivery Cost:
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#FA8832', fontSize: 16}}>₦ </Text>
              <Text style={styles.rowitem}> 750</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowitem}>Special Shipment:</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#FA8832', fontSize: 16}}>₦ </Text>
              <Text style={styles.rowitem}>828</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowitem}>Insurance:</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#FA8832', fontSize: 16}}>₦ </Text>
              <Text style={styles.rowitem}>100</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowitem}>Taxes:</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#FA8832', fontSize: 16}}>₦ </Text>
              <Text style={styles.rowitem}>500</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowitem}>Discount:</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#FA8832', fontSize: 16}}>₦ </Text>
              <Text style={styles.rowitem}>(200)</Text>
            </View>
          </View>
          <View style={styles.total}>
            <Text style={styles.totalitem}>Total Cost:</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#FFF', fontSize: 16}}>₦ </Text>
              <Text style={styles.totalitem}>5298</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{marginTop: '2%'}}>
        <Text style={{marginHorizontal: '2%', fontSize: 19, fontWeight: '600'}}>
          Last Location
        </Text>
        <View style={styles.location}>
          <Text style={{fontSize: 15}}>
            Logos City centre by Lake (Booth356)
          </Text>
          <Icon1 name="navigation" size={20} color="#FA8832" />
        </View>
        <View>
          <Text style={{color: '#FA8832'}}>
            To pickup your parcel go to booth278. After 24hrs parcel will be
            charged for demmurage. To know connect with nawee support services.
          </Text>
          <Text style={{color: '#FA8832'}}>
            Reorder - It will reorder your parcel as it was before. Re-route-
            You can change the destination of your parcel. Depending on the
            route that you have selected, charges may be added or deducted.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            flex: 1,
          }}>
          <CustomButton
            name="RE-ROUTE"
            fontcolor="white"
            bgcolor="#FA8832"
            width="40%"
            height="50%"
            onPress={() => navigation.navigate('Can1', {name: 'Can1'})}
          />
          <CustomButton
            name="RE-ORDER"
            fontcolor="white"
            bgcolor="#FA8832"
            width="40%"
            height="50%"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    marginHorizontal: '5%',
  },
  headerContainer: {
    flex: 1,
    marginTop: '5%',
    paddingVertical: '2%',
    marginBottom: '3%',
    borderBottomWidth: 1,
    borderBottomColor: '#FA8832',
  },
  parcelbox: {
    marginVertical: '3%',
    borderWidth: 1,
    marginHorizontal: '3%',
    borderColor: '#FA8832',
    borderRadius: 10,
  },
  parcelheading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '3%',
    borderBottomColor: '#FA8832',
    borderBottomWidth: 1,
    paddingVertical: '3%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '3%',
    paddingVertical: '2%',
  },
  rawtext: {
    marginHorizontal: '3%',
    marginVertical: '1%',
    borderBottomColor: '#FA8832',
    borderBottomWidth: 1,
    paddingVertical: '2%',
  },
  rowitem: {
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.5,
  },
  summary: {
    marginHorizontal: '3%',
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 5,
    marginVertical: '3%',
    paddingTop: '2%',
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    paddingVertical: '2%',
    backgroundColor: '#FA8832',
    paddingVertical: '5%',
    paddingHorizontal: '3%',
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#FA8832',
    borderWidth: 1,
    marginVertical: '3%',
    borderRadius: 10,
    padding: '4%',
  },
  totalitem: {
    paddingHorizontal: 10,
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
