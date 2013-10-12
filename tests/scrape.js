var request = require('request');
var cheerio = require('cheerio');


request('http://www.missingchildren.org.ar/listado.php?categoria=perdidos', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    console.log(html);
    var $ = cheerio.load(html);
    $(".perdidos a").each(function (i,e){
      console.log($(e).attr("href"));
    });
  }
  else {
    console.log(error);
  }
});