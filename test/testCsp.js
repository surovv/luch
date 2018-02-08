var express = require('express');
var app = express();
var csp = require('helmet-csp')

app.use(csp({
  // Specify directives as normal.
  directives: {
    defaultSrc: ["'self'", 'http://localhost:3000'],
    childSrc: ["'self'"],
    scriptSrc: ['http://localhost:3000'],
    styleSrc: ["'unsafe-inline'"], // for time being
    fontSrc: ["'self'"],
    imgSrc: ["'self'", 'data:', "*"], // for time being
    mediaSrc: ["'self'"],
    reportUri: '/api/csp/violation',
    objectSrc: ["'none'"],
    upgradeInsecureRequests: false,
    workerSrc: false  // This is not set.
  },


  // This module will detect common mistakes in your directives and throw errors
  // if it finds any. To disable this, enable "loose mode".
  loose: false,

  // Set to true if you only want browsers to report errors, not block them.
  // You may also set this to a function(req, res) in order to decide dynamically
  // whether to use reportOnly mode, e.g., to allow for a dynamic kill switch.
  reportOnly: false,

  // Set to true if you want to blindly set all headers: Content-Security-Policy,
  // X-WebKit-CSP, and X-Content-Security-Policy.
  setAllHeaders: false,

  // Set to true if you want to disable CSP on Android where it can be buggy.
  disableAndroid: false,

  // Set to false if you want to completely disable any user-agent sniffing.
  // This may make the headers less compatible but it will be much faster.
  // This defaults to `true`.
  browserSniff: true
}))

app.use(express.static(__dirname + '/..'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/test.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
