
var async = require("async");
var miadapter = require("../../services/missing-chiildren-adapter");
var profileRepository = require("../../services/profile");
var moment = require("moment");
moment.lang('es');


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

      if (data.since || data.since !== ""){
        data.formatedSince = moment(data.since).fromNow();
      }
      if (data.born || data.born !== ""){
        data.formatedBorn = moment(data.born).fromNow().replace("hace","");
      }
      console.log(data.since, data.born, data);
      res.json(data);
      res.end();
  });

}

