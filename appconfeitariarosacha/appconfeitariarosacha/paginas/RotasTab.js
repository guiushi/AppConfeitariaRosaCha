import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Home from './Home';
import Locais from './Locais';
import Cardapio from './Cardapio';

const Tab = createBottomTabNavigator();

export default function RotasTab(){
  return(
      <Tab.Navigator initialRouteName="Home" tabBarOptions={{activeTintColor: '#ff748c',}} >
       

        <Tab.Screen 
        name="Locais"
        component={Locais}
        options={{tabBarLabel:'Locais', tabBarIcon:({color,size})=> (
          <MaterialCommunityIcons name="circle-slice-7" color={color} size={size}/>
        ),
        }}
         />

          <Tab.Screen 
        name="Home"
        component={Home}
        options={{tabBarLabel:'Home', tabBarIcon:({color,size})=> (
          <MaterialCommunityIcons name="home-circle" color={color} size={size}/>
        ),
        }}
         />

        <Tab.Screen 
        name="Cardapio"
        component={Cardapio}
        options={{tabBarLabel:'Cardapio', tabBarIcon:({color,size})=> (
          <MaterialCommunityIcons name="circle-slice-7" color={color} size={size}/>
        ),
        }}
         />

      </Tab.Navigator>


  );

}