import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

export default function App() {
  const [consumo, setConsumo] = useState('');
  const [bandeira, setBandeira] = useState('');
  const [resultado, setResultado] = useState('');

  function calcular() {
    let valor = 0;
    if (bandeira === 'Verde') valor = 0.50;
    else if (bandeira === 'Amarela') valor = 0.55;
    else if (bandeira === 'Vermelha1') valor = 0.60;
    else if (bandeira === 'Vermelha2') valor = 0.70;
    else {
      setResultado('Bandeira inválida');
      return;
    }

    let total = parseFloat(consumo) * valor;
    setResultado('Total: R$ ' + total.toFixed(2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conta de Luz</Text>
      <View>
        <Image style={styles.image} source={require('../assets/energia.jpg')} />
      </View>
      <Text>Digite: Verde, Amarela, Vermelha1 ou Vermelha2</Text>
      <TextInput placeholder="Consumo em kWh" keyboardType="numeric" style={styles.input} onChangeText={setConsumo} />
      <TextInput placeholder="Bandeira tarifária" style={styles.input} onChangeText={setBandeira} />
      <Button title="Calcular" color= "orange" onPress={calcular} />
      <Text>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 20, 
    marginTop: 50 
},
  titulo:{
    fontSize: 20,
    marginBottom: 10 
},
  input:{
    borderWidth: 1,
    marginBottom: 10, 
    padding: 8 
},
  imagem:{
    width: 100,
    height: 100,
    marginBottom: 10
}
});