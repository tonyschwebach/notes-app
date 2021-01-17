// require Path module
const path = require('path');

// export routes for app parameter passed
module.exports = function(app) {

  // default to index.html homepage
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};