import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ImageStore,
  ImageBackground,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Micon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import inflections from 'i/lib/inflections';
import {ScrollView} from 'react-native-gesture-handler';

const info = [
  {
    id: require('./Image/peop.png'),
    name: 'Order Picked-Up',
    val: 'Your Parcel was Picked up by our agent and will soon be processed for delivery. ',
    icon: '11 AM',
  },
  {
    id: require('./Image/peop.png'),
    name: 'Request Accepted',
    val: 'Your Request for Parcel ID AWB123 has been accepted by our agent MR. Vincent. ',
    icon: '3:45PM ',
  },
];

const info1 = [
  {
    id: require('./Image/hou.png'),
    name: 'Order ID AWB123',
    val: 'Your order has reached our Booth123 at Lagos City.',
    icon: '11 AM',
  },
  {
    id: require('./Image/scoot.png'),
    name: 'Delivered Successfully',
    val: 'Parcel ID AWB123 has been delivered at your receivers doorstep.',
    icon: '3:45PM ',
  },
  {
    id: require('./Image/chit.png'),
    name: 'Emergency Drop-off',
    val: 'Your parcel was dropped off at Booth123 by your assigned agent Mr. Vincent due to an emergency. There might be a delay in delivery.',
    icon: '3:45PM ',
  },
  {
    id: require('./Image/pip.png'),
    name: 'Parcel Released',
    val: 'You Parcel ID AWB123 was released to your receiver. ',
    icon: '3:45PM ',
  },
  {
    id: require('./Image/parc.png'),
    name: 'Order Dropped-Off',
    val: 'We have received your Parcel ID AWB123 and will soon be processed further for delivery.',
    icon: '3:45PM ',
  },
];
export default function Notification() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.head}>You have </Text>
          <Text style={[styles.head, {marginLeft: 0, color: '#FA8832'}]}>
            3 notifications{' '}
          </Text>
          <Text style={[styles.head, {marginLeft: 0, marginRight: 200}]}>
            today
          </Text>
        </View>
        <Text style={styles.subhead}>Today</Text>
        {info.map(user => (
          <>
            <View
              style={[
                styles.cont,
                {
                  marginTop: 18,

                  backgroundColor: 'transparent',
                },
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Image source={user.id} style={{marginLeft: 4}} />

                <View
                  style={{
                    marginLeft: 8,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginBottom: 5,
                    }}>
                    <Text style={styles.tilt}>{user.name}</Text>
                    <Text
                      style={{
                        marginRight: 5,
                        marginTop: 4,
                        fontSize: 10,
                        lineHeight: 12,
                        color: '#333333',
                      }}>
                      {user.icon}
                    </Text>
                  </View>
                  <Text style={styles.bod}>{user.val}</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                height: 1,
                backgroundColor: '#FA8832',
                marginHorizontal: 4,

                opacity: 0.45,
              }}
            />
          </>
        ))}
        <View
          style={[
            styles.cont,
            {
              marginTop: 18,

              backgroundColor: 'transparent',
            },
          ]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <ImageBackground
              source={require('./Image/rec.png')}
              style={{
                marginLeft: 4,
                width: 60,
                height: 60,
                paddingTop: 9,
                paddingLeft: 9,
              }}>
              <Image
                source={require('./Image/mini.png')}
                style={{marginLeft: 4}}
              />
            </ImageBackground>
            <View
              style={{
                marginLeft: 8,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 5,
                }}>
                <Text style={styles.tilt}>Order Confirmation</Text>
                <Text
                  style={{
                    marginTop: 4,
                    fontSize: 10,
                    lineHeight: 12,
                    marginRight: 5,
                    color: '#333333',
                  }}>
                  3:45PM
                </Text>
              </View>
              <Text style={styles.bod}>
                Your request has been succcessfully placed and you will soon be
                contacted by our agent.
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: '#FA8832',
            marginHorizontal: 2,
            marginTop: 10,
            opacity: 0.45,
          }}
        />

        <Text style={styles.subhead}>Yesterday</Text>
        {info1.map(user => (
          <>
            <View
              style={[
                styles.cont,
                {
                  marginTop: 18,

                  backgroundColor: 'transparent',
                },
              ]}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <ImageBackground
                  source={require('./Image/rec.png')}
                  style={{
                    marginLeft: 4,
                    width: 60,
                    height: 60,
                    paddingTop: 9,
                    paddingLeft: 9,
                  }}>
                  <Image source={user.id} style={{marginLeft: 4}} />
                </ImageBackground>

                <View
                  style={{
                    marginLeft: 8,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginBottom: 5,
                    }}>
                    <Text style={styles.tilt}>{user.name}</Text>
                    <Text
                      style={{
                        marginRight: 14,
                        marginTop: 4,
                        fontSize: 10,
                        lineHeight: 12,
                        color: '#333333',
                      }}>
                      {user.icon}
                    </Text>
                  </View>
                  <Text style={styles.bod}>{user.val}</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                height: 1,
                backgroundColor: '#FA8832',
                marginHorizontal: 4,
                marginTop: 10,
                opacity: 0.45,
              }}
            />
          </>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
    marginTop: 20,
    flex: 1,
    height: 860,
    marginLeft: 5,
  },
  cont: {
    width: 324,
    height: 62,

    fontWeight: '600',
    fontFamily: 'Syne',
    fontStyle: 'normal',

    borderStyle: 'solid',

    borderRadius: 10,
    fontSize: 12,
    lineHeight: 14,

    color: '#333333',
  },
  head: {
    fontSize: 14,
    marginBottom: 10,
    marginLeft: 4,
    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '500',

    lineHeight: 17,

    color: '#333333',
  },
  subhead: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 4,
    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '400',

    lineHeight: 24,
    marginTop: 15,
    color: '#333333',
  },
  item: {
    padding: 20,
    fontSize: 14,
    marginTop: 5,
    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '500',

    lineHeight: 14,

    color: '#333333',
  },
  tilt: {
    fontSize: 14,

    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '600',

    lineHeight: 14,

    color: '#FA8832',
  },
  bod: {
    fontSize: 14,

    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '600',

    lineHeight: 14,

    color: '#333333',
  },
});
