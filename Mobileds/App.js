import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm

// or any files within the Snack
import Hora_extra from './components/Hora_extra';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Hora_extra />

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
