import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import welcome from '../../assets/welcome.png';

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
      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.textoBotao}>Avançar</Text>
      </TouchableOpacity>

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
    alignItems: 'center',
  },
  imagem: {
    width: 250,
    height: 250,
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
  botao: {
    borderRadius: 8,
    paddingVertical: 16,
    backgroundColor: '#098eaf',
    marginVertical: 30,
    alignItems: 'center'
  },
  textoBotao: {
    color: "white",
    fontWeight: 'bold'
  }

});

export default Welcome