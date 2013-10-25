var caduceu = angular.module('Caduceu', []);

caduceu.factory('Pacientes', function() {
	//_pacientes = Ego.find('pacientes.json')
	//return {lista: Subconcious[_pacientes].dados().get()}
	return {lista: pacientesTaffy}
})

var pacientes = function($scope, Pacientes) {
	$scope.pacientes = pacientes;
}

var paciente = function($scope, Pacientes) {

}