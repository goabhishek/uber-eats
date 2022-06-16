import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const HeaderTabs = () => {
  const [activeTab, setActivetab] = useState('Delivery');
  return (
    <View style={{ flexDirection: 'row', alignSelf: 'center', margin: 35 }}>
      {/* Headerbutton */}
      <HeaderButton
        text='Delivery'
        btncolor='black'
        textColor='white'
        activeTab={activeTab}
        setActivetab={setActivetab}
      />
      <HeaderButton
        text='Pickup'
        btncolor='white'
        textColor='black'
        activeTab={activeTab}
        setActivetab={setActivetab}
      />

      {/* Headerbutton */}
    </View>
  );
};

export default HeaderTabs;

const HeaderButton = (props) => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab === props.text ? 'black' : 'white',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => props.setActivetab(props.text)}
    >
      <Text style={{ color: props.activeTab === props.text ? 'white' : 'black', fontSize: 15, fontWeight: '900' }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({});
