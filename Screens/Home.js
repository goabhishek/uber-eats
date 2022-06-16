import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HeaderTabs from '../component/HeaderTabs';
import SearchBar from '../component/SearchBar';
import Categories from '../component/Categories';
import RestaurantItem from '../component/RestaurantItem';

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#825185' }}>
      <View style={{ backgroundColor: 'gray', padding: 5 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
