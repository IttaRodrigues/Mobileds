import { Text, SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
      Crie um aplicativo que receba:
      Salário base do funcionário
      Quantidade de horas trabalhadas no mês
O sistema deve calcular o salário final considerando que:
     A jornada normal é de 160 horas/mês
     Horas acima de 160 são consideradas hora extra e pagas com acréscimo de 50% sobre o valor da hora normal
Exemplo: 
      Salário base: R$ 2.000,00
      Horas trabalhadas: 170
      Salário final: R$ 2.187,50


      





      </Text>
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