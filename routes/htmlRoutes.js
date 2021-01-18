// require Path module
const path = require('path');

// export routes for app parameter passed
module.exports = function(app) {

    // go to notes page
    app.get("/notes", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

  // default to index.html homepage
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};