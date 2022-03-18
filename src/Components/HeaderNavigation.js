import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderNavigation = ({ headerTitle }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{headerTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 100,
    backgroundColor: '#191970'
  },
  headerTitle: {

  }
});

export default HeaderNavigation;