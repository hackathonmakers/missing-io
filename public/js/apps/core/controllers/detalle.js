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
 });
   $scope.tweet = function(){

      var first = $scope.activeProfile.name.split(" ")[0];
      var link = " http://missing-io.herokuapp.com/encontremos/" + $scope.activeProfile.shortName;

      var text = first + " falta de su casa desde " + $scope.activeProfile.formatedSince + ". RT para ayudar a encontrarla "   + "#missingio " +link;

      window.open("https://twitter.com/intent/tweet?original_referer=" + encodeURIComponent(link)+"&source=tweetbutton&text=" + encodeURIComponent(text),
                  "tweet","location=0,status=0,scrollbars=0, width=780,height=560");
  };
  $scope.facebook = function(){
    var link = " http://missing-io.herokuapp.com/encontremos/" + $scope.activeProfile.shortName;
    var href="https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(link);
    window.open(href, "facebook","location=0,status=0,scrollbars=0, width=780,height=560");

  }

});
