import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ExpandableText({HeaderText, BodyText}) {
  const [expanded, setexpanded] = useState(false);

  return (
    <View style={{paddingVertical:20,borderBottomColor:'orange',borderWidth:1,marginHorizontal:20,borderRightColor:'white',borderTopColor:'white',borderLeftColor:'white',marginVertical:10}}>
      <Collapse isExpanded={expanded} onToggle={(isExpanded) => setexpanded(isExpanded)}>
        <CollapseHeader>
          <View style={{paddingHorizontal:30,flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{alignSelf: 'center', height: 20}}>
              {HeaderText}
            </Text>
            {expanded ?<Icon name="chevron-up" size={20} color="#000" />:<Icon name="chevron-down" size={20} color="#000" />}
          </View>
        </CollapseHeader>
        <CollapseBody>
        <View style={{paddingHorizontal:30,flexDirection:'row',justifyContent:'space-between',paddingVertical:20}}>
          <Text tyle={{alignSelf: 'center'}} >{BodyText}</Text>
        </View>
        </CollapseBody>
      </Collapse>
    </View>
  );
}
