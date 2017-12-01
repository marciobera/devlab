(function(){

	// Initialize Firebase
 	var config = {
	
	};
	firebase.initializeApp(config);

	angular
		.module('app', ['firebase'])
		.config(function ($firebaseRefProvider){
			$firebaseRefProvider.registerUrl({
				default: config.databaseURL,
				object: `${config.databaseURL}/angular/object`
			});
		})
		.factory('ObjectFactory', ObjectFactory)
		.controller('MyCtrl', MyCtrl);

		function ObjectFactory($firebaseObject, $firebaseRef){
			return $firebaseObject($firebaseRef.object);
		}

		function MyCtrl(ObjectFactory){
			this.object = ObjectFactory;
			this.sayHello = () => {
				return `Hello, ${this.object.name}`;
			}
		}

		const ctrl = new MyCtrl({ name: 'Alice' });
		const message = ctrl.sayHello();
		console.assert(message === 'Hello, Alice', `Expected: Hello, Alice - Actual: ${message}`);

}());