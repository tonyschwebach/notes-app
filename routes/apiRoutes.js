// require Path module and db.json
const path = require("path");
const db = require("../db/db.json");

// export routes for app parameter passed
module.exports = function (app) {
  // gets notes from db and returns as json
  app.get("/api/notes", function (req, res) {
    res.json(db);
  });

    // saves notes to db 
    app.post("/api/notes", function (req, res) {
      db.push(req.body)
      res.json(db);
    });

};
