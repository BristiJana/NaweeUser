import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
export default function Home({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <ImageBackground
          source={require('./upwhite.png')}
          style={{width: '100%', height: 200, marginBottom: 30}}>
          <Image source={require('./Up.png')} style={{width: '100%'}} />
        </ImageBackground>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            alignContent: 'center',
          }}>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Sm', {name: 'Sm'})}
              style={{paddingVertical: 15}}>
              <LinearGradient
                colors={['#FA8832', '#FFF', '#FFFBF8']}
                start={{x: 0, y: 0.5}}
                end={{x: 1.1, y: 0.5}}
                style={{borderRadius: 5}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 1,
                    alignItems: 'center',
                    width: 295,
                    height: 80,
                    borderRadius: 5,
                    borderColor: '#FA8832',
                    borderStyle: 'solid',
                  }}>
                  <ImageBackground
                    source={require('./sm.png')}
                    style={{
                      width: 138,
                      height: 80,
                    }}>
                    <Image
                      source={require('./groupperson.png')}
                      style={{
                        width: 61,
                        height: 48,
                        marginLeft: 20,
                        marginTop: 20,
                      }}
                    />
                  </ImageBackground>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Syne',
                      fontStyle: 'normal',

                      lineHeight: 19,

                      alignSelf: 'center',
                      textAlign: 'center',
                      paddingTop: 10,
                      paddingRight: 40,
                      color: 'black',
                    }}>
                    Send Parcel
                  </Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('TrackIn', {name: 'TrackIn'})}
              style={{paddingVertical: 15}}>
              <LinearGradient
                colors={['#FA8832', '#FFFFFF', '#FFFBF8']}
                start={{x: 0, y: 0.5}}
                end={{x: 1.1, y: 0.5}}
                style={{borderRadius: 5}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 1,
                    alignItems: 'center',
                    width: 295,
                    height: 80,
                    borderRadius: 5,
                    borderColor: '#FA8832',
                    borderStyle: 'solid',
                  }}>
                  <ImageBackground
                    source={require('./sm.png')}
                    style={{
                      width: 138,
                      height: 80,
                    }}>
                    <Image
                      source={require('./gift.png')}
                      style={{
                        backgroundColor: 'transparent',
                        width: 64,
                        height: 65,
                        marginLeft: 16,
                        marginTop: 6,
                      }}
                    />
                  </ImageBackground>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Syne',
                      fontStyle: 'normal',

                      lineHeight: 19,

                      alignSelf: 'center',
                      textAlign: 'center',

                      color: 'black',
                      paddingTop: 10,
                      paddingRight: 40,
                    }}>
                    Track Parcel
                  </Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        <ImageBackground
          source={require('./downwhite.png')}
          style={{width: '100%', marginTop: 133}}>
          <Image source={require('./Down.png')} style={{width: '100%'}} />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 24,

    opacity: 0.3,
  },
});
