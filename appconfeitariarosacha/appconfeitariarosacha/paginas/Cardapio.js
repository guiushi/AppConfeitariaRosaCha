import * as React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

//páginas das pizzas...

const Stack = createStackNavigator();

export default function Cardapio(){
  return(

    <View style={estilo.container}>
      <Text style={estilo.letreiro}> Cardapio</Text>

    <ScrollView>
      <View>
      <Text style={estilo.letreiro}> Muffin Tarte Cake </Text>
      <Image style={estilo.img} source={require("../assets/muffin-gf11179d21_1280.jpg")} />
      </View>

      <View>
      <Text style={estilo.letreiro}> Strawberry Cheesecake </Text>
      <Image style={estilo.img} source={require("../assets/cake-ge7242dcad_1280.jpg")} />
      </View>

      <View>
      <Text style={estilo.letreiro}> Torta de Frutas </Text>
      <Image style={estilo.img} source={require("../assets/torta_frutas.jpg")} />
      </View>

      <View>
      <Text style={estilo.letreiro}> Churros Milkway </Text>
      <Image style={estilo.img} source={require("../assets/churros-gada860c94_1280.jpg")} />
      </View>

      <View>
      <Text style={estilo.letreiro}> Especial Dia dos Namorados </Text>
      <Image style={estilo.img} source={require("../assets/valentines-day-g787917648_1280.jpg")} />
      </View>

      <View style={estilo.espaco}>
      <Text style={estilo.letreiro}> Lavender Macarons </Text>
      <Image style={estilo.img} source={require("../assets/macarons-gcf3c6b4e2_1280.jpg")} />
      </View>
      
    </ScrollView>

    </View>

  );
}

const estilo = StyleSheet.create({
  container:{
    flex:1,
    alignContent:"center",
    alignItems: "center",
    backgroundColor: "#ff748c"
  },
  letreiro:{
    fontSize:20,
    textAlign:"center",
    marginTop:25,
    paddingBottom: 20
  },
  img:{
    width:250,
    height:150,
    borderRadius:10
  },
  espaco:{
    marginBottom: 30
  }
});