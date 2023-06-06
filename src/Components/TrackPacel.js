import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const TrackParcel = ({parcelName, loc1, loc2, ParcelStatus}) => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.Section}>
            <View style={styles.parcelContent}>
              <Text style={styles.parcelName}> {parcelName}</Text>
              <Text style={styles.locations}>
                {loc1} <FontAwesome5 name={'angle-double-right'} solid /> {loc2}
              </Text>
            </View>
            <Text style={styles.status}>{ParcelStatus}</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignSelf: 'center',
  },
  Section: {
    width: 340,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#FA8832',
    height: 55,
  },
  parcelContent: {
    padding: 12,
  },
  parcelName: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
  },
  locations: {
    fontSize: 12,
    fontWeight: '400',
    color: 'black',
    padding: 5,
  },
  status: {
    fontSize: 14,
    fontWeight: '400',
    marginRight: 10,
    color: 'black',
  },
});

export default TrackParcel;
