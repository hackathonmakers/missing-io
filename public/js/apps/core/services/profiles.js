'use strict';
var missingio = angular.module('missing-io.services',[]);


missingio.service('profileService', function($http) {
    return {
        getAll: function(callback){
            var url = "/api/v1/activities/all";
            $http.get(url).success(function(data) {
                 callback(data);
            });
        }
    };
});