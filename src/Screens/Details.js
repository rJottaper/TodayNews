import react from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

function Details({ route }) {

  const { title, source, description, publishedAt  } = route.params;
  return (
    <SafeAreaView>
      <ScrollView style={{ paddingHorizontal: 15}}>
      <Text style={styles.newsStory}>News Story</Text>
        <View style={styles.containerImage}>
          <Image style={styles.image}source={{ uri: source }} />
        </View>
        <Text style={styles.publishedAt}>{ publishedAt }</Text>
        <Text style={styles.title}>{ title }</Text>
        <Text style={styles.description}>{ description }</Text>
        </ScrollView>
      </SafeAreaView>

);  
}

const styles = StyleSheet.create({
  newsStory: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 15,
    color: '#098EAF'
  },
  containerImage:{
    width: '100%',
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10
  },
  publishedAt: {
    fontSize: 10,
    paddingVertical: 15,
    color: '#098EAF'

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20
  },
  description: {
    textAlign: 'justify',
    lineHeight: 22
  }

})

export default Details;