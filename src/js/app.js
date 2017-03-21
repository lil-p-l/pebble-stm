/** Mobile HTTP request: https://m.stm.info/fr/horaires/bus/[route_id]/arrets/[stop_id]/arrivees?limit=[stop times to display]&direction=[North/South/Est/West]
**/

function fetchSchedule(route, stop, display, direction) {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://m.stm.info/fr/horaires/bus/' +
    route + '/arrets/' + stop + '/arrivees?limit=' + display + '&direction=' + direction, true);
 
  request.onload = function () {
   if(request.readyState == request.DONE && request.status == 200) {        
       
       //Return and parse query
        console.log(request.responseText);
        var response = JSON.parse(request.responseText);
        
        var times = response.something   //what's the output? it's an array?
        console.log(times);
     
        Pebble.sendAppMessage({
          'MESSAGE_KEY_SCHEDULE': times //No idea what I'm doing here
        });
      } else {console.log('Error');}
  };
  request.send(null);
}