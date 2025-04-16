import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tabuleiro de Xadrez 4x4</Text>
      <View style={styles.tabuleiro}>
        <View style={styles.linha}>
          <View style={styles.branco} />
          <View style={styles.preto} />
          <View style={styles.branco} />
          <View style={styles.preto} />
        </View>
        <View style={styles.linha}>
          <View style={styles.preto} />
          <View style={styles.branco} />
          <View style={styles.preto} />
          <View style={styles.branco} />
        </View>
        <View style={styles.linha}>
          <View style={styles.branco} />
          <View style={styles.preto} />
          <View style={styles.branco} />
          <View style={styles.preto} />
        </View>
        <View style={styles.linha}>
          <View style={styles.preto} />
          <View style={styles.branco} />
          <View style={styles.preto} />
          <View style={styles.branco} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ 
    alignItems: 'center',
    marginTop: 50 
},
  titulo:{
    fontSize: 20,
    marginBottom: 20 
},
  tabuleiro:{
    borderWidth: 1
 },
  linha:{
    flexDirection: 'row'
 },
  branco:{
    width: 60,
    height: 60,
    backgroundColor: 'white' 
},
  preto:{
    width: 60, 
    height: 60,
    backgroundColor: 'black'
 }
});