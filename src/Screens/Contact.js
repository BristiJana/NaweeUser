import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import EIIcon from 'react-native-vector-icons/EvilIcons';
import Iicon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
export default function Contact() {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          alignContent: 'center',
          marginBottom: 40,
          width: 295,
          height: 598,
          marginTop: 37,
          marginBottom: 107,

          backgroundColor: 'white',
          shadowColor: '#171717',
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 0.4,
          shadowRadius: 2,
          elevation: 2,
          borderRadius: 10,
        }}>
        <ImageBackground style={{padding: 20, backgroundColor: '#fff'}}>
          <Image
            source={require('./Cont.jpg')}
            style={{
              height: 121,
              width: 119,

              marginBottom: 10,
              alignSelf: 'center',
              alignItems: 'center',
              alignContent: 'center',
            }}
          />
          <Text
            style={{
              color: '#FA8832',
              fontSize: 16,
              lineHeight: 19,
              alignSelf: 'center',
              textAlign: 'center',
              fontFamily: 'Syne',
              marginBottom: 6,
            }}>
            Contact Customer Support Services
          </Text>
          <Text
            style={{
              width: 252,

              alignSelf: 'center',
              textAlign: 'center',
              fontFamily: 'Syne',
              fontStyle: 'normal',

              fontSize: 14,
              lineHeight: 17,
              textAlign: 'center',

              color: '#4F4F4F',
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
            interdum mauris mollis ultricies et, lacinia.
          </Text>
        </ImageBackground>

        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <ImageBackground source={require('./rec1.png')} style={{width: 218}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',

                height: 50,
                borderWidth: 1,
                alignItems: 'center',
                width: 218,
                height: 45,
                borderRadius: 5,
                borderColor: '#FA8832',
                borderStyle: 'solid',
              }}>
              <Iicon
                name="ios-call-outline"
                size={22}
                color="#FA8832"
                style={{paddingLeft: 20}}
              />
              <Text
                style={{
                  fontSize: 14,
                  top: 6,
                  position: 'absolute',
                  left: 59,
                  lineHeight: 19,
                  width: 99,

                  fontFamily: 'Syne',

                  alignSelf: 'center',
                  textAlign: 'center',

                  color: '#FA8832',
                }}>
                Call Us
              </Text>
              <Text
                style={{
                  fontSize: 14,

                  lineHeight: 19,

                  fontFamily: 'Syne',

                  alignSelf: 'center',
                  textAlign: 'center',

                  color: '#FA8832',
                  position: 'absolute',
                  left: 59,
                  top: 24,
                }}>
                +12 345678900
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <ImageBackground source={require('./rec2.png')} style={{width: 218}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              alignItems: 'center',
              width: 218,
              height: 45,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
              borderColor: '#FA8832',
              borderStyle: 'solid',
            }}>
            <EIIcon
              name="envelope"
              size={22}
              color="#FA8832"
              style={{paddingLeft: 20}}
            />
            <Text
              style={{
                fontSize: 12,

                lineHeight: 15,
                width: 148,
                height: 32,
                marginRight: 14,
                fontFamily: 'Syne',
                paddingLeft: 10,
                alignSelf: 'center',
                textAlign: 'center',

                color: '#FA8832',
              }}>
              How can we Help? Mail us dummymail@gmail.com
            </Text>
          </View>
        </ImageBackground>
        <ImageBackground source={require('./rec3.png')} style={{width: 218}}>
          <TextInput
            style={{
              fontSize: 15,
              fontFamily: 'Syne',

              color: 'black',
              width: 218,
              height: 117,
              borderTopLeftRadius: 0,
              borderBottomRightRadius: 0,
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
              borderColor: '#FA8832',
              borderStyle: 'solid',

              textAlignVertical: 'top',
            }}
            placeholder="Type your query here"
            placeholderTextColor={'#333333'}
          />
        </ImageBackground>
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
                SEND
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 24,

    opacity: 0.3,
  },
  button: {
    alignItems: 'center',
    marginTop: 23,
    backgroundColor: ' #FA8832',
    borderRadius: 10,

    width: 111,
    height: 30,
    borderRadius: 5,
    marginBottom: 15,
  },
  signIn: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: ' #FA8832',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
