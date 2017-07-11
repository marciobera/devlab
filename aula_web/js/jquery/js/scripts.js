$(function(){

	$("#cep").mask('00000-000');
	$('#busca').addClass('teste');
	$('#busca').attr('time', 'cor');

	
	$("#busca").on('click', function(e){

		// var root = 'https://jsonplaceholder.typicode.com/posts';

		// $.ajax({
		//   url: root,
		//   method: 'GET'
		// }).then(function(resposta){
			
		// 	for(noticia in resposta){
		// 		$("#noticias").append('<li>' + resposta[noticia].title + '</li>');
		// 	}

		// });
		var cep = $("#cep").val();

		var buscaCep = "http://viacep.com.br/ws/"+ cep +"/json";

		$.get(buscaCep, function(sucesso){
			$("#endereco").val(sucesso.logradouro);
			$("#cidade").val(sucesso.localidade);
			$("#estado").val(sucesso.uf);
			$("#bairro").val(sucesso.bairro);
		});

	});

});