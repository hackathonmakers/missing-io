var request = require('request');
var cheerio = require('cheerio');
fs = require('fs');

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
}
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}