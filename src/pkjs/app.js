/**http://www.stm.info/sites/default/files/gtfs/gtfs_stm.zip
function fetchSchedule(route, stop, display, direction)
**/

//create and connect to database
var mongodb = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/gtfs';

//import GTFS
var gfts = require('gtfs');
var mongoose = require('mongoose');

//JSON object specification
var config = {
  mongoURl: 'mongodb://localhost:27107/gtfs', 
  agencies: [
    {
      agency_key: 'stm',
      url: 'http://www.stm.info/sites/default/files/gtfs/gtfs_stm.zip',
      exclude: ["fare_rules", "fare_attributes", "calendar_dates", "shapes", "frequencies"]
    }
  ]
};

mongoose.Promise = global.Promise; //wtf is mongoose
mongoose.connect(config.mongoUrl);

gtfs.import(config, (err) => {if (err) return console.error(err);
console.log('Import Succesful')});