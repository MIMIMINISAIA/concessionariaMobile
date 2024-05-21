import React from 'react';
import { Text, View } from 'react-native';
import CadastroCarros from './src/CadastroCarros';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Screens/Home';
import Profile from './src/Screens/Profile';
import PesquisaProdutos from './src/Screens/PesquisarProduto';
import Footer from './src/Footer';
import { createStackNavigator } from '@react-navigation/stack';
import Listagem from './src/Screens/listagem';


const Stack = createStackNavigator();

function App(): JSX.Element{
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>

      <Stack.Screen name='Profile' component={CadastroCarros} options={{headerShown: false}}/>

      <Stack.Screen name='listagem' component={Listagem} options={{headerShown: false}}/>

      <Stack.Screen name='PesquisarProduto' component={PesquisaProdutos} options={{headerShown: false}}/>

    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;