import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
export default function Confirm2() {
  return (
    <ScrollView
      style={{
        flex: 1,
      }}>
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

          <Text style={{position: 'absolute', top: 64, left: 16}}> Phone:</Text>
          <Text style={{position: 'absolute', top: 64, left: 207}}>
            1236745670
          </Text>

          <Text style={{position: 'absolute', top: 91, left: 20}}>
            Drop-Off:
          </Text>
          <Text style={{position: 'absolute', top: 91, left: 217}}>
            Booth756
          </Text>

          <Text style={{position: 'absolute', top: 118, left: 20}}>
            Address:
          </Text>
          <Text style={{position: 'absolute', top: 118, left: 224}}>
            {' '}
            Dummy
          </Text>

          <Text style={{position: 'absolute', top: 145, left: 18}}>
            {' '}
            Preferred Pick-Up Time:
          </Text>
          <Text style={{position: 'absolute', top: 145, left: 210}}>
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
            <Text style={{position: 'absolute', top: 64, left: 170}}>
              Lagos lagoon lake
            </Text>

            <Text style={{position: 'absolute', top: 91, left: 20}}>
              Phone:
            </Text>
            <Text style={{position: 'absolute', top: 91, left: 200}}>
              1236745670
            </Text>

            <Text style={{position: 'absolute', top: 118, left: 20}}>
              Preferred Delivery Time:
            </Text>
            <Text style={{position: 'absolute', top: 118, left: 224}}>
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
          Multiple Parcel
        </Text>
        <View styles={{marginTop: 20}}>
          <Text style={[styles.cont, styles.header]}>Booth Drop-Off</Text>
          <View>
            <Item main="PAR576" num="1" />
            <Item main="PAR576" num="2" />
            <Item main="PAR576" num="3" />
            <Item main="PAR576" num="4" />
            <Item main="PAR576" num="5" />
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
                height: 192,
              },
            ]}>
            <Text style={{position: 'absolute', top: 10, left: 20}}>
              Parcel Delivery Cost:
            </Text>
            <Text style={{position: 'absolute', top: 10, left: 212}}>
              #2070
            </Text>

            <Text style={{position: 'absolute', top: 37, left: 20}}>
              Home Pickup & Delivery Cost:
            </Text>
            <Text style={{position: 'absolute', top: 37, left: 212}}>
              #2000
            </Text>

            <Text style={{position: 'absolute', top: 64, left: 20, width: 166}}>
              Preffered Pickup & Delivery Cost:
            </Text>
            <Text style={{position: 'absolute', top: 64, left: 218}}>#750</Text>

            <Text style={{position: 'absolute', top: 102, left: 20}}>
              Special Shippment:
            </Text>
            <Text style={{position: 'absolute', top: 102, left: 218}}>
              #828
            </Text>

            <Text style={{position: 'absolute', top: 125, left: 20}}>
              Insurance:
            </Text>
            <Text style={{position: 'absolute', top: 125, left: 218}}>
              #100
            </Text>
            <Text style={{position: 'absolute', top: 145, left: 20}}>
              Taxes:
            </Text>
            <Text style={{position: 'absolute', top: 145, left: 218}}>
              #500
            </Text>
            <Text style={{position: 'absolute', top: 168, left: 20}}>
              Discount:
            </Text>
            <Text style={{position: 'absolute', top: 168, left: 218}}>
              #(200)
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
              style={{position: 'absolute', top: 5, left: 218, color: '#fff'}}>
              #5298.00
            </Text>
          </View>
        </View>
        <Text
          style={[
            styles.txt,
            {
              marginTop: 20,

              marginBottom: 10,
              color: '#FA8832',
            },
          ]}>
          Cancelling your order might be subject to cancellation charges.
        </Text>
        <View style={styles.button}>
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
                CONFIRM & PAY
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

function Item(props) {
  const [open, setopen] = useState(false);
  const onPress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setopen(!open);
  };
  return (
    <TouchableOpacity
      style={[
        props.num == 5 ? styles.item1 : styles.item,
        !open && {height: 40},
      ]}
      onPress={onPress}
      activeOpacity={1}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{paddingTop: 12}}>{props.main}</Text>
        <FontAwesome5
          style={{
            paddingLeft: 160,
            paddingTop: 12,
          }}
          name={open ? 'angle-up' : 'angle-down'}
          size={20}
          color="grey"
        />
      </View>
      {open && (
        <View style={{flex: 1}}>
          <View
            style={[
              styles.cont,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              },
            ]}>
            <Text style={{position: 'absolute', top: 10, left: 20}}>
              Weight:
            </Text>
            <Text style={{position: 'absolute', top: 10, left: 208}}>2Kg</Text>

            <Text style={{position: 'absolute', top: 37, left: 20}}>Size:</Text>
            <Text style={{position: 'absolute', top: 37, left: 207}}>
              50cm*50cm
            </Text>

            <Text style={{position: 'absolute', top: 64, left: 20}}>
              Parcel Type:
            </Text>
            <Text style={{position: 'absolute', top: 64, left: 207}}>
              Document
            </Text>

            <Text style={{position: 'absolute', top: 91, left: 20}}>
              Description:
            </Text>
            <Text style={{position: 'absolute', top: 91, left: 207}}>
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
      )}
    </TouchableOpacity>
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
  item1: {
    height: 30,
    fontSize: 14,
    lineHeight: 17,
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    width: 295,
    fontWeight: '600',
    fontFamily: 'Syne',
    fontStyle: 'normal',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#FA8832',
    color: '#333333',
  },
  item: {
    height: 30,
    fontSize: 14,
    lineHeight: 17,
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    width: 295,
    fontWeight: '600',
    fontFamily: 'Syne',
    fontStyle: 'normal',

    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#FA8832',
    color: '#333333',
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
    fontSize: 18,
    fontWeight: 'bold',
  },
});
