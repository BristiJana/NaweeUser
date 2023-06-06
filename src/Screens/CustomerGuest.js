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
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
export default function CustomerGuest({navigation}) {
  return (
    <ScrollView>
      <ImageBackground
        source={require('./upwhite.png')}
        style={{width: '100%', height: 200}}>
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
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('LoginStack', {name: 'LoginStack'})
          }
          style={{paddingVertical: 15}}>
          <View style={styles.back}>
            <Text style={[styles.bac_txt, {paddingRight: 29, paddingLeft: 29}]}>
              Customer
            </Text>
            <ImageBackground
              source={require('./Rectangle.png')}
              style={[styles.img, {marginRight: 16}]}>
              <Image
                source={require('./Boy.png')}
                style={{
                  backgroundColor: '#fff',
                  width: 50.95,
                  height: 59,
                  borderRadius: 4,
                }}
              />
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={styles.back}>
            <ImageBackground
              source={require('./Rectangle.png')}
              style={[styles.img, {marginLeft: 16}]}>
              <Image
                source={require('./Girl.png')}
                style={{
                  backgroundColor: '#fff',
                  width: 50,
                  height: 57.75,
                  borderRadius: 4,
                }}
              />
            </ImageBackground>
            <Text style={[styles.bac_txt, {paddingLeft: 29}]}>Guest</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={require('./downwhite.png')}
        style={{width: '100%', marginTop: 100}}>
        <Image source={require('./Down.png')} style={{width: '100%'}} />
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 24,

    opacity: 0.3,
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    alignItems: 'center',
    width: 295,
    height: 150,
    borderRadius: 23,
    borderColor: '#FA8832',
    borderStyle: 'solid',

    backgroundColor: '#FA8832',
  },
  img: {
    width: 133,
    height: 108,

    backgroundColor: '#FFFBF8',

    borderRadius: 14,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bac_txt: {
    fontSize: 20,
    fontFamily: 'Syne',
    fontStyle: 'normal',

    lineHeight: 24,

    marginLeft: 5,
    alignSelf: 'center',
    textAlign: 'center',

    color: '#FFF',
  },
});
