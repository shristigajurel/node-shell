const request = require("request");
module.exports=function(curl)
request("https://www.fullstackacademy.com/", function (error, response, body) {
  console.error("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body); // Print the HTML for the Google homepage.
});

request.get('http://mysite.com/doodle.png')
.on('error', function(err) {
  console.error(err)
})
.pipe(fs.createWriteStream('doodle.png'))