
/**
 * Module dependencies.
 */

var express = require('express')
  , controllers = require('./routes/controllers/index.js')
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


//API
app.post('/api/v1/fetch/missingchildren', adapters.missingchildren);

app.get('/api/v1/profiles/random/:count?', profiles.random);
app.get('/api/v1/profiles/all/:count?', profiles.all);
app.get('/api/v1/profiles/shortName/:name?', profiles.shortname);
app.post('/api/v1/profiles/clear', profiles.clear);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
