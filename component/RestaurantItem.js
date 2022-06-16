import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RestaurantItem = () => {
  return (
    <View>
      <RestourentImage />
      <Restourentinfo />
    </View>
  );
};

export default RestaurantItem;

const RestourentImage = () => (
  <>
    <Image
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeZ1Or3vK2d4QTtZQSgG_NV6Owcqt0fIyX7g&usqp=CAU',
      }}
      style={{
        width: '100%',
        height: 180,
      }}
    />
    <TouchableOpacity style={{ position: 'absolute', right: 20, top: 10 }}>
      <MaterialCommunityIcons name='heart-outline' size={25} color='#000' />
    </TouchableOpacity>
  </>
);

const Restourentinfo = () => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
    <View>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Farmhouse Kitchen Thai Cisine</Text>
      <Text style={{ fontSize: 13, color: 'gray' }}>30-45 min</Text>
    </View>
    <Text style={{ backgroundColor: 'eee', height: 30, width: 30 }}>4.5</Text>
  </View>
);

const styles = StyleSheet.create({});
