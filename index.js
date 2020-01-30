"use strict";

var soap = require('soap');
var express = require('express');
var fs = require('fs');

// the splitter function, used by the service
function welcomeUser(userName) {
    var result = 'hello, ' + userName;
    return result;
        
}

// the service
var serviceObject = {
    WelcomeUserService: {
        WelcomeUserServiceSoapPort: {
            WelcomeUserFunction: welcomeUser
        }
    }
};

// load the WSDL file
var xml = fs.readFileSync('service.wsdl', 'utf8');
// create express app
var app = express();

// root handler
app.get('/', function (req, res) {
  res.send('Soap API Example!');
})

// Launch the server and listen
var port = 8000;

app.listen(port, function () {
  console.log('Listening on port ' + port);
  var path = "/wsdl";

  /**  create a new SOAP server that listens on path and provides services. */
  soap.listen(app, path, serviceObject, xml);
  console.log('server initialized');
  console.log("Check http://localhost:" + port + path +"?wsdl to see if the service is working.");
});