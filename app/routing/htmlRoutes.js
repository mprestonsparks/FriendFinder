// This file should do 2 things:
// 1) A GET Route to `/survey` which should display the survey page.
// 2) A default, catch-all route that leads to `home.html` which displays the home page.

// Dependencies
// =============================================================
var path = require("path");


// Export HTML routes
// =============================================================
module.exports = function(app) {

  // Basic route that sends the user to the home page
  // =============================================================
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
  // Displays survey.html page
  // =============================================================
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"))
  });
    
};