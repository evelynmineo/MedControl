import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Controle de Medicamentos
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Cadastrar')}
      >
        <Text style={styles.text}>Cadastrar Medicamento</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Medicamentos')}
      >
        <Text style={styles.text}>Ver Medicamentos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Historico')}
      >
        <Text style={styles.text}>Histórico</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    padding:20
  },
  title:{
    fontSize:28,
    fontWeight:'bold',
    marginBottom:30,
    textAlign:'center'
  },
  button:{
    backgroundColor:'#1976d2',
    padding:15,
    marginBottom:15,
    borderRadius:8
  },
  text:{
    color:'#fff',
    textAlign:'center'
  }
});