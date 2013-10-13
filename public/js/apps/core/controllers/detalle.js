'use strict';
var missingio = angular.module('missing-io.controllers');

missingio.controller('caseController', function ($scope,$routeParams,$location,profileService) {

 $scope.name = $routeParams.name;

 profileService.getByShortName($scope.name, function(data){
   if (data.since || data.since !== ""){
        data.formatedSince = moment(data.since).fromNow();
      }
      if (data.born || data.born !== ""){
        data.formatedBorn = moment(data.born).fromNow().replace("hace","");
      }
    $scope.activeProfile =  data;

    $scope.onDetail = true;
 })

});
