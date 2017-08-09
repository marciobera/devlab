/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

class app3 extends Component{

  constructor(props) {
    super(props);
    
    this.state = {
      escolhaUsuario: '', 
      escolhaComputador: '', 
      resultado: ''
    };
  }

  jokenpo(escolhaUsuario){

    //gera número aleatório (0, 1, 2)
    var numAleatorio = Math.floor(Math.random() * 3);

    var escolhaComputador = '';

    switch(numAleatorio){
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
    }

    var resultado = '';

    if(escolhaComputador == 'pedra'){
      if(escolhaUsuario == 'pedra'){
        resultado = 'Empate';
      }
      else if(escolhaUsuario == 'papel'){
        resultado = 'Usuário ganhou';
      }else{
        resultado = 'Computador ganhou';
      }
    }else
    if(escolhaComputador == 'papel'){
      if(escolhaUsuario == 'papel'){
        resultado = 'Empate';
      }
      else if(escolhaUsuario == 'tesoura'){
        resultado = 'Usuário ganhou';
      }else{
        resultado = 'Computador ganhou';
      }
    }else{
      if(escolhaUsuario == 'tesoura'){
        resultado = 'Empate';
      }
      else if(escolhaUsuario == 'pedra'){
        resultado = 'Usuário ganhou';
      }else{
        resultado = 'Computador ganhou';
      }
    }

    this.setState({
      escolhaUsuario : escolhaUsuario, 
      escolhaComputador : escolhaComputador, 
      resultado : resultado
    });

  }

  render(){
    return (
      <View>
        <Text>Escolha do Computador: {this.state.escolhaComputador}</Text>
        <Text>Escolha do Usuário: {this.state.escolhaUsuario}</Text>
        <Text>Resultado: {this.state.resultado}</Text>
        <Button
          title='pedra' onPress={() => { this.jokenpo('pedra')}}
          />
          <Button
          title='papel' onPress={() => { this.jokenpo('papel')}}
          />
          <Button
          title='tesoura' onPress={() => { this.jokenpo('tesoura')}}
          />
      </View>
      );
  }

}

AppRegistry.registerComponent('app3', () => app3);
