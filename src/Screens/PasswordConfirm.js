import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignInScreen = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = val => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = val => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#FA8832"
        barStyle="light-content"
        style={{borderRadius: 10}}
      />
      <ImageBackground
        style={{padding: 20, backgroundColor: '#fff', borderRadius: 10}}>
        <Image
          source={require('./pass.jpg')}
          style={{
            height: 118,
            width: 67,
            marginBottom: 18,
            alignSelf: 'center',
            alignItems: 'center',
            alignContent: 'center',
            borderRadius: 10,
          }}
        />
        <Text
          style={{
            color: '#FA8832',
            fontSize: 14,
            lineHeight: 16.8,
            alignSelf: 'center',
            textAlign: 'center',
            fontFamily: 'Syne',
          }}>
          Enter your new password for your NaWee Account
        </Text>
      </ImageBackground>
      <View style={styles.footer}>
        <ScrollView>
          <Text style={[styles.text_footer, {paddingLeft: 6}]}>Password</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Type Here"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather
                  name="eye-off"
                  color="grey"
                  size={10}
                  style={{paddingTop: 12, paddingRight: 15}}
                />
              ) : (
                <Feather
                  name="eye"
                  color="grey"
                  size={10}
                  style={{paddingTop: 12, paddingRight: 15}}
                />
              )}
            </TouchableOpacity>
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
                paddingLeft: 4,
              },
            ]}>
            Confirm Password
          </Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Type Here"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather
                  name="eye-off"
                  color="grey"
                  size={10}
                  style={{paddingTop: 12, paddingRight: 15}}
                />
              ) : (
                <Feather
                  name="eye"
                  color="grey"
                  size={10}
                  style={{paddingTop: 12, paddingRight: 15}}
                />
              )}
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
                  Change my Password
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: 295,
    height: 300,
    borderRadius: 10,
    marginTop: 100,
    marginBottom: 70,
    marginLeft: 50,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    elevation: 4,
    shadowOpacity: 1,
  },

  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  text_footer: {
    fontFamily: 'Syne',
    fontStyle: 'normal',

    fontSize: 14,
    lineHeight: 14,

    color: '#333333',
    borderRadius: 10,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,

    borderColor: '#FA8832',
    borderStyle: 'solid',
    borderWidth: 1,
    height: 40,

    borderRadius: 10,

    backgroundColor: '#FFFBF8',
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#FA8832',
    paddingLeft: 12.8,
    color: '#333333',
    paddingTop: 18,
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: ' #FA8832',
    borderRadius: 10,
  },
  signIn: {
    width: '100%',
    height: 50,
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
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: 'grey',
  },
});
