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
import {TextInput} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export default function DelayedDelivery() {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          alignSelf: 'center',
          alignContent: 'center',
          marginTop: 42,
          marginLeft: 40,
          marginRight: 40,
          marginBottom: 50,
        }}>
        <View
          style={[
            styles.cont,
            styles.shad1,
            {backgroundColor: 'rgba(250, 136, 50, 0.1)'},
          ]}>
          <Text
            style={{
              padding: 10,
              paddingBottom: 0,
              marginLeft: 9,
              fontSize: 16,
              lineHeight: 19,
              paddingBottom: 0,
              textAlign: 'center',
              color: '#333333',
              fontWeight: '400',
              fontFamily: 'Syne',
              fontStyle: 'normal',
            }}>
            We noticed a delay in your delivery . Is everything alright?
          </Text>
          <Text
            style={{
              padding: 10,
              paddingTop: 0,
              marginLeft: 9,
              fontSize: 16,
              lineHeight: 19,
              paddingBottom: 0,
              textAlign: 'center',
              color: '#333333',
              fontWeight: '400',
              fontFamily: 'Syne',
              fontStyle: 'normal',
            }}>
            Let us know what happened and if you need any assistance.
          </Text>
        </View>

        <View
          style={[
            styles.cont,
            styles.shad,
            {marginTop: 20, backgroundColor: '#FFF', height: 40},
          ]}>
          <Text
            style={{
              padding: 10,

              paddingBottom: 0,
              paddingTop: 6,
              textAlign: 'left',
              fontSize: 16,
              lineHeight: 19,
              color: '#333333',
              fontWeight: '400',
              fontFamily: 'Syne',
              fontStyle: 'normal',
            }}>
            Lorem ipsum dolor sit
          </Text>
        </View>

        <View
          style={[
            styles.cont,
            styles.shad,
            {marginTop: 20, backgroundColor: '#FFF', height: 40},
          ]}>
          <Text
            style={{
              padding: 10,

              paddingBottom: 0,
              paddingTop: 6,
              textAlign: 'left',
              color: '#333333',
              fontSize: 16,
              lineHeight: 19,
              fontWeight: '400',
              fontFamily: 'Syne',
              fontStyle: 'normal',
            }}>
            Lorem ipsum dolor sit
          </Text>
        </View>
        <View
          style={[
            styles.cont,
            styles.shad,
            {marginTop: 20, backgroundColor: '#FFF', height: 40},
          ]}>
          <Text
            style={{
              padding: 10,

              paddingBottom: 0,
              paddingTop: 6,
              textAlign: 'left',
              fontSize: 16,
              lineHeight: 19,
              color: '#333333',
              fontWeight: '400',
              fontFamily: 'Syne',
              fontStyle: 'normal',
            }}>
            Lorem ipsum dolor sit
          </Text>
        </View>
        <View
          style={[
            styles.cont,
            styles.shad1,
            {
              marginTop: 20,
              backgroundColor: 'rgba(250, 136, 50, 0.1)',
              height: 40,
            },
          ]}>
          <Text
            style={{
              padding: 10,

              paddingBottom: 0,
              paddingTop: 12,
              textAlign: 'left',
              fontSize: 16,
              lineHeight: 19,
              color: '#333333',
              fontWeight: '400',
              fontFamily: 'Syne',
              fontStyle: 'normal',
            }}>
            Others
          </Text>
        </View>

        <TextInput
          style={[
            styles.cont,
            styles.shad,
            {
              backgroundColor: '#FFF',
              height: 169,
              marginTop: 20,
              padding: 10,
              textAlignVertical: 'top',
            },
          ]}
          placeholder="Type Here"
          placeholderTextColor="#333333"
        />
        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={() => {}}>
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
                OK
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cont: {
    width: 295,
    height: 94,

    fontWeight: '400',
    fontFamily: 'Syne',
    fontStyle: 'normal',

    borderStyle: 'solid',

    borderRadius: 10,
    fontSize: 16,
    lineHeight: 19,

    color: '#333333',
  },
  shad: {
    shadowOffset: {
      width: 0,
    },

    shadowColor: 'rgba(0, 0, 0, 0.1)',
    elevation: 4,
  },
  shad1: {
    elevation: 1,
  },

  button: {
    alignItems: 'center',
    marginTop: 87,
    backgroundColor: ' #FA8832',
    borderRadius: 10,

    width: 130,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  signIn: {
    width: '100%',
    height: 40,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: ' #FA8832',
  },
  textSign: {
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: 'Syne',
    lineHeight: 19,
    color: '#FFFF',
  },
});
