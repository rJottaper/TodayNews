import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';

import HeaderNavigation from '../Components/HeaderNavigation';
import Card from '../Components/Card';

import { GetItems } from '../Services/CallApi';
import API from '../Services/API';

const Home = () => {
  const [news, setNews] = useState([]);

  // Request API
  const APINews = async () => {
    try {
      const response = await API.get('top-headlines?country=br&category=business&apiKey=9c567fab8f7a4b9b9693e9f9637fb243')
      setNews(response.data.articles);
    } catch (e) {
      console.log(e);
    };
  };

  useEffect(() => {
    APINews();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
        <HeaderNavigation headerTitle="News" />
      <ScrollView style={{ flex: 1, backgroundColor: '#098EAF', borderTopStartRadius: 20, borderTopEndRadius: 20 }}>
        <View style={styles.content}>
          <Text style={styles.title}>Top News in the World</Text>
          <Text style={styles.subtitle}>Fast and Pratice</Text>
          <View>
            <FlatList 
              data={news}
              keyExtractor={(item, index) => 'key' + index}
              renderItem={({ item }) => <Card title={item.title} source={item.urlToImage} description={item.description} publishedAt={item.publishedAt} />}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#098EAF',
    
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF'
  }
});

export default Home;