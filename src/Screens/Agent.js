import React, {useState, useEffect} from 'react';
import {
  Button,
  View,
  Alert,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Fecon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

const data = [
  {title: 'Mr. Vincent', value: '1', body: 'Time: 10minutes'},
  {title: 'Myr. Vinaye', value: '2', body: 'Time: 10minutes'},
  {title: 'Mr. Vincent', value: '3', body: 'Time: 10minutes'},
  {title: 'Mr. Vincent', value: '4', body: 'Time: 10minutes'},
  {title: 'Mrs. Vincent', value: '5', body: 'Time: 10minutes'},
];

const Agent = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [tilt, settilt] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState(data);
  const [masterDataSource, setMasterDataSource] = useState(data);
  const [selectedid, setSelectedid] = useState();
  const searchFilterFunction = text => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedid(item.value);
          settilt(item.title);
        }}>
        <View
          style={
            item.value === selectedid
              ? styles.ContainerSelected
              : styles.normalContainer
          }>
          <View>
            <Text style={styles.itemStyle} onPress={() => getItem(item)}>
              {item.title}
            </Text>
            <Text style={styles.contentStyle}>{item.body}</Text>
          </View>
          <Image
            source={require('./call.png')}
            style={{width: 26, height: 26, marginTop: 13, marginRight: 9}}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 1,
          width: 315,
          backgroundColor: '#FA8832',
          opacity: 0.45,
        }}
      />
    );
  };

  const getItem = item => {
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <View style={styles.button1}>
              <TouchableOpacity
                style={styles.signIn}
                onPress={() => navigation.navigate('Booth', {name: 'Booth'})}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#FA8832',
                    },
                  ]}>
                  Booth
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button2}>
              <TouchableOpacity
                style={styles.signIn}
                onPress={() => navigation.navigate('Agent', {name: 'Agent'})}>
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
                    Agent
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={text => searchFilterFunction(text)}
              value={search}
              underlineColorAndroid="transparent"
              placeholder="Search Location"
              placeholderTextColor={'black'}
            />
            <Fecon
              name="search"
              size={14}
              color="#333333"
              borderColor="#333333"
              style={{top: 44, position: 'absolute', left: 280}}
            />
          </View>
          <Text style={styles.header}>Available Agents Near you</Text>
          <FlatList
            data={filteredDataSource}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
            style={{marginLeft: 10, marginRight: 10}}
            ListFooterComponent={() => (
              <>
                <View
                  style={{
                    height: 1,
                    backgroundColor: '#FA8832',
                    marginHorizontal: 4,
                    width: 315,
                    marginBottom: 20,
                    opacity: 0.45,
                  }}
                />

                <Text style={[styles.footext]}>
                  You can start your emergency drop-off to {tilt} once he has
                  accepted your request to drop-off.
                </Text>
              </>
            )}
          />
          <View style={[styles.mainbutton]}>
            <TouchableOpacity style={[styles.mainsignIn]} onPress={() => {}}>
              <LinearGradient
                colors={['#FA8832', '#FA8832']}
                style={styles.mainsignIn}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#fff',
                    },
                  ]}>
                  REQUEST DROP-OFF
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
  },
  ContainerSelected: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: 'rgba(250, 136, 50, 0.19)',
    width: 315,
  },
  seperatorSelected: {height: 1, width: 315, backgroundColor: '#FFFFFF'},
  normalseperator: {
    height: 1,
    width: 315,
    backgroundColor: '#FA8832',
  },

  normalContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  header: {
    fontFamily: 'Syne',
    fontStyle: 'normal',
    marginLeft: 18,
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 10,
    fontWeight: '600',
    color: '#333333',
    marginTop: 40,
  },
  itemStyle: {
    fontFamily: 'Syne',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    paddingTop: 7,
    paddingBottom: 6,
    paddingLeft: 10,
    color: '#333333',
  },
  contentStyle: {
    fontFamily: 'Syne',
    fontStyle: 'normal',
    paddingLeft: 12,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 12,
    paddingBottom: 12,
    paddingLeft: 10,
    color: '#FA8832',
  },
  textInputStyle: {
    marginTop: 30,
    height: 40,
    width: 295,
    borderWidth: 1,
    paddingLeft: 20,
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: '#FA8832',

    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
  },
  button1: {
    alignItems: 'center',

    backgroundColor: '#FFFF',
    borderRadius: 10,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    width: 148,
    height: 40,
    borderColor: '#FA8832',
    borderWidth: 1,
  },
  button2: {
    alignItems: 'center',

    backgroundColor: ' #FA8832',

    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    width: 148,
    height: 40,
  },
  mainbutton: {
    alignItems: 'center',

    backgroundColor: ' #FA8832',

    borderRadius: 10,
    width: 220,
    height: 40,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 80,
    marginBottom: 40,
  },
  signIn: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  mainsignIn: {
    width: 220,
    borderRadius: 10,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  textSign: {
    fontSize: 16,
    fontWeight: '500',
    fontStyle: 'normal',
    fontFamily: 'Syne',
    lineHeight: 19,
    color: '#FA8832',
  },
  footext: {
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Syne',
    lineHeight: 12,
    color: '#FA8832',

    marginLeft: 4,
    marginRight: 6,
  },
});
export default Agent;
