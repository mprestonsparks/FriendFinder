// This file should do 2 things
// 1) A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
// 2) A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// Dependencies
// =============================================================
var path = require("path");
// Import list of survey entries
var friends = require('../data/friends.js');


// Export API data
// =============================================================
module.exports = function(app) {

  // Display all entries in friendsArray
  app.get('/api/friends', function(req, res) {
      res.json(friends);
  });

  // Add new survey response to friendsArray
  // =============================================================
  app.post('/api/friends', function(req,res) {
    //
    var userInput = req.body;
    

    // Calculate closest score match
    // =============================================================
    var userResponses = userInput.scores.map(Number);
    var matchName = '';
    var matchImage = '';
    // Set initial scoreDifference to maximum possible
    var baseScoreDifference = 50;

    console.log("friends.length",friends.length);
    console.log("userResponses",userResponses);


    // For each person in friendsArray
    for (var i=0; i<friends.length; i++) {
      var scoreDifference = 0;
      // For each question on survey
      for (var j=0; j<userResponses.length; j++) {
        var friendScore = friends[i].score[j];
        var userScore = userResponses[j];
        console.log("friendScore(i)"+friendScore);
        console.log("userScore(J)" + userScore);
        console.log("friendsLength" + friends.length);
        scoreDifference += Math.abs(friendScore - userScore);
        
        };
        console.log("scoreDifference" + scoreDifference);
        // if score difference is lowest in friendsArray, set friend as the match
        if (scoreDifference < baseScoreDifference) {
          baseScoreDifference = scoreDifference;
          matchName = friends[i].name;
          matchImage = friends[i].photo;
        };
        console.log("matchName" + matchName);
    };


    // Push responses to friendsArray
    friends.push(userInput);

    // Send match
    // res.json({matchName: matchName, matchImage: matchImage});
    // console.log("matchName" + matchName);





  });
};
  