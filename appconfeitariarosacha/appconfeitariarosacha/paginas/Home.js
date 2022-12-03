import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={estilo.container}>
      <Text style={estilo.letreiro}> Confeitaria Rosa Chá </Text>
      <Image
        style={estilo.img}
        source={require('../assets/cake-pops-g4178a2f51_640.jpg')}
      />
      <Text style={estilo.letreiro}> Adoçando o seu estilo de vida </Text>
      <TouchableOpacity style={estilo.button} onPress={() => navigation.navigate('Cardapio')}>
        <Text> Cardapio </Text>
      </TouchableOpacity>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff748c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letreiro: {
    fontSize: 25,
    color: '#FBF5EF',
    textAlign: 'center',
    marginTop: 10,
  },
  img: {
    width: 250,
    height: 200,
    borderRadius: 40,
    marginTop: 55,
  },
  button: {
    backgroundColor: '#ff0065',
    margin: 50,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFFFFF"
  },
});
