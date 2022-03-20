import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ onPress, Texto }) => {
  return (
    <TouchableOpacity style={styles.botao} onPress={ onPress }>
      <Text style={styles.textoBotao}>{ Texto }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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
})

export default Button;