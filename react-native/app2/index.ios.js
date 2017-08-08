//Import
import React from 'react';
import { Text, AppRegistry, View, Image, TouchableOpacity, Alert } from 'react-native';

//Formatações
const Estilos = {
	principal: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	botao: {
		backgroundColor: '#538530',
		paddingVertical: 10,
		paddingHorizontal: 40,
		marginTop: 20
	},
	textoBotao: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold'
	}
};

const gerarNovaFrase = () => {
	var numeroAleatorio = Math.random();
	numeroAleatorio = Math.floor(numeroAleatorio * 16);

	var frases = Array();
	frases.push('Se a caminhada está difícil, é porque você está no caminho certo.');
	frases.push('Seja humilde para admitir seus erros, inteligente para aprender com eles e maduro para corrigi-los.');
	frases.push('Seja você mesmo, todos os outros já existem.');
	frases.push('Se eu não mudar o que faço hoje, todos os amanhãs serão iguais a ontem.');
	frases.push('Eu ainda não cheguei lá, mas estou mais perto do que ontem.');
	frases.push('Superar não é escolha, é necessidade.');
	frases.push('Que a vontade de ser feliz seja sempre maior que o medo de se machucar.');
	frases.push('Seja a mudança que você quer ver no mundo.');
	frases.push('O seu sorriso pode mudar o dia de alguém.');
	frases.push('Nunca deixe de lutar por medo de errar ou de se machucar. As feridas com o tempo se curam, mas as oportunidades não voltam.');
	frases.push('Não há dias cinzentos para quem sonha colorido.');
	frases.push('Não fique esperando o futuro para ser feliz, faça do presente a sua alegria.');
	frases.push('Colecione momentos, não coisas.');
	frases.push('Comece onde você está, use o que você tem e faça o que você pode.');
	frases.push('Você não é derrotado quando perde. Você é derrotado quando desiste.');
	frases.push('Viver não é esperar a tempestade passar. É aprender a dançar na chuva.');

	var fraseEscolhida = frases[numeroAleatorio];

	Alert.alert(fraseEscolhida);
}

//Criar o componente
const App = () => {
	const { principal, botao, textoBotao } = Estilos;
  return (
  	<View style={ principal } >
  		<Image source={ require('./imgs/logo.png') } />
  		
  		<TouchableOpacity
  			onPress={gerarNovaFrase}
  			style={ botao }
  			>
  			<Text style={ textoBotao} >Nova frase</Text>
  		</TouchableOpacity>
    </View>
    );
};

//Renderizar para o dispositivo
AppRegistry.registerComponent('app2', () => App);