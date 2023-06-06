import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const Parcel = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.parcelContainer}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#f0ceb4', '#fff']}
            style={styles.gradient}>
            <TouchableOpacity style={styles.button}>
              <FontAwesome name="truck" size={30} color="#FA8832" />
              <Text style={styles.text}>Send Parcel</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  parcelContainer: {
    alignSelf: 'center',
    marginTop: 20,
  },
  gradient: {
    borderRadius: 12,
  },
  button: {
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FA8832',
    width: 300,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 18,
  },
  text: {
    color: 'black',
    padding: 20,
    fontSize: 16,
    fontWeight: '400',
  },
});
export default Parcel;
