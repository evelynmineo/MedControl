import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AddMedicineScreen from './screens/AddMedicineScreen';
import MedicinesScreen from './screens/MedicinesScreen';
import HistoryScreen from './screens/HistoryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [medicamentos, setMedicamentos] = useState([]);
  const [historico, setHistorico] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen name="Cadastrar">
          {(props) => (
            <AddMedicineScreen
              {...props}
              medicamentos={medicamentos}
              setMedicamentos={setMedicamentos}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Medicamentos">
          {(props) => (
            <MedicinesScreen
              {...props}
              medicamentos={medicamentos}
              historico={historico}
              setHistorico={setHistorico}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Historico">
          {(props) => (
            <HistoryScreen
              {...props}
              historico={historico}
            />
          )}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}