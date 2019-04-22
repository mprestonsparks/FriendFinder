// This file should do 2 things:
// 1) A GET Route to `/survey` which should display the survey page.
// 2) A default, catch-all route that leads to `home.html` which displays the home page.




// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Displays survey.html page
// =============================================================
app.get("/public/survey.html", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"))
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
  
  
