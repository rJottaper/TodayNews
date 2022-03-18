import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

import HeaderNavigation from '../Components/HeaderNavigation';

const Home = () => {
  return (
    <SafeAreaView s tyle={styles.container}>
      <HeaderNavigation headerTitle="News" />
      <Text>HELLO</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Home;