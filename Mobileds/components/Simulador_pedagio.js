import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

export default function App() {
  const [tipo, setTipo] = useState('');
  const [km, setKm] = useState('');
  const [resultado, setResultado] = useState('');

  function calcular() {
    let preco = 0;
    if (tipo === 'Carro') preco = 0.10;
    else if (tipo === 'Moto') preco = 0.05;
    else if (tipo === 'Caminhao') preco = 0.15;
    else {
      setResultado('Tipo inválido');
      return;
    }

    let distancia = parseFloat(km);
    let total = distancia * preco;

    setResultado('Total: R$ ' + total.toFixed(2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Simulador de Pedágio</Text>
      <View>
        <Image style={styles.image} source={require('../assets/pedagio.jpg')} />
      </View>
      <Text>Digite: Carro, Moto ou Caminhao</Text>
      <TextInput placeholder="Tipo de veículo" style={styles.input} onChangeText={setTipo} />
      <TextInput placeholder="Distância (km)" keyboardType="numeric" style={styles.input} onChangeText={setKm} />
      <Button title="Calcular" color="gray" onPress={calcular} />
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
    marginBottom: 10, 
    
},
  input:{
    borderWidth: 1,
     marginBottom: 10,
      padding: 8 
    },
  imagem:{ 
    width: 100,
    height: 100, 
    marginBottom: 10,
    

}
});

