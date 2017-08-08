//Import
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';

//Formatações
const Estilos = {
	estiloTexto: {
		fontSize: 40,
		backgroundColor: '#08509B',
		height: 60,

	},
	estiloTexto2: {
		fontSize: 40,
		backgroundColor: '#2A48FA',
		height: 60

	},
	estiloView: {
		backgroundColor: 'skyblue',
		height: '100%',
		//flex-start, center, flex-end
		justifyContent: 'space-around',
		alignItems: 'stretch',
		flexDirection: 'column'
	}
};

//Criar o componente
const App = () => {
	const { estiloTexto, estiloTexto2, estiloView } = Estilos;
  return (
  	<View style={ estiloView } >
      <Text style={ Estilos.estiloTexto }>A</Text>
      <Text style={ Estilos.estiloTexto2 }>B</Text>
      <Text style={ Estilos.estiloTexto }>C</Text>
    </View>
    );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);