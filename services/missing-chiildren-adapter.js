
var http = require("http");


var request = require("request");


exports.getData = function(callback) {

  var mainUrl ="http://www.missingchildren.org.ar/listado.php?categoria=perdidos";
  var result = { success: true};
  request({
    uri: mainUrl
  }, function(error, response, body) {
    console.log(body);
      callback(result);
  });

};