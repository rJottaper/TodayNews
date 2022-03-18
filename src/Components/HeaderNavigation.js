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
    height: 65,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 22,
    color: '#098EAF',
    borderWidth: 1,
    borderColor: '#098EAF',
    padding: 5
  }
});

export default HeaderNavigation;