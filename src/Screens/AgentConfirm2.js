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
  Image,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
export default function AgentConfirm2() {
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
          marginTop: 20,
          marginBottom: 20,
          marginLeft: 40,
          marginRight: 40,
        }}>
        <Text
          style={[
            styles.txt,
            {width: 158, height: 19, marginTop: 30, marginRight: 136},
          ]}>
          Booth Pickup
        </Text>
        <View
          style={[
            styles.cont,
            {
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 81,
            },
          ]}>
          <Text style={{position: 'absolute', top: 10, left: 16}}> Phone:</Text>
          <Text style={{position: 'absolute', top: 10, left: 198}}>
            1236745670
          </Text>

          <Text style={{position: 'absolute', top: 37, left: 17}}>
            Address:
          </Text>
          <Text style={{position: 'absolute', top: 37, left: 130, width: 158}}>
            123 skylark Ht. ,10 floor,
          </Text>
          <Text style={{position: 'absolute', top: 53, left: 112}}>
            {' '}
            Flat 10A, Lagos Booth234
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
            <Item main="Parcel 1" num="1" />
            <Item main="Parcel 2" num="2" />
            <Item main="Parcel 3" num="3" />
            <Item main="Parcel 4" num="4" />
            <Item main="Parcel 5" num="5" />
          </View>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => setDefaultAnimationDialog(true)}>
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
                START PICKUP
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <Text
          style={[
            styles.txt,
            {
              marginTop: 38,

              color: '#FA8832',
              fontSize: 14,
              lineHeight: 16,
            },
          ]}>
          Cancel
        </Text>
      </View>
      <Image
        source={require('./agentdown.png')}
        style={{
          alignItems: 'center',
          alignSelf: 'center',
          alignContent: 'center',
          width: '100%',
        }}
      />
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
    borderRadius: 10,

    width: 220,
    height: 40,
  },
  signIn: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: ' #FA8832',
  },
  textSign: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19,
    fontStyle: 'normal',
    fontFamily: 'Syne',
  },
});
