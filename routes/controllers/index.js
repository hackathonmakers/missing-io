
/*
 * GET home page.
 */
var profileRepository = require("../../services/profile");

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
exports.details = function(req, res){

  var name = req.params.name ? req.params.name : 10;
  profileRepository.getByShortName(name, function(p){
      res.render('detalle', { profile: p, profileJson: JSON.stringify(p)});
  });

};