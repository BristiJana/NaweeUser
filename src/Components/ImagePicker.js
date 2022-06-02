import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import FilePicker, {types} from 'react-native-document-picker';
import Icon from 'react-native-vector-icons/Fontisto';

export default function ImagePicker() {
  const [fileDate, setFileData] = useState([]);
  const filePickerHandler = async () => {
    try {
      const resp = await FilePicker.pick({
        presentationStyle: 'fullScreen',
        allowMultiSelection: true,
        type: [types.images],
        //(put the files that has to be picked) type: [types.images],
      });
      setFileData(resp);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.idContainer}>
      <TouchableOpacity
        onPress={() => filePickerHandler()}
        style={styles.idBtn}>
        <Image
          source={require('../src/res/Images/profile.webp')}
          style={{
            width: 200,
            height: 200,
            borderRadius: 200 / 2,
            borderWidth: 5,
            
            
          }}
        />
        <Icon
          name="camera"
          type="FontAwesome"
          size={25}
          color="#fa892e"
          style={{fontWeight: '700',position:'absolute',bottom:10,right:10,backgroundColor:'white',width:40,height:40,borderRadius:40,padding:6}}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  idContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  idText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  idBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: 200,

    width: 'auto',
    borderRadius: 150,
    borderColor: 'white',
  },
  idBtnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#f4f3ee',
  },
});
