'use strict';

angular.module('missing-io', ['missing-io.controllers', 'missing-io.services'])
.config(function ($routeProvider) {
  $routeProvider
  .when('/elegi/', {
    templateUrl: '/views/main.html',
    controller: 'mainController'
  })
  .when('/encontremos/:name', {
    templateUrl: '/views/detalle.html',
    controller: 'caseController'
  })
   .when('/banners/:name', {
    templateUrl: '/views/banners.html',
    controller: 'bannerController'
  })
  .when('/', {
    templateUrl: '/views/start.html',
    controller: 'startController'
  })
  .otherwise({
    redirectTo: '/'
  });
}).run(function ($rootScope) {

    moment().lang('es');
  });
