// get name from service, name is entered in the app
var name = request.get("name");
 
// get and format the time
var now = moment().format("dddd, MMMM D YYYY, h:mm:ss a");
 
// put together the greeting string
var greetingString = "Hello " + name + ". It is " + now;
 
// format as JSON and return the response
response.success(JSON.stringify({
   greeting: greetingString
 }), "application/json");
