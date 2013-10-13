
var http = require("http");
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var async = require('async');
var profileRepository = require("../services/profile");
var moment = require("moment");
moment.lang('es');
var request = require("request");


exports.getData = function(callback) {

  var mainUrl ="http://www.missingchildren.org.ar/listado.php?categoria=perdidos";
  var result = { success: true};
  request({
    uri: mainUrl
  }, function(error, response, data) {
    var $ = cheerio.load(data);
    var p = $(".perdidos td.perdidos");
  var toretrieve = [];
  for (var i = 0; i < p.length ; i= i + 2) {
    var founded = $(p[i+1]).text().trim().indexOf("ENCONTRADA") > 0;
    if (founded){
      //TODO: update DB
    }
    else {
      var id = $($($(p[i]).html())[0]).attr("href").split("=").reverse()[0];
      toretrieve.push(id);
    }

  };

var profiles = [];
  async.forEach(toretrieve, function(id, cb) {
    var url = 'http://www.missingchildren.org.ar/datos.php?action=view&id=' + id;
    console.log(url);
      request(url, function (error, response, html) {
        if (!error && response.statusCode == 200) {
          try{
            var $cherio = cheerio.load(html);

            var photo = "http://www.missingchildren.org.ar/" + $cherio("#table5 img").first().attr("src");

            var name = $cherio("#table7 td").first().html().replace("<br>&nbsp;",'').trim();

            var founded =  name.indexOf("ENCONTRADA") > 0 ||  name.indexOf("ENCONTRADO") > 0;

            name = name.replace("FUE ENCONTRADA","");
            name = name.replace("FUE ENCONTRADO","");

            var since = $cherio($cherio("#table7 tr td")[2]).html().replace("<br>&nbsp;",'').trim();
            var sinceDate = moment(since.replace("de",'').replace("de",'').trim()).calendar();
            if (sinceDate.indexOf("date") === -1){
              since = sinceDate;
            }
            var born = $cherio($cherio("#table7 tr td")[10]).html().replace("<br>&nbsp;",'').trim();
            bornDate = moment(born.replace("de",'').replace("de",'').trim()).calendar();
            if (bornDate.indexOf("date") === -1){
              born = bornDate;
            }
            var photoYear = $cherio($cherio("#table7 tr td")[5]).html().replace("<br>&nbsp;",'').trim();
            var pyInt = parseInt(photoYear);
            if (pyInt !== NaN){
              photoYear = pyInt;
            }
            var now = $cherio($cherio("#table7 tr td")[7]).html().replace("<br>&nbsp;",'').trim();
            var nowInt = parseInt(now);
            if (nowInt !== NaN){
              now = nowInt;
            }
            var place = $cherio($cherio("#table7 tr td")[13]).html().replace("<br>&nbsp;",'').trim();

            var shortName = name.toLowerCase()
              .replace(" ", "-")
              .replace(" ", "")
              .replace(" ", "")
              .trim();
            var p = new profileRepository.models.Profile({
              photo: photo,
              founded : founded,
              name: toTitleCase(name),
              since: since,
              photoYear: photoYear,
              now: now,
              born: born,
              place: place,
              shortName: shortName
            });
            p.save(function (err) {
                          if (err) {
                             console.log(err);

                          }
                          else {
                              console.log("OK");
                              console.log(p);
                              profiles.push(p);
                          }
                      });

          }
          //TODO: HORRIBLE
          catch(e){ console.log("ERROR", e, id);}
          callback(profiles);
          cb();

        }
        else {
          console.log(error, id);
          cb();
        }
       });
      });

    });

}


function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}