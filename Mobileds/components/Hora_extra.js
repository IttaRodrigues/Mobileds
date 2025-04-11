import { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Image, Button, StyleSheet } from 'react-native';

const Hora_extra = () => {
  const [salario, setsalario] = useState(0);
  const [horas, sethoras] = useState(0);
  const [horaextra, sethoraextra] = useState(0);
  const [resultadohoras, setResultadohoras] = useState(0);
  const [resultado, setResultado] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Hora_extra</Text>
          <View>
            <Image style={styles.image} source={require('..')} />
          </View>
        <Text>Digite o salario: </Text>
        <TextInput
          value={salario}
          onChangeText={text => setsalario(text)}
          placeholder="Salário"
          style={styles.input}
        />
        
        <Text>Digite as horas</Text>
        <TextInput
          value={horas}
          onChangeText={text => sethoras(text)}
          placeholder="Digite as horas"
          style={styles.input}
        />

          <Text>Digite as horas extra</Text>
        <TextInput
          value={horaextra}
          onChangeText={text => sethoraextra(text)}
          placeholder="Digite as horas extras"
          style={styles.input}
        />

        <Button
          title="Salário final"
          color="green"
          onPress={() => setResultado(Number(salario) / Number(horas))}
        />

        <Button
          title="Salário final"
          color="green"
          onPress={() => setResultado(Number(resultadohoras) * Number(10))}
        />

          <Button
          title="Salário final"
          color="green"
          onPress={() => setResultado(Number(resultadofinal) + Number(0.5))}
        />
       
      <Text>Resultado: {resultado}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blanchedalmond',
    padding: 20,
  },
  paragraph: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 3,
    marginBottom: 12,
    paddingLeft: 8,
    width: 200,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default Hora_extra;
