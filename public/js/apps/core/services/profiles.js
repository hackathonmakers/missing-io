'use strict';
var missingio = angular.module('missing-io.services',[]);


missingio.service('profileService', function($http) {
    return {
        getAll: function(callback){
            var url = "/api/v1/activities/all";
            $http.get(url).success(function(data) {
                 callback(data);
            });
        },
        getRandom: function(count, callback){
            var profiles = [];
            for (var i = 0; i < count; i++) {
               var p = {
                 photo: "http://www.missingchildren.org.ar/imagench/leivafedericocarlos2.jpg",
                 name: 'Federico Carlos Leiva ' + i  + i,
                 since: '23 de Octubre de 2006',
                 born: '21 de Junio de 2000',
                 where: 'Gregorio de Laferrere, Buenos Aires',
               }
               profiles.push(p);
            }
            callback(profiles)
        }
    };
});