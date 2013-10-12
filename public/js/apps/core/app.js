'use strict';

angular.module('missing-io', ['missing-io.controllers', 'missing-io.services'])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/views/main.html',
    controller: 'mainController'
  })
  .when('/caso/', {
    templateUrl: '/views/detalle.html',
    controller: 'caseController'
  })
  .otherwise({
    redirectTo: '/'
  });
});
