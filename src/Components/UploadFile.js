import React from 'react';
import {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FilePicker, {types} from 'react-native-document-picker';
import Icon from 'react-native-vector-icons/Entypo';

const UploadFile = ({title}) => {
  const [fileDate, setFileData] = useState([]);
  const filePickerHandler = async () => {
    try {
      const resp = await FilePicker.pick({
        presentationStyle: 'fullScreen',
        allowMultiSelection: true,
        type: [types.images, types.doc, types.pdf],
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
      <View>
        <Text style={styles.idText}>{title}</Text>
      </View>
      <TouchableOpacity
        onPress={() => filePickerHandler()}
        style={styles.idBtn}>
        <Icon name="upload-to-cloud" size={60} color="#fff" />
        <Text style={styles.idBtnText}>.PNG,.PDF,.JPG,.DOC</Text>
        <Text style={styles.secondarytext}>You can also upload files by</Text>
        <Text style={styles.lasttext}>clicking here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  idContainer: {
    marginTop: 50,
    height: 200,
    width: '80%',
    borderColor: '#fca15a',
    borderWidth: 2,
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,

  },
  idText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    alignSelf:'center'
  },
  idBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: 130,
    borderRadius: 15,
    paddingHorizontal: 70,
    paddingVertical: 12,
    backgroundColor: '#fee9d8',
    borderColor: '#fee9d8',

  },
  idBtnText: {
    fontSize: 14,
    fontWeight: '700',
  },
  secondarytext: {
    fontSize: 11,
    fontWeight: '700',
  },
  lasttext: {
    fontSize: 13,
    fontWeight: '600',
    color: '#fca15a',
    textDecorationLine: 'underline',
  },
  lasttext:{
    fontSize:13,
    fontWeight:'600',
    color:'#fca15a',
    textDecorationLine:'underline',
  }
});
export default UploadFile;
