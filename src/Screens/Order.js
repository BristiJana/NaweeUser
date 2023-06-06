import * as React from 'react';
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

export default function Order({navigation}) {
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',

            width: 295,
            height: 19,

            fontFamily: 'Syne',
            fontStyle: 'normal',

            fontSize: 16,
            lineHeight: 20,

            color: '#333333',
            borderBottomWidth: 1,
            lineHeight: 62,
            borderBottomColor: '#FA883275',
          }}>
          <Text style={{fontWeight: 'bold'}}>
            AWP 7685 <Text style={{fontWeight: 'normal'}}>(Processing)</Text>
          </Text>
          <Text style={{}}>31/03/2022</Text>
        </View>
        <Text
          style={[
            styles.txt,
            {width: 158, height: 19, marginTop: 30, marginRight: 136},
          ]}>
          Sender Information
        </Text>
        <View
          style={[
            styles.cont,
            {
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
          ]}>
          <Text style={{position: 'absolute', top: 10, left: 20}}>Name:</Text>
          <Text style={{position: 'absolute', top: 10, left: 186}}>
            Amber Balanc
          </Text>

          <Text style={{position: 'absolute', top: 37, left: 20}}>Email:</Text>
          <Text style={{position: 'absolute', top: 37, left: 132}}>
            dummymail@mail.com
          </Text>

          <Text style={{position: 'absolute', top: 64, left: 17}}> Phone:</Text>
          <Text style={{position: 'absolute', top: 64, left: 196}}>
            1236745670
          </Text>

          <Text style={{position: 'absolute', top: 91, left: 20}}>
            Drop-Off:
          </Text>
          <Text style={{position: 'absolute', top: 91, left: 213}}>
            Booth756
          </Text>

          <Text style={{position: 'absolute', top: 118, left: 20}}>
            Address:
          </Text>
          <Text style={{position: 'absolute', top: 118, left: 220}}>
            {' '}
            Dummy
          </Text>

          <Text style={{position: 'absolute', top: 145, left: 18}}>
            {' '}
            Preferred Pick-Up Time:
          </Text>
          <Text style={{position: 'absolute', top: 145, left: 202}}>
            {' '}
            9am-12pm
          </Text>
        </View>
        <Text
          style={[
            styles.txt,
            {
              width: 172,
              height: 19,
              marginTop: 20,
              marginRight: 120,
              marginBottom: 10,
            },
          ]}>
          Receiver Information
        </Text>
        <View styles={{marginTop: 20}}>
          <Text style={[styles.cont, styles.header]}>Home Delivery</Text>
          <View
            style={[
              styles.cont,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                height: 150,
              },
            ]}>
            <Text style={{position: 'absolute', top: 10, left: 20}}>Name:</Text>
            <Text style={{position: 'absolute', top: 10, left: 186}}>
              Johnny Heartz
            </Text>

            <Text style={{position: 'absolute', top: 37, left: 20}}>
              Address:
            </Text>
            <Text style={{position: 'absolute', top: 37, left: 138}}>
              123, New skylake road
            </Text>

            <Text style={{position: 'absolute', top: 64, left: 16}}>
              {' '}
              Landmark:
            </Text>
            <Text style={{position: 'absolute', top: 64, left: 164}}>
              Lagos lagoon lake
            </Text>

            <Text style={{position: 'absolute', top: 91, left: 20}}>
              Phone:
            </Text>
            <Text style={{position: 'absolute', top: 91, left: 198}}>
              1236745670
            </Text>

            <Text style={{position: 'absolute', top: 118, left: 20}}>
              Preferred Delivery Time:
            </Text>
            <Text style={{position: 'absolute', top: 118, left: 222}}>
              {' '}
              Anytime
            </Text>
          </View>
        </View>

        <Text
          style={[
            styles.txt,
            {
              width: 172,
              height: 19,
              marginTop: 20,
              marginRight: 120,
              marginBottom: 10,
            },
          ]}>
          Parcel Description
        </Text>
        <View styles={{marginTop: 20}}>
          <Text style={[styles.cont, styles.header]}>PAR576 (Home Pickup)</Text>
          <View
            style={[
              styles.cont,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                height: 183,
              },
            ]}>
            <Text style={{position: 'absolute', top: 10, left: 20}}>
              Weight:
            </Text>
            <Text style={{position: 'absolute', top: 10, left: 250}}>2Kg</Text>

            <Text style={{position: 'absolute', top: 37, left: 20}}>Size:</Text>
            <Text style={{position: 'absolute', top: 37, left: 198}}>
              50cm*50cm
            </Text>

            <Text style={{position: 'absolute', top: 64, left: 20}}>
              Parcel Type:
            </Text>
            <Text style={{position: 'absolute', top: 64, left: 210}}>
              Document
            </Text>

            <Text style={{position: 'absolute', top: 91, left: 20}}>
              Description:
            </Text>
            <Text style={{position: 'absolute', top: 91, left: 214}}>
              Booth756
            </Text>

            <Text style={{position: 'absolute', top: 118, left: 20}}>
              It contains some important documents.
            </Text>

            <Text
              style={{
                position: 'absolute',
                top: 140,
                left: 20,
                width: 255,
                color: '#FA8832',
              }}>
              Special Instructions: Please hand it over to Mr. Mayank Parakh
              only.
            </Text>
          </View>
        </View>
        <Text
          style={[
            styles.txt,
            {
              width: 172,
              height: 19,
              marginTop: 20,
              marginRight: 115,
              marginBottom: 10,
            },
          ]}>
          Order Summary
        </Text>
        <View styles={{marginTop: 20}}>
          <View
            style={[
              styles.cont,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                height: 220,
                borderWidth: 0,
              },
            ]}>
            <Text style={{position: 'absolute', top: 10, left: 20}}>
              Parcel Delivery Cost:
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image
                style={{position: 'absolute', top: 15, left: 222}}
                source={require('./hastag.png')}
              />
              <Text style={{position: 'absolute', top: 10, left: 238}}>
                2070
              </Text>
            </View>
            <Text style={{position: 'absolute', top: 37, left: 20}}>
              Home Pickup & Delivery Cost:
            </Text>

            <Text style={{position: 'absolute', top: 37, left: 222}}>
              <Image source={require('./hastag.png')} />
              2000
            </Text>

            <Text style={{position: 'absolute', top: 64, left: 20, width: 166}}>
              Preffered Pickup & Delivery Cost:
            </Text>
            <Text style={{position: 'absolute', top: 64, left: 224}}>
              {' '}
              <Image
                source={require('./hastag.png')}
                style={{paddingRight: 30}}
              />
              750
            </Text>

            <Text style={{position: 'absolute', top: 108, left: 20}}>
              Special Shippment:
            </Text>
            <Text style={{position: 'absolute', top: 108, left: 226}}>
              <Image source={require('./hastag.png')} />
              828
            </Text>

            <Text style={{position: 'absolute', top: 135, left: 20}}>
              Insurance:
            </Text>
            <Text style={{position: 'absolute', top: 135, left: 226}}>
              <Image source={require('./hastag.png')} />
              100
            </Text>
            <Text style={{position: 'absolute', top: 162, left: 20}}>
              Taxes:
            </Text>
            <Text style={{position: 'absolute', top: 162, left: 227}}>
              <Image source={require('./hastag.png')} />
              500
            </Text>
            <Text style={{position: 'absolute', top: 189, left: 20}}>
              Discount:
            </Text>
            <Text style={{position: 'absolute', top: 189, left: 221}}>
              <Image source={require('./hastag.png')} />
              (200)
            </Text>
          </View>
          <View
            style={[
              styles.cont,
              {
                height: 40,
                width: 295,
                backgroundColor: '#FA8832',
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                color: '#fff',
              },
            ]}>
            <Text
              style={{position: 'absolute', top: 5, left: 20, color: '#fff'}}>
              Total Cost:
            </Text>
            <Text
              style={{position: 'absolute', top: 5, left: 203, color: '#fff'}}>
              <Image source={require('./whitehas.png')} />
              5298.00
            </Text>
          </View>
        </View>
        <Text
          style={[
            styles.txt,
            {
              marginTop: 20,

              marginBottom: 7,
              color: '#FA8832',
              fontSize: 10,
            },
          ]}>
          Cancelling your order might be subject to cancellation charges.
        </Text>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => navigation.navigate('Uo', {name: 'Uo'})}>
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
                UPDATE MY ORDER
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <Text
          style={[
            styles.txt,
            {
              marginTop: 46,

              color: '#FA8832',
              fontSize: 11,
            },
          ]}>
          CANCEL MY ORDER
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    height: 30,
    fontSize: 14,
    lineHeight: 17,
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    paddingTop: 10,
  },
  cont: {
    width: 295,
    height: 172,

    fontWeight: '600',
    fontFamily: 'Syne',
    fontStyle: 'normal',

    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#FA8832',

    borderRadius: 10,
    fontSize: 16,

    color: '#333333',
  },
  txt: {
    fontWeight: '600',
    fontFamily: 'Syne',
    fontStyle: 'normal',

    fontSize: 16,
    lineHeight: 19,

    color: '#333333',
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: ' #FA8832',
    borderRadius: 5,

    width: 152,
    height: 30,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: ' #FA8832',
  },
  textSign: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
