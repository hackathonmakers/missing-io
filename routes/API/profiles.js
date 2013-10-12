

exports.random = function(req, res){
  var count = req.params.count ? req.params.count : 10;
  var profiles = [];
            for (var i = 0; i < count; i++) {
               var p = {
                 photo: "http://www.missingchildren.org.ar/imagench/leivafedericocarlos2.jpg",
                 name: 'Federico Carlos Leiva ' + i  + i,
                 since: '23 de Octubre de 2006',
                 born: '21 de Junio de 2000',
                 where: 'Gregorio de Laferrere, Buenos Aires',
               }
               profiles.push(p);
            };
  res.json(profiles);
  res.end();
};