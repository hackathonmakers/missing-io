var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var async = require('async');

fs.readFile('list.html', 'utf8', dataLoaded);

function dataLoaded(err, data) {
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
  console.log(toretrieve.length);

     async.forEach(toretrieve, function(id, callback) {

var url = 'http://www.missingchildren.org.ar/datos.php?action=view&id=' + id;
console.log(url);
  request(url, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $cherio = cheerio.load(html);
      var photo = "http://www.missingchildren.org.ar/" +  $("table img").first().attr("src");
      var name = $cherio("#table7 td").first().html().replace("<br>&nbsp;",'').trim();
      var since = $cherio($cherio("#table7 tr td")[2]).html().replace("<br>&nbsp;",'').trim();
      var photoYear = $cherio($cherio("#table7 tr td")[5]).html().replace("<br>&nbsp;",'').trim();
      var now = $cherio($cherio("#table7 tr td")[7]).html().replace("<br>&nbsp;",'').trim();
      var born = $cherio($cherio("#table7 tr td")[10]).html().replace("<br>&nbsp;",'').trim();
      var place = $cherio($cherio("#table7 tr td")[13]).html().replace("<br>&nbsp;",'').trim();

      var p = {
        photo: photo,
        name: toTitleCase(name),
        since: since,
        photoYear: photoYear,
        now: now,
        born: born,
        place: place

      };
      console.log(p);
    }
    else {
      console.log(error, id);
    }
   });
  });

}
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}