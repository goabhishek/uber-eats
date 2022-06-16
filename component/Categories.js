import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Cata = [
  {
    image: require('../assets/images/shopping-bag.png'),
    text: 'Pickup',
  },
  {
    image: require('../assets/images/soft-drink.png'),
    text: 'Soft Drinks',
  },
  {
    image: require('../assets/images/bread.png'),
    text: 'Bekery Items',
  },
  {
    image: require('../assets/images/fast-food.png'),
    text: 'Fast-food',
  },
  {
    image: require('../assets/images/deals.png'),
    text: 'Deals',
  },
  {
    image: require('../assets/images/coffee.png'),
    text: 'Coffee & Tea',
  },
  {
    image: require('../assets/images/desserts.png'),
    text: 'Desserts',
  },
];

const Categories = () => {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Cata.map((item, index) => (
          <View key={index} style={{ alignItems: 'center', marginRight: 30 }}>
            <Image source={item.image} style={{ width: 50, height: 40, resizeMode: 'contain' }} />
            <Text style={{ fontSize: 13, fontWeight: '900' }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});