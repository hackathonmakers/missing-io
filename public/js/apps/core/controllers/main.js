'use strict';
var missingio = angular.module('missing-io.controllers', []);

missingio.controller('mainController', function ($scope,$location,profileService) {

  $scope.onSearch =false;
  $scope.onDetail = false;

  $scope.hidemain = function(){
    return $scope.onSearch || $scope.onDetail;
  };




  $scope.backToMain = function(){
    $scope.onSearch =false;
    $scope.onDetail = false;

  }
  $scope.showList = function(){
    $scope.onSearch = true;
    $scope.onDetail = false;
    profileService.getRandom(10, function(data){
        $scope.list = data;
    });
  }
  $scope.searchby = function(){
    $scope.onSearch = true;
    $scope.onDetail = false;
    profileService.getFrom($scope.city, function(data){
        $scope.list = data;
    });
  }

  $scope.showProfile = function(profile){
    $scope.activeProfile = profile;
    $scope.onSearch = false;
    $scope.onDetail = true;
  }

});
