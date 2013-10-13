'use strict';
var missingio = angular.module('missing-io.controllers');

missingio.controller('startController', function ($scope,$location,profileService) {

  $scope.count = "?";
  profileService.getCount(function(data){
    $scope.count = data;
  });


});
