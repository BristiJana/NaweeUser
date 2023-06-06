import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomDropdown from '../Components/CustomDropdown';
import CustomButton from './CustomButton';
import CheckBox from '@react-native-community/checkbox';

export default function ExpandableText({HeaderText, BodyText}) {
  const [expanded, setexpanded] = useState(false);
  const [surity, setSurity] = useState(false);
  return (
    <View
      style={{
        paddingVertical: '3%',
        borderBottomColor: 'orange',
        borderWidth: 1,
        marginHorizontal: '4%',
        borderRightColor: 'white',
        borderTopColor: 'white',
        borderLeftColor: 'white',
        marginVertical: '3%',
      }}>
      <Collapse
        isExpanded={expanded}
        onToggle={isExpanded => setexpanded(isExpanded)}>
        <CollapseHeader>
          <View
            style={{
              paddingHorizontal: '10%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{alignSelf: 'center'}}>{HeaderText}</Text>
            {expanded ? (
              <Icon name="chevron-up" size={20} color="#000" />
            ) : (
              <Icon name="chevron-down" size={20} color="#000" />
            )}
          </View>
        </CollapseHeader>
        <CollapseBody>
          <View
            style={{
              height: 'auto',
            }}>
            <CustomDropdown
              buttonWidth="80%"
              itemlist={[
                '0-5Kg (Light)',
                '5-20kg (Medium)',
                '20-50Kg(Heavy)',
                '50Kg>(Vey heavy)',
              ]}
              placeholder="Select Parcel Description"
              onPress={a => console.log(a)}
            />
            <CustomDropdown
              buttonWidth="80%"
              itemlist={[
                '0-(L)50cm / (B) 50cm (Small)',
                '50cm – (L) 80cm / (B) 80cm (Medium)',
                '80cm - (L) 122cm / (B) 122cm (Large)',
                '122cm > (Very Large)',
              ]}
              onPress={a => console.log(a)}
              placeholder="Select Parcel Size"
            />
            <View>
              <TextInput
                style={styles.TextInput}
                multiline={true}
                placeholder="Description (Name/ condition of parcel)"
                textAlignVertical="top"
              />
            </View>
            <CustomDropdown
              buttonWidth="80%"
              itemlist={[
                'High Values',
                'Fragile',
                'Sensitive Documents',
                'Electronics',
                'Others',
              ]}
              placeholder="Select Parcel Type"
              onPress={a => console.log(a)}
            />
            <View style={styles.checkbox}>
              <CheckBox
                value={surity}
                onValueChange={() => setSurity(!surity)}
                tintColors={{true: '#fa892e', false: '#fa892e'}}
              />
              <View>
                <Text style={styles.checkboxText}>Insure Your Parcel</Text>
                <Text style={styles.smalltext}>
                  (Subject to conditional charges)
                </Text>
              </View>
            </View>
            <View style={{flexDirection:'row',alignSelf:'center'}}>
              <CustomButton
                name="DELETE"
                bgcolor="#fff"
                width={150}
                fontcolor="#fca15a"
              />
              <CustomButton
                name="UPDATE"
                bgcolor="#fca15a"
                width={150}
                fontcolor="#fff"
              />
            </View>
          </View>
        </CollapseBody>
      </Collapse>
    </View>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    flex:1,
    borderColor: 'white',
    borderWidth: 1,
    elevation: 5,
    backgroundColor: 'white',
    marginHorizontal: '6%',
    borderRadius: 20,
    marginVertical: '5%',
    paddingHorizontal: '5%',
  },
  checkbox: {
    padding: '2%',
    marginHorizontal: '6%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderColor: '#fa892e',
    flexDirection: 'row',
  },
  checkboxText: {
    fontSize: 15,
    fontWeight: '500',
    padding: 5,
  },
  smalltext: {
    fontSize: 11,
    fontWeight: '500',
  },
});
