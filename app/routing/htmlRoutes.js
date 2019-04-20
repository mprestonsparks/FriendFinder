// Displays all characters
app.get("/public/survey.html", function(req, res) {
    return res.json(survey);
  });
  