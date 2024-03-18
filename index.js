var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'POST',
  'hostname': 'customer-analytics-34146.my.salesforce-sites.com',
  'path': '/services/apexrest/createAccount',
  'headers': {
    'Content-Type': 'application/json',
    'Cookie': 'BrowserId=i1bM5OUGEe6Vz2UbHv7IIw; CookieConsentPolicy=0:1; LSKey-c$CookieConsentPolicy=0:1'
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData = JSON.stringify({
  "name": "G.Hemanth Tigga",
  "email": "g.0479.be21@chitkara.edu.in",
  "rollNumber": 2110990479,
  "phone": 8102459885
});

req.write(postData);

req.end();
