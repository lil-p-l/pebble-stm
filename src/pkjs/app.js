/*Using node-csv-parse
Use getLatestFeedVersion for internal ID (date)
Feed ID: societe-de-transport-de-montreal/39
*/

var parse = require('csv-parse');
var request = new XMLHttpRequest();

//ajax server request
request.open("GET", "https://transitfeeds-data.s3-us-west-1.amazonaws.com/public/feeds/societe-de-transport-de-montreal/39/20170317/original/fare_attributes.txt", true);
request.send();

request.onreadystatechange = function() {
  //request finished and response ready, status OK
  if (this.readyState == 4 & this.status == 200) {
    var fare_attributes = JSON.parse(this.responseText);
    console.log(fare_attributes);
  }
};

request = parse({columns: true}, {delimiter: ','}, function(err, data) {
    console.log(data);
}); 
