import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, StyleSheet, Image, View } from 'react-native';
import welcome from '../../assets/welcome.png';
import Button from '../Components/Button';

const Welcome = () => {
  const navigation = useNavigation() 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.divImagem}>
        <Image source={ welcome } style={styles.imagem}/>
      </View>
      <View style={styles.detalhes}>
        <Text style={styles.bemVindo}>Bem vindo ao TodayNews</Text>
        <Text style={styles.descricao}>Aqui você tem acesso a notícias em tempo real</Text>
        <Button onPress={() => navigation.navigate('Home')} Texto="Avançar"/>
      </View>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: 'center'
  },
  divImagem: {
    width: '100%',
    height: 250,
    alignItems: 'center',
  },
  imagem: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  detalhes:{
    paddingHorizontal: 30
  },
  bemVindo: {
    fontSize:36,
    marginVertical: 20,

  },
  descricao: {
    marginVertical: 5
  },

});

export default Welcome