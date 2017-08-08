//Import
import React from 'react';
import { Text, AppRegistry, View, Button } from 'react-native';

//Formatações
const Estilos = {
	principal: {
		paddingTop:40
	}
};
const botaoPressionado = () => {
	alert('Botão pressionado!');
};
//Criar o componente
const App = () => {
	const { principal } = Estilos;
  return (
  	<View style={ principal } >
      <Button 
      	onPress={botaoPressionado}
      	title="Clique aqui"
      	color="#841584"
      	acessabilityLabel="Clique aqui para abrir as notícias"
      /> 
    </View>
    );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);