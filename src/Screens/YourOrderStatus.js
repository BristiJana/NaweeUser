import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import OrderDropdown from '../Components/OrderDropdown';

const YourOrderStatus = ({navigation}) => {
  return (
    <>
      <SafeAreaView>
        <View>
          <OrderDropdown
            OrderName="PAR 576"
            RecieverName="(Reciever Name)"
            nav={navigation}
          />
          <OrderDropdown OrderName="PAR 576" RecieverName="(Reciever Name)" />
          <OrderDropdown OrderName="PAR 576" RecieverName="(Reciever Name)" />
          <OrderDropdown OrderName="PAR 576" RecieverName="(Reciever Name)" />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});
export default YourOrderStatus;
