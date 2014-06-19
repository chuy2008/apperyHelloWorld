
var name = request.get("name");
 

var now = moment().format("dddd, MMMM D YYYY, h:mm:ss a");
 

var greetingString = "Hello " + name + ". It is " + now;
 

response.success(JSON.stringify({
   greeting: greetingString
 }), "application/json");
