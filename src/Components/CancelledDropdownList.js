import {View, Text, Button, StyleSheet, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

import OrderDropdown from '../Components/OrderDropdown';
import CancelledOrderItem from './CancelledOrderItem';

export default function CancelledDropDownList({nav}) {
  const [expanded, setexpanded] = useState(false);

  return (
    <SafeAreaView>
      <View>
        <Collapse
          isExpanded={expanded}
          onToggle={isExpanded => setexpanded(isExpanded)}>
          <CollapseHeader>
            <View>
              <OrderDropdown OrderName="Cancelled Orders" />
            </View>
          </CollapseHeader>
          <CollapseBody style={styles.dropParent}>
            <View style={styles.dropContent}>
              {/* Use flatlist if more itmes are there */}
              <CancelledOrderItem
                ListName="AWP 7685"
                Statusdate="(Cancelled as on 03/02/2022)"
                nav={nav}
              />
              {/* <CancelledOrderItem
                ListName="AWP 7685"
                Statusdate="(Cancelled as on 03/02/2022)"
              /> */}
              <CancelledOrderItem
                ListName="AWP 7685"
                Statusdate="(Cancelled as on 03/02/2022)"
                nav={nav}
              />
            </View>
          </CollapseBody>
        </Collapse>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
