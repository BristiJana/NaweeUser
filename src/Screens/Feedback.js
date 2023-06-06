import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [defaultRating, setDefaultRating] = useState(2);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const [num, setnum] = useState(1);
  const str = num.toString();
  var array = [
    require('./smile1.png'),
    require('./smile2.png'),
    require('./smile3.png'),
    require('./smile4.png'),
    require('./smile5.png'),
  ];

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => {
                setDefaultRating(item);
                setnum(item - 1);
              }}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? require('./filled.png')
                    : require('./corner.png')
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image
          source={require('./active.png')}
          style={{
            width: 15,
            height: 15,
            position: 'absolute',
            top: 84,
            left: 268,
          }}
        />
        <Text style={styles.titleText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Image style={styles.imgStyle} source={array[num]}></Image>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.textstyle}> Booth</Text>
          <CustomRatingBar />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.textstyle}> App</Text>
          <CustomRatingBar />
        </View>
        <Text style={styles.textStyleSmall}>
          We value your opinion. Thank you.!!
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => alert(defaultRating)}>
          <Text style={styles.buttonTextStyle}>OK</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
    width: 295,
    height: 400,
    alignContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',

    borderRadius: 10,
  },
  textstyle: {
    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    marginTop: 48,
    color: '#333333',
  },
  titleText: {
    fontSize: 16,
    textAlign: 'center',
    width: 210,
    height: 38,
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '400',

    lineHeight: 19,

    color: '#FA8832',
  },
  imgStyle: {
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 120,
    height: 120,

    marginTop: 15,
  },
  textStyleSmall: {
    textAlign: 'center',
    fontSize: 16,
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 21,
    width: 163,
    height: 38,

    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '400',

    lineHeight: 19,

    color: '#FA8832',
  },
  buttonStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,

    backgroundColor: '#FA8832',
    borderRadius: 10,
    width: 130,
    height: 40,
    alignContent: 'center',
    alignSelf: 'center',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
    paddingTop: 10,
  },
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 40,
    marginRight: 42,
  },
  starImageStyle: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
});
