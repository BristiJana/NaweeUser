import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const CancellationReasons = ({reason1, reason2, reason3, reason4}) => {
  return (
    <>
      <SafeAreaView>
        {/* Cancellation reason will be limited so Text can be used if not then use Flatlist */}
        <View style={styles.card}>
          <Text style={styles.option}>{reason1}</Text>
          <Text style={styles.option}>{reason2}</Text>
          <Text style={styles.option}>{reason3}</Text>
          <Text style={styles.option}>{reason4}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: '5%',
  },
  option: {
    width: '90%',
    borderWidth: 1,
    margin: '2%',
    height: '14%',
    borderColor: '#FA8832',
    borderRadius: 10,
    padding: '3%',
    paddingLeft: '4.5%',
  },
});

export default CancellationReasons;
