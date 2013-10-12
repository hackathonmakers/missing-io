
/*
 * GET home page.
 */

var async = require("async");
var miadapter = require("../../services/missing-chiildren-adapter");

exports.missingchildren = function(req, res){

    miadapter.getData(function(result){
      res.json(result);
      res.end();
  });
};

