
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
exports.details = function(req, res){
  var p = {
             photo: "http://www.missingchildren.org.ar/imagench/leivafedericocarlos2.jpg",
             name: 'Federico Carlos Leiva ' + i  + i,
             since: '23 de Octubre de 2006',
             born: '21 de Junio de 2000',
             where: 'Gregorio de Laferrere, Buenos Aires',
            };
  res.render('details', { profile: p});
};