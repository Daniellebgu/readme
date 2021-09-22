// JavaScript source code
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// parse requests of contenttype: application/json
app.use(bodyParser.json());
// parse requests of contenttype: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));
// simple route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Danielle's web example application."
 
    });
});
    // set port, listen for requests
    app.listen(3000, () => {
        console.log("Danielle's Server is running on port 3000."
        );
    });
// new route
app.get('path', function (req, res) {
      res.send('');
  
});
