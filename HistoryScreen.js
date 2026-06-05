import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';

export default function HistoryScreen({
  historico
}) {

  return (
    <View style={styles.container}>

      {historico.length === 0 ? (
        <Text>Nenhum medicamento registrado.</Text>
      ) : (
        <FlatList
          data={historico}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.item}>
              ✓ {item.nome} - {item.dose} - {item.horario}
            </Text>
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
  item: {
    fontSize: 18,
    marginBottom: 15
  }
});