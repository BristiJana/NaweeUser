import {ScrollView, Text} from 'react-native';
import React from 'react';
import ExpandableText from '../Components/ExpandableForMany';
import SafeAreaView from 'react-native-safe-area-view';

export default function MtoMParcel() {
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}>
        <ExpandableText HeaderText="PAR576" isDropoFF={true}/>
        <ExpandableText HeaderText="PAR577" />
        <ExpandableText HeaderText="PAR523" />
      </ScrollView>
    </SafeAreaView>
  );
}
