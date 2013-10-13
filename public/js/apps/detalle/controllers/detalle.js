'use strict';
var missingio = angular.module('missing-io.controllers',[]);

missingio.controller('caseController', function ($scope,$routeParams,$location,profileService) {

var profile = $scope.profile;
  if (profile.since || profile.since !== ""){
        profile.formatedSince = moment(profile.since,"DD/MM/YYYY").fromNow();
      }
      if (profile.born || profile.born !== ""){
        profile.formatedBorn = moment(profile.born,"DD/MM/YYYY").fromNow().replace("hace","");
      }
  $scope.tweet = function(){

  }
  $scope.share = function(){

  }
  $scope.banners = function(){

  }


});
