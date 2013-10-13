'use strict';
var missingio = angular.module('missing-io.controllers');

missingio.controller('caseController', function ($scope,$routeParams,$location,profileService) {
  moment().lang('es');
 $scope.name = $routeParams.name;

 profileService.getByShortName($scope.name, function(data){
   if (data.since || data.since !== ""){
        data.formatedSince = moment(data.since,"DD/MM/YYYY").fromNow();
      }
      if (data.born || data.born !== ""){
        data.formatedBorn = moment(data.born,"DD/MM/YYYY").fromNow().replace("hace","");
      }
    $scope.activeProfile =  data;

    $scope.onDetail = true;
 })

});
