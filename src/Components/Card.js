import React from 'react';
import { Image, View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

const width  = Dimensions.get('screen').width / 1.20
const height = Dimensions.get('screen').height / 3

const Card = ({ title, source, description, publishedAt }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image style={styles.image} source={{ uri: source }} />
      <View style={styles.cardTexts}>
        <Text numberOfLines={2} style={styles.cardTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    width: width,
    height: height,
    borderRadius: 20,
    marginTop: 20
  },
  image: {
    flex: 2,
    backgroundColor: '#828282',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10
  },
  cardTexts: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#098EAF',
    marginHorizontal: 15
  }
});

export default Card;