import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

export default function App() {
  const [salarioBase, setSalarioBase] = useState('');
  const [horas, setHoras] = useState('');
  const [resultado, setResultado] = useState('');

  function calcularSalario() {
    let salario = parseFloat(salarioBase);
    let horasTrabalhadas = parseFloat(horas);
    let valorHora = salario / 160;
    let total = salario;

    if (horasTrabalhadas > 160) {
      let extras = horasTrabalhadas - 160;
      total = salario + (extras * valorHora * 1.5);
    }

    setResultado('Salário final: R$ ' + total.toFixed(2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Salário Hora Extra</Text>
      <View>
        <Image style={styles.image} source={require('../assets/funcionario.jpg')} />
      </View>
      <TextInput placeholder="Salário base" keyboardType="numeric" style={styles.input} onChangeText={setSalarioBase} />
      <TextInput placeholder="Horas trabalhadas" keyboardType="numeric" style={styles.input} onChangeText={setHoras} />
      <Button title="Calcular" color= "green" onPress={calcularSalario} />
      <Text>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ 
    padding: 20, 
    marginTop: 50,
 
   },
  titulo:{ 
    fontSize: 20, 
    marginBottom: 10,
     
  },
  input:{ 
    borderWidth: 1,
    marginBottom: 10, 
    padding: 8,
    
  },
  imagem:{ 
    width: 100, 
    height: 100, 
    marginBottom: 10
   } 
});