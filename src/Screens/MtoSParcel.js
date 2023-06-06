import { ScrollView, Text } from 'react-native'
import React from 'react';
import ExpandableText from '../Components/ExpandableText';

export default function MtoSParcel() {
  return (
    <ScrollView contentContainerStyle={{height: 'auto', margin: 5}}
    showsVerticalScrollIndicator={false}>
      <ExpandableText HeaderText="PAR576"  />
      <ExpandableText HeaderText="PAR577"  />
      <ExpandableText HeaderText="PAR523"  />
    </ScrollView>
  )
}