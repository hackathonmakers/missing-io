
var async = require("async");
var miadapter = require("../../services/missing-chiildren-adapter");
var profileRepository = require("../../services/profile");



exports.random = function(req, res){
  var count = req.params.count ? req.params.count : 10;
  profileRepository.getAll(count,function(data){
      res.json(data);
      res.end();
  });

};
exports.clear = function(req,res){
  profileRepository.clear(function(data){
      res.json(data);
      res.end();
  });

}
exports.all = function(req,res){
  var count = req.params.count ? req.params.count : 10;
  profileRepository.getAll(count,function(data){
      res.json(data);
      res.end();
  });

}

exports.shortname = function(req,res){
  var name = req.params.name ? req.params.name : 10;

 profileRepository.getByShortName(name,function(data){
      res.json(data);
      res.end();
  });

}

