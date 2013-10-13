
/*
 * GET home page.
 */
var profileRepository = require("../../services/profile");

var shf = require('../../lib/shuffle.js');

exports.banner140 = function(req, res){
  exports.banners('banner140',req,res);
};

exports.banner468 = function(req,res){
  exports.banners('banner468',req,res);
}

exports.banners = function(banner, req,res){

  console.log("banner140")
  var name = req.params.name ? req.params.name : "";
  if (name !== ""){
    profileRepository.getByShortName(name, function(p){
      res.render(banner, { profile: p, profileJson: JSON.stringify(p)});
    });
  }
  else {
    profileRepository.getAll(100,function(data){
      shf.shuffle(data);
       res.render(banner, { profile: data[0], profileJson: JSON.stringify(data[0])});
    });
  }
}