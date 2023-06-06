import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const TrackPacelDetails = ({
  city1,
  city2,
  ParcelName,
  parcelStatus,
  weight,
  parcelType,
}) => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.Container}>
          <Text style={styles.mainHeading}>{ParcelName}</Text>
          <View style={styles.firstContainer}>
            <Text style={styles.upperText}>From</Text>
            <View style={styles.statusContainer}>
              <View style={styles.cityDetails}>
                <Text style={styles.cityName}>{city1}</Text>
                <Image
                  style={styles.img}
                  source={require('../assests/Group.png')}
                />
                <Text style={styles.cityName}>{city2}</Text>
              </View>
              <View style={styles.parcelDetails}>
                <View style={styles.parcelDetailsQus}>
                  <Text style={styles.parcelDetailsText}>Status</Text>
                  <Text style={styles.parcelDetailsText}>Type</Text>
                  <Text style={styles.parcelDetailsText}>Weight</Text>
                </View>
                <View style={styles.parcelDetailsAns}>
                  <Text style={[styles.parcelDetailsText, {color: '#FA8832'}]}>
                    {' '}
                    {parcelStatus}
                  </Text>
                  <Text style={[styles.parcelDetailsText, {color: '#FA8832'}]}>
                    {parcelType}
                  </Text>
                  <Text style={[styles.parcelDetailsText, {color: '#FA8832'}]}>
                    {weight} Kg
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.secondHeading}> History</Text>
          <View style={styles.historyContainer}>
            <View style={styles.historyContent}>
              <View styles={styles.historyIcon}>
                {/* <FontAwesome5 name={'circle-o'} />
              <FontAwesome5 name={'circle-o'} />
              <FontAwesome5 name={'circle-o'} />
              <FontAwesome5 name={'circle-o'} /> */}
              </View>
              <View styles={styles.historyTextContainer}>
                <Text>Processing</Text>
                <Text style={styles.historyText}>In-Transit</Text>
                <Text style={styles.historyText}>Delayed</Text>
                <Text style={styles.historyText}>Arrived</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  Container: {
    alignSelf: 'center',
  },
  mainHeading: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
  },
  firstContainer: {
    width: 310,
    height: 130,
    marginTop: 20,
    marginBottom: 84,
    borderRadius: 10,
    elevation: 10,
    backgroundColor: '#fff',
  },
  upperText: {
    fontSize: 12,
    fontWeight: '400',
    position: 'relative',
    left: 25,
    bottom: 10,
    top: 15,
  },
  statusContainer: {
    position: 'relative',
    top: 20,
  },

  img: {
    marginHorizontal: 4,
  },
  cityDetails: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cityName: {
    fontSize: 16,
    fontWeight: '400',
    color: '#FA8832',
  },
  parcelDetailsQus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 255,
    marginTop: 20,
    alignItems: 'center',
    marginLeft: 25,
  },
  parcelDetailsAns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    width: 260,
    alignItems: 'center',
    marginLeft: 20,
  },
  parcelDetailsText: {
    fontSize: 12,
    fontWeight: '400',
  },
  historyContainer: {
    width: 310,
    height: 280,
    // borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 10,
  },
  historyContent: {
    flexDirection: 'row',
    position: 'relative',
    left: 100,
    top: 43,
    alignItems: 'space-between',
  },
  historyTextContainer: {},
  historyText: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: 40,
  },
  secondHeading: {
    position: 'relative',
    bottom: 30,
    fontSize: 20,
    fontWeight: '600',
  },
});
export default TrackPacelDetails;
