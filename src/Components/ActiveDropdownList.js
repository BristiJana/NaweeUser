import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import React, {useState} from 'react';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import OrderDropdown from './OrderDropdown';
import OrderList from './OrderList';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function ActiveDropDownList(props) {
  const [expanded, setexpanded] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Collapse
          isExpanded={expanded}
          onToggle={isExpanded => setexpanded(isExpanded)}>
          <CollapseHeader>
            <View>
              <OrderDropdown OrderName="Active Orders" />
            </View>
          </CollapseHeader>
          <CollapseBody style={styles.dropParent}>
            <View style={styles.dropContent}>
              <OrderList
                ListName="LPW3673"
                Status="(Processing)"
                date="01/01/2022"
                nav={props.nav}
              />
              <OrderList
                ListName="LPW3673"
                Status="(In-transit)"
                date="01/01/2022"
              />
              <OrderList
                ListName="LPW3673"
                Status="(Processing)"
                date="01/01/2022"
              />
              <OrderList
                ListName="LPW3673"
                Status="(Processing)"
                date="01/01/2022"
              />
            </View>
          </CollapseBody>
        </Collapse>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  dropContent: {
    borderWidth: 1,
    borderColor: '#FA8832',
    borderRadius: 10,
    width: '80%',
  },
  dropParent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '3%',
  },
});
