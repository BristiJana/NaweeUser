import {View, Text, Button, StyleSheet, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import OrderDropdown from '../Components/OrderDropdown';
import CompletedOrderItem from './CompletedOrderItem';

export default function CompleteDropDownList() {
  const [expanded, setexpanded] = useState(false);

  return (
    <SafeAreaView>
      <View>
        <Collapse
          isExpanded={expanded}
          onToggle={isExpanded => setexpanded(isExpanded)}>
          <CollapseHeader>
            <View>
              <OrderDropdown OrderName="Completed Orders" />
            </View>
          </CollapseHeader>
          <CollapseBody style={styles.dropParent}>
            <View style={styles.dropContent}>
              <CompletedOrderItem
                ListName="LPW3673"
                Statusdate="(Completed Delivery on 01/01/2022)"
              />
              <CompletedOrderItem
                ListName="LPW3673"
                Statusdate="(Completed Delivery on 01/01/2022)"
              />
              <CompletedOrderItem
                ListName="LPW3673"
                Statusdate="(Completed Delivery on 01/01/2022)"
              />
              <CompletedOrderItem
                ListName="LPW3673"
                Statusdate="(Completed Delivery on 01/01/2022)"
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
