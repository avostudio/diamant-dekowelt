angular.module('Diamant-Dekowelt', [
	'ui.router',
	'ui.bootstrap'
	// TODO: conside adding cg-busy (angular-busy)
]).
config(function mainConfig($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.when('', '/');
	$stateProvider.state('root', {
		abstract: true,
		url: '',
		views: {
			'@': {
				templateUrl: '../layout.tpl.html'
			}	
		}
	});
});