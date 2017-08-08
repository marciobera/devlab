//Import
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';

//Formatações
const Estilos = {
	estiloTexto: {
		fontSize: 40,
		backgroundColor: '#08509B',
		height: 60,
		width:60

	},
	estiloView: {
		backgroundColor: 'skyblue',
		height:300,
		//flex-start, center, flex-end
		justifyContent: 'center',
		alignItems: 'center'
	}
};

//Criar o componente
const App = () => {
	const { estiloTexto, estiloView } = Estilos;
  return (
  	<View style={ estiloView } >
      <Text style={ Estilos.estiloTexto }></Text>
    </View>
    );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);