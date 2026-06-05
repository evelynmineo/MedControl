import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default function MedicinesScreen({
  medicamentos,
  historico,
  setHistorico
}) {

  const marcarComoTomado = (medicamento) => {

    const existe = historico.find(
      item => item.id === medicamento.id
    );

    if (existe) {
      alert('Medicamento já está no histórico');
      return;
    }

    setHistorico([
      ...historico,
      medicamento
    ]);

    alert('Medicamento enviado para o histórico');
  };

  return (
    <View style={styles.container}>

      {medicamentos.length === 0 ? (
        <Text>Nenhum medicamento cadastrado.</Text>
      ) : (
        <FlatList
          data={medicamentos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>

              <Text style={styles.title}>
                {item.nome}
              </Text>

              <Text>
                Dose: {item.dose}
              </Text>

              <Text>
                Horário: {item.horario}
              </Text>

              <TouchableOpacity
                style={styles.button}
                onPress={() => marcarComoTomado(item)}
              >
                <Text style={styles.buttonText}>
                  ✓ Tomado
                </Text>
              </TouchableOpacity>

            </View>
          )}
        />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  card: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    marginTop: 10,
    borderRadius: 8
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'
  }
});