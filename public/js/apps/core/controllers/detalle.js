'use strict';
var missingio = angular.module('missing-io.controllers');

missingio.controller('caseController', function ($scope,$routeParams,$location,profileService) {

 $scope.name = $routeParams.name;

 profileService.$routeParams($scope.name, function(p){
    $scope.activeProfile =  p;
 })

});
