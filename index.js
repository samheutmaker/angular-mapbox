	var app = angular.module('myApp', []);

	app.directive('mapbox', function() {
		return {
			restrict: 'AE',
			scope: {
				markers: '=markers',
				center: '=center',
				activeMarkerId: '=activeMarkerId'
			},
			link: function(scope, element, attr) {
				L.mapbox.accessToken =
					'pk.eyJ1Ijoic2FtaGV1dG1ha2VyIiwiYSI6ImNpa25qcXV3eTBzcGJ2a2ttbnV6OXJtNzEifQ.8faX-FF4gPTe8WFrf24reg';
				scope.map = L.mapbox.map(element[0], 'mapbox.emerald');
				// Controls
				new L.Control.Zoom({
					position: 'topright'
				}).addTo(scope.map);

			},
			controller: ['$scope',
				function($scope) {
					console.log($scope);
				}
			]
		}
	});