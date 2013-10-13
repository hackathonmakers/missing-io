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

      var first = $scope.profile.name.split(" ")[0];
      var link = " http://missing-io.herokuapp.com/encontremos/" + $scope.profile.shortName;

      var text = first + " falta de su casa  desde " + profile.formatedSince + ". RT para ayudar a encontrarla "   + "#missingio " +link;

      window.open("https://twitter.com/intent/tweet?original_referer=" + encodeURIComponent(link)+"&source=tweetbutton&text=" + encodeURIComponent(text),
                  "tweet","location=0,status=0,scrollbars=0, width=780,height=560");
  };
  $scope.facebook = function(){
    var link = " http://missing-io.herokuapp.com/encontremos/" + $scope.profile.shortName;
    var href="https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(link);
    window.open(href, "facebook","location=0,status=0,scrollbars=0, width=780,height=560");

  }
  $scope.banners = function(){

  }


});
