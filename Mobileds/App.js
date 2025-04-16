import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm

// or any files within the Snack
import Hora_extra from './components/Hora_extra';
// import Simulador_pedagio from './components/Simulador_pedagio';
// import Consumo_energia from './components/Consumo_energia';
// import Tabuleiro from './components/Tabuleiro';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Hora_extra />
      {/* <Simulador_pedagio/>
      <Consumo_energia/>
      <Tabuleiro/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});
