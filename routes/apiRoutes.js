// require Path module and db.json
const path = require("path");
const db = require("../db/db.json");

// export routes for app parameter passed
module.exports = function (app) {
  // gets notes from db and returns as json
  app.get("/api/notes", function (req, res) {
    res.json(db);
  });


};
