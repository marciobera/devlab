
// var obj = new Object();
	// obj.name = "Marcio";
	// obj.lastName = "Bera";
	// obj.age = 28;
	// obj.year = 1988;
	var obj = {
		name: "Marcio",
		lastName: "Bera",
		team: "Corinthians",
		age: 28,
		year: 1988,
		series: ["Breaking Bad","GOT", "Peppa Pig"],
		married: function(){
			return true;
		},
		localizacao: [{
			cidade:'maringá',
			estado: "PR"
		},{
			cidade:'Vancoucer',
			estado: "BC"
		}]

	};
	obj.series[90] = "Better Call Saul";
// console.log(obj.localizacao);

	var arr = ["Teste", "Teste 2", {carro: 'GM Cruze'}];
	arr[3] = "Teste 3";
	// console.log(arr[2].carro);

	String.prototype.imprimirReverso = function(){
		var name = "";
		for(var i = this.length - 1; i >= 0; i--){
			name += this[i];
		}
		return name;

	}
	Object.prototype.menosUm = function(){
		return this.carro;
	}

	// console.log( "Marcio".imprimirReverso() );
	// console.log( {carro: 'Teste'}.menosUm() );
	// alert("UEM OHNOS".imprimirReverso());


	// var NomeDela = function(){
	// 	alert('Sandra Rosa Madalena');
	// }

	// NomeDela();


	function add(a, b){
		console.log(arguments.length);
	}
	add("at",12);



