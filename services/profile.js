var coreMongoose = require("../services/core-mongoose");

var mongoose = coreMongoose.mongoose;

exports.models = {};


//Schema City
var ProfileSchema = mongoose.Schema({
    photo: String,
    founded : Boolean,
    name: String,
    since: String,
    photoYear: String,
    now: String,
    born: String,
    place: String,
    shortName: String
});


var Profile = mongoose.model('Profiles', ProfileSchema);
exports.models.Profile = Profile;


exports.getCount = function(callback){
  var query = Profile.count({}, function(err,c){
    var result = {
      count:c
    };
    callback(result);
  });
};
exports.clear = function(callback){
  exports.models.Profile.remove({}, function(err) {
     console.log('collection removed');
     callback();
  });
};

exports.getAll = function(count, callback){
    var query = Profile.find()
      .where('founded')
      .equals(false)
      .limit(count)
      .exec(function (err, docs){
        if (docs.length  > 0 ) {
              callback(docs);
        }
        else {
            callback([]);
        }
    });
};
exports.getFrom = function(place, callback){
    var query = Profile.find({place:  { $regex: new RegExp(place, "i")}})
      .where('founded')
      .equals(false)
      .exec(function (err, docs){
        if (docs.length  > 0 ) {
              callback(docs);
        }
        else {
            callback([]);
        }
    });
};
exports.getByShortName = function(shortName, callback){
    var query = Profile.findOne({ shortName: shortName }).exec(function (err, doc){
        callback(doc);
    });
};