// This file should do 2 things
// 1) A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// 2) A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// Dependencies
// =============================================================
var path = require("path");
// Import list of survey entries
var friends = require('../data/friends.js');


// Export API routes
// =============================================================
module.exports = function(app) {

  // Display all entries in friendsArray
  app.get('/api/friends', function(req, res) {
      res.json(friends);
  });

  // Add new survey response to friendsArray
  app.post('/api/friends', function(req,res) {
    //
    var userInput = req.body;

    var userResponses = userInput.scores;


    // Add user
    friends.push(userInput);

  });

 
    
};
  