
var soap = require('soap');
var url = 'http://localhost:8000/wsdl?wsdl';

// Create client
/** create a new SOAP client from a WSDL url. Also supports a local filesystem path. */
soap.createClient(url, function (err, client) {
  if (err){
    throw err;
  }
  /* 
  * Parameters of the service call: they need to be called as specified
  * in the WSDL file
  */
  var userName = "Dhruti Upadhyay";
  // call the service
  client.WelcomeUserFunction(userName, function (err, res) {
    if (err)
      throw err;
      // print the service returned result
    console.log(res); 
  });
});