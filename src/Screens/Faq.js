import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
} from 'react-native';
import Fecon from 'react-native-vector-icons/Feather';
const Faq = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(responseJson => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

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
      <>
        <Text style={styles.itemStyle} onPress={() => getItem(item)}>
          {item.title} ?
        </Text>
        <Text style={styles.contentStyle}>{item.body}</Text>
      </>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#FA8832',
        }}
      />
    );
  };

  const getItem = item => {
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={text => searchFilterFunction(text)}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
            placeholderTextColor={'black'}
          />
          <Fecon
            name="search"
            size={14}
            color="#333333"
            borderColor="#333333"
            style={{top: 32, position: 'absolute', left: 270}}
          />
        </View>
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 40,
    marginRight: 40,
  },
  itemStyle: {
    padding: 10,

    fontFamily: 'Syne',
    fontStyle: 'normal',

    fontSize: 16,
    lineHeight: 19,

    color: '#FA8832',
  },
  contentStyle: {
    fontFamily: 'Syne',
    fontStyle: 'normal',
    paddingLeft: 12,
    fontSize: 14,
    lineHeight: 17,
    marginBottom: 2,
    color: '#4F4F4F',
  },
  textInputStyle: {
    marginTop: 20,
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#FA8832',
    backgroundColor: '#FFFBF8',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default Faq;
