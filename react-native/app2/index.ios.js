//Import
import React from 'react';
import { Text, AppRegistry, View, TouchableOpacity } from 'react-native';

//Formatações
const Estilos = {
	principal: {
		paddingTop:40
	},
	botao: {
		backgroundColor: '#48BBEC',
		padding: 10,
		borderColor: '#1d8eb8',
		borderWidth: 1,
		borderRadius: 8,
		margin: 5,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.4
	},
	textoBotao: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
		alignSelf: 'center'
	}

};
const botaoPressionado = () => {
	alert('Botão pressionado!');
};
//Criar o componente
const App = () => {
	const { principal, botao, textoBotao } = Estilos;
  return (
  	<View style={ principal } >
  		<TouchableOpacity style={botao}>
  			<Text style={textoBotao}>Clique aqui</Text> 
  		</TouchableOpacity>
    </View>
    );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);