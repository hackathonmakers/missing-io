'use strict';
var missingio = angular.module('missing-io.controllers');

missingio.controller('bannerController', function ($scope,$routeParams,$location,profileService) {
  moment().lang('es');
 $scope.name = $routeParams.name;

 profileService.getByShortName($scope.name, function(data){
    $scope.activeProfile =  data;

    $scope.onDetail = true;
 });


});
