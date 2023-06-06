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

export default function Request() {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          alignSelf: 'center',
          alignContent: 'center',
          marginTop: 15,
          marginLeft: 30,
          marginRight: 30,
          marginBottom: 148,
        }}>
        <Text style={[styles.txt, {width: 54, marginRight: 240}]}>Today</Text>
        <View
          style={[
            styles.cont,
            {
              marginTop: 30,

              backgroundColor: 'transparent',
            },
          ]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Image source={require('./p.png')} style={{marginLeft: 4}} />
            <View
              style={{
                width: 265,
                marginLeft: 8,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: '#FA8832'}}>Mr. Vincent </Text>
                <Text
                  style={{
                    marginRight: 16,
                    marginTop: 4,
                    fontSize: 10,
                    lineHeight: 12,
                  }}>
                  11 AM
                </Text>
              </View>
              <Text>You have Emergency Drop off request from Mr. Vincent</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <View style={styles.button}>
              <TouchableOpacity style={styles.signIn} onPress={() => {}}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#FA8832',
                    },
                  ]}>
                  DECLINE
                </Text>
              </TouchableOpacity>
            </View>
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
                    ACCEPT
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text
          style={[
            styles.txt,
            {
              marginTop: 99,
              marginRight: 260,
            },
          ]}>
          Earlier
        </Text>

        <View
          style={[
            styles.cont,
            styles.shad,
            {marginTop: 30, backgroundColor: 'rgba(250, 136, 50, 0.1)'},
          ]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
            }}>
            <Image
              source={require('./p.png')}
              style={{marginLeft: 9, width: 40, height: 40}}
            />
            <View
              style={{
                width: 265,
                marginLeft: 8,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: '#FA8832'}}>Mr. Vincent </Text>
                <View
                  style={{
                    marginRight: 16,
                    marginTop: 4,
                    fontSize: 10,
                    lineHeight: 12,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{paddingRight: 7, fontSize: 10, lineHeight: 12}}>
                    11 AM
                  </Text>
                  <Text style={{fontSize: 10, lineHeight: 12}}>05/02/2023</Text>
                </View>
              </View>
              <Text style={{fontSize: 12, lineHeight: 14}}>
                You have Emergency Drop off request from Mr. Vincent
              </Text>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.cont,
            styles.shad,
            {marginTop: 30, backgroundColor: 'rgba(255, 0, 0, 0.1)'},
          ]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
            }}>
            <Image
              source={require('./p.png')}
              style={{marginLeft: 9, width: 40, height: 40}}
            />
            <View
              style={{
                width: 265,
                marginLeft: 8,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: '#333333'}}>Mr. Vincent </Text>
                <View
                  style={{
                    marginRight: 16,
                    marginTop: 4,
                    fontSize: 10,
                    lineHeight: 12,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{paddingRight: 7, fontSize: 10, lineHeight: 12}}>
                    11 AM
                  </Text>
                  <Text style={{fontSize: 10, lineHeight: 12}}>05/02/2023</Text>
                </View>
              </View>
              <Text style={{fontSize: 12, lineHeight: 14}}>
                You have Emergency Drop off request from Mr. Vincent
              </Text>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.cont,
            styles.shad,
            {marginTop: 30, backgroundColor: 'rgba(250, 136, 50, 0.1)'},
          ]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
            }}>
            <Image
              source={require('./p.png')}
              style={{marginLeft: 9, width: 40, height: 40}}
            />
            <View
              style={{
                width: 265,
                marginLeft: 8,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: '#FA8832'}}>Mr. Vincent </Text>
                <View
                  style={{
                    marginRight: 16,
                    marginTop: 4,
                    fontSize: 10,
                    lineHeight: 12,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{paddingRight: 7, fontSize: 10, lineHeight: 12}}>
                    11 AM
                  </Text>
                  <Text style={{fontSize: 10, lineHeight: 12}}>05/02/2023</Text>
                </View>
              </View>
              <Text style={{fontSize: 12, lineHeight: 14}}>
                You have Emergency Drop off request from Mr. Vincent
              </Text>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.cont,
            styles.shad,
            {marginTop: 30, backgroundColor: 'rgba(255, 0, 0, 0.1)'},
          ]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 8,
            }}>
            <Image
              source={require('./p.png')}
              style={{marginLeft: 9, width: 40, height: 40}}
            />
            <View
              style={{
                width: 265,
                marginLeft: 8,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: '#333333'}}>Mr. Vincent </Text>
                <View
                  style={{
                    marginRight: 16,
                    marginTop: 4,
                    fontSize: 10,
                    lineHeight: 12,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{paddingRight: 7, fontSize: 10, lineHeight: 12}}>
                    11 AM
                  </Text>
                  <Text style={{fontSize: 10, lineHeight: 12}}>05/02/2023</Text>
                </View>
              </View>
              <Text style={{fontSize: 12, lineHeight: 14}}>
                You have Emergency Drop off request from Mr. Vincent
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
  shad: {
    elevation: 1,
  },
  txt: {
    fontWeight: '400',
    fontFamily: 'Syne',
    fontStyle: 'normal',

    fontSize: 20,
    lineHeight: 24,

    color: '#333333',
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
    fontStyle: 'normal',
    fontFamily: 'Syne',
    lineHeight: 14,
    color: '#FFFF',
  },
});
