import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

export default class Itens extends Component {

  render() {
    return (
      <View style={styles.item}>
      	<View style={styles.foto}>
	      <Image style={styles.imagem} source={{ uri: this.props.item.foto }} />
	    </View>
	    <View style={styles.detalhesItem}>
	      <Text style={styles.txtTitulo}>{ this.props.item.titulo }</Text>
	      <Text style={styles.txtValor}>Valor: R$ { this.props.item.valor }</Text>
	      <Text style={styles.txtDetalhes}>Local: { this.props.item.local_anuncio }</Text>
	      <Text style={styles.txtDetalhes}>Cadastrado em { this.props.item.data_publicacao }</Text>
	    </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	item: {
		padding:10,
		margin:10,
		borderWidth: 0.5,
		borderColor: '#999',
		flexDirection: 'row',
		backgroundColor: '#FFF'
	},
	imagem: {
		width: 100,
		height: 100
	},
	foto: {
		width: 102,
		height: 102
	},
	detalhesItem: {
		marginLeft: 20,
		flex: 1
	},
	txtTitulo: {
		fontSize: 18,
		color: 'blue',
		marginBottom: 5
	},
	txtValor: {
		fontSize: 16,
		fontWeight: 'bold'
	},
	txtDetalhes: {
		fontSize: 16
	}
});
