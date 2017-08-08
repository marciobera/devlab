//Import
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Formatações
const Estilos = {
	estiloTexto: {
		fontSize: 30,
		backgroundColor: '#08509B',
		color: '#fff',
		padding: 5,
		paddingLeft: 10,
		paddingTop: 20,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 5},
		shadowOpacity: 0.5,
		shadowRadius: 10,
		textAlign: 'center',
		// fontStyle: 'italico',
		fontWeight: '600'
	}
};

//Criar o componente
const App = () => {
  return (
      <Text style={ Estilos.estiloTexto }>Frases do Dia</Text>
    );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);