import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Locais() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Uma unidade perto de vc....</Text>

      <Text style={estilo.subtitulo}>Em Guarulhos:</Text>
      <View style={estilo.bloco}>
        <Text style={estilo.tituloBloco}>Cocaia</Text>
        <Text>Rua das Araras 34</Text>
        <Text>WhatsApp: 11 2055-8584</Text>
      </View>
      <View style={estilo.bloco}>
        <Text style={estilo.tituloBloco}>Pimentas</Text>
        <Text>Rua Profº Alvaro de Oliveira 85</Text>
        <Text>WhatsApp: 11 2055-9852</Text>
      </View>
      <View style={estilo.bloco}>
        <Text style={estilo.tituloBloco}>Vila Galvão</Text>
        <Text>Avenida Timoteo Penteado 121</Text>
        <Text>WhatsApp: 11 2055-0363</Text>
      </View>
      <View style={estilo.bloco}>
        <Text style={estilo.tituloBloco}>Jardim Maia</Text>
        <Text>Avenida Salgado Filho 03</Text>
        <Text>WhatsApp: 11 2055-7712</Text>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#ff748c",
    padding:20
  },
  titulo:{
    fontSize: 25,
    color:"#FBF5EF",
    marginTop:30,
    marginBottom: 20
  },
  bloco:{
backgroundColor:"#ffc0cb",
margin: 10,
padding:10,
borderRadius: 10
  },
  subtitulo:{
    fontWeight: 'bold',
    marginBottom:10,
    fontSize:25
  },
  tituloBloco:{
    textAlign:"center",
    marginBottom: 6,
    fontWeight: 'bold',
    fontSize:20
  }
});
