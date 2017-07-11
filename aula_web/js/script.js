/*alert("Hello Mundo!");
console.log("Hellow!");*/
var x = (100 + 50) * 3;
// console.log( typeof x);
x = "010";
var y = 1.3 + parseInt(x);
//console.log(Math.round(y));
x = "1";
x = parseInt(x);

// console.log(isNaN(x));
//console.log(typeof (100+23).toString());
var texto  = 'Olá, meu nome é "TOM"';
texto = {nome: "teste", sobrenome: "ando", length: 2};
// alert(texto.length);
var nome = "Jonh";
var nomeB = new String("Leitão");
// console.log(typeof nome, nomeB.length);

// if( 1 > 10){
// 	alert('Acerto miseravi');
// }else if(1 === 10){
// 	alert('Try again');
// }
// else{
// 	alert('errouu');
// }
//alert('10' == 10);
var i = 1;
while(i <= 3){
	// alert('Errou ' + i);
	i++;
}

var cars = ['BMW', 40, 'WMB', 'MMW'];
// for(i = 0; i < cars.length; i++){
// 	console.log('Carro ' + i + ': '+ cars[i]);
// }
var text = "";
var person = { fname : "John", lname : "Doe", age : 25 }; 
// for (x in person) {
//     text += " " + person[x];
// }
for(x in cars){
	alert(cars[x]);
}
console.log(text);

