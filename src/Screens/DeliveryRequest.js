import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default function DeliveryRequest() {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          alignSelf: 'center',
          alignContent: 'center',
          marginTop: 25,
          marginBottom: 70,
          marginLeft: 40,
          marginRight: 40,
        }}>
        <View style={styles.header}>
          <Text style={[styles.txt]}>Lagos (Within State)</Text>
        </View>

        <View
          style={[
            styles.cont,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',

              height: 183,
            },
          ]}>
          <Text style={{position: 'absolute', top: 13, left: 23}}>Sender:</Text>
          <Text style={{position: 'absolute', top: 13, left: 121}}>
            Area , State
          </Text>

          <Text style={{position: 'absolute', top: 42, left: 23}}>
            Receiver:
          </Text>
          <Text style={{position: 'absolute', top: 42, left: 121}}>
            Multiple receivers
          </Text>

          <Text style={{position: 'absolute', top: 71, left: 23}}>
            Description:
          </Text>
          <Text style={{position: 'absolute', top: 71, left: 121}}>
            1 Laptop pack
          </Text>
          <Text
            style={{
              position: 'absolute',
              top: 71,
              left: 214,
              color: '#FA8832',
            }}>
            + 2
          </Text>
          <View
            style={[styles.button, {position: 'absolute', top: 98, left: 92}]}>
            <TouchableOpacity style={styles.signIn}>
              <LinearGradient
                colors={['#FA8832', '#FA8832']}
                style={styles.signIn}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#fff',
                    },
                  ]}>
                  ACCEPT
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={[
            styles.cont,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',

              height: 183,
            },
          ]}>
          <Text style={{position: 'absolute', top: 13, left: 23}}>Sender:</Text>
          <Text style={{position: 'absolute', top: 13, left: 121}}>
            Area , State
          </Text>

          <Text style={{position: 'absolute', top: 42, left: 23}}>
            Receiver:
          </Text>
          <Text style={{position: 'absolute', top: 42, left: 121}}>
            Multiple receivers
          </Text>

          <Text style={{position: 'absolute', top: 71, left: 23}}>
            Description:
          </Text>
          <Text style={{position: 'absolute', top: 71, left: 121}}>
            1 Laptop pack
          </Text>
          <Text
            style={{
              position: 'absolute',
              top: 71,
              left: 214,
              color: '#FA8832',
            }}>
            + 2
          </Text>
          <View
            style={[styles.button, {position: 'absolute', top: 98, left: 92}]}>
            <TouchableOpacity style={styles.signIn}>
              <LinearGradient
                colors={['#FA8832', '#FA8832']}
                style={styles.signIn}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#fff',
                    },
                  ]}>
                  ACCEPT
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            styles.cont,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',

              height: 183,
            },
          ]}>
          <Text style={{position: 'absolute', top: 13, left: 23}}>Sender:</Text>
          <Text style={{position: 'absolute', top: 13, left: 121}}>
            Area , State
          </Text>

          <Text style={{position: 'absolute', top: 42, left: 23}}>
            Receiver:
          </Text>
          <Text style={{position: 'absolute', top: 42, left: 121}}>
            Multiple receivers
          </Text>

          <Text style={{position: 'absolute', top: 71, left: 23}}>
            Description:
          </Text>
          <Text
            style={{
              position: 'absolute',
              top: 71,
              left: 121,
              width: 155,
              height: 38,
            }}>
            1 Laptop pack with 1 hp laptop bag(2kg)
          </Text>

          <View
            style={[styles.button, {position: 'absolute', top: 98, left: 92}]}>
            <TouchableOpacity style={styles.signIn}>
              <LinearGradient
                colors={['#FA8832', '#FA8832']}
                style={styles.signIn}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#fff',
                    },
                  ]}>
                  ACCEPT
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            styles.cont,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',

              height: 183,
            },
          ]}>
          <Text style={{position: 'absolute', top: 13, left: 23}}>Sender:</Text>
          <Text style={{position: 'absolute', top: 13, left: 121}}>
            Area , State
          </Text>

          <Text style={{position: 'absolute', top: 42, left: 23}}>
            Receiver:
          </Text>
          <Text style={{position: 'absolute', top: 42, left: 121}}>
            Multiple receivers
          </Text>

          <Text style={{position: 'absolute', top: 71, left: 23}}>
            Description:
          </Text>
          <Text style={{position: 'absolute', top: 71, left: 121}}>
            1 Laptop pack
          </Text>
          <Text
            style={{
              position: 'absolute',
              top: 71,
              left: 214,
              color: '#FA8832',
            }}>
            + 2
          </Text>
          <View
            style={[styles.button, {position: 'absolute', top: 98, left: 92}]}>
            <TouchableOpacity style={styles.signIn}>
              <LinearGradient
                colors={['#FA8832', '#FA8832']}
                style={styles.signIn}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#fff',
                    },
                  ]}>
                  ACCEPT
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: 295,
    height: 38,
    borderRadius: 5,
    backgroundColor: '#FA8832',
  },
  cont: {
    width: 295,
    height: 158,

    fontWeight: '400',
    fontFamily: 'Syne',
    fontStyle: 'normal',
    marginTop: 20,
    backgroundColor: '#FFFFFF',

    borderRadius: 10,
    fontSize: 16,
    lineHeight: 19,
    color: '#333333',
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 10,
  },
  txt: {
    fontWeight: '400',
    fontFamily: 'Syne',
    fontStyle: 'normal',

    fontSize: 16,
    lineHeight: 19,
    paddingTop: 8,
    paddingLeft: 18,
    color: '#FFFF',
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: ' #FA8832',
    borderRadius: 5,

    width: 111,
    height: 30,
  },
  signIn: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: ' #FA8832',
  },
  textSign: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Syne',
    fontStyle: 'normal',
    lineHeight: 14,

    color: '#FFFF',
  },
});
