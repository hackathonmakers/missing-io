
/**
 * Module dependencies.
 */

var express = require('express')
  , controllers = require('./routes/controllers/index.js')
  , banners = require('./routes/controllers/banners.js')

  , profiles = require('./routes/API/profiles.js')
  , adapters = require('./routes/API/adapters.js')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//routes
app.get('/', controllers.index);
app.get('/encontremos/:name', controllers.details);

app.get('/apps/banners/140/:name?', banners.banner140);
app.get('/apps/banners/468/:name?', banners.banner468);


//API
app.post('/api/v1/fetch/missingchildren', adapters.missingchildren);

app.get('/api/v1/profiles/random/:count?', profiles.random);
app.get('/api/v1/profiles/all/:count?', profiles.all);
app.get('/api/v1/profiles/shortName/:name?', profiles.shortname);
app.post('/api/v1/profiles/clear', profiles.clear);
app.get('/api/v1/profiles/count', profiles.count);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
