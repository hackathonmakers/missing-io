var request = require('request');
var cheerio = require('cheerio');
fs = require('fs');

fs.readFile('perfil.html', 'utf8', dataLoaded);

function dataLoaded(err, data) {
  var $ = cheerio.load(data);
  var photo = "http://www.missingchildren.org.ar/" +  $("table img").first().attr("src");
  var name = $("#table7 td").first().html().replace("<br>&nbsp;",'').trim();
  var since = $($("#table7 tr td")[2]).html().replace("<br>&nbsp;",'').trim();
  var photoYear = $($("#table7 tr td")[5]).html().replace("<br>&nbsp;",'').trim();
  var now = $($("#table7 tr td")[7]).html().replace("<br>&nbsp;",'').trim();
  var born = $($("#table7 tr td")[10]).html().replace("<br>&nbsp;",'').trim();
  var place = $($("#table7 tr td")[13]).html().replace("<br>&nbsp;",'').trim();

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
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}