// var x = document.getElementsByTagName("p");
// for(var i = 0; i < x.length; i++){
// 	console.log(x[i].innerHTML);
// }

function valida(){
document["form1"]["nome"].setCustomValidity("Preencha o campo nome!");
	var nome = document["form1"]["nome"];
	var email = document["form1"]["email"];
	var idade = document["form1"]["idade"];
	console.log(
			nome.checkValidity(),
			email.checkValidity(),
			idade.checkValidity()
			);
	return false;
	// if( nome.checkValidity() == false ){
		
	// }
}

// document.onkeydown = function(event){
// 	console.log(event.key);
// 	if(event.key == 'F2'){
// 		alert('Ganhou!');
// 	}
// }