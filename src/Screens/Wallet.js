import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import WalletDetails from '../Components/WalletDetails';
import LinearGradient from 'react-native-linear-gradient';

const Wallet = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.HeadSection}>
            <View style={styles.balanceContainer}>
              <Text style={styles.balance}> 200.00 </Text>
            </View>
            <Text style={styles.balanceText}> CURRENT BALANCE</Text>
            <Image
              style={styles.img}
              source={require('../assests/Wallet.png')}
            />
          </View>
          <Text style={styles.detailsText}> Details</Text>
          <View>
            <WalletDetails />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  HeadSection: {
    width: '100%',
    height: 136,
    backgroundColor: '#FA8832',
  },
  balanceContainer: {
    // width: 200,
    // height: ,
  },
  detailsText: {
    fontSize: 16,
    fontWeight: '400',
    padding: 20,
  },
  balance: {
    fontWeight: '400',
    fontSize: 36,
    position: 'relative',
    left: 52,
    top: 40,
    color: 'white',
  },
  balanceText: {
    fontSize: 16,
    fontWeight: '400',
    position: 'relative',
    left: 40,
    top: 45,
    color: 'white',
  },
  img: {
    height: 110,
    position: 'relative',
    left: 265,
    top: -55,
  },
});
export default Wallet;
