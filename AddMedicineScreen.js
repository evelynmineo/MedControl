import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

export default function AddMedicineScreen({
  navigation,
  setMedicamentos
}) {
  const [nome, setNome] = useState('');
  const [dose, setDose] = useState('');
  const [horario, setHorario] = useState('');

  const salvar = () => {
    if (!nome || !dose || !horario) {
      alert('Preencha todos os campos');
      return;
    }

    const novoMedicamento = {
      id: Date.now().toString(),
      nome,
      dose,
      horario
    };

    setMedicamentos((listaAnterior) => [
      ...listaAnterior,
      novoMedicamento
    ]);

    setNome('');
    setDose('');
    setHorario('');

    alert('Medicamento cadastrado com sucesso!');

    navigation.navigate('Medicamentos');
  };

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Nome do medicamento"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Dosagem"
        value={dose}
        onChangeText={setDose}
      />

      <TextInput
        style={styles.input}
        placeholder="Horário"
        value={horario}
        onChangeText={setHorario}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={salvar}
      >
        <Text style={styles.text}>
          Salvar
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  input: {
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 8
  },
  button: {
    backgroundColor: '#1976d2',
    padding: 15,
    borderRadius: 8
  },
  text: {
    color: '#fff',
    textAlign: 'center'
  }
});
