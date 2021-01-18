// require Path module and db.json
const path = require("path");
const db = require("../db/db.json");

// require universal unique id to create unique id for each note
const {v4:uuidv4} = require('uuid');


// export routes for app parameter passed
module.exports = function (app) {
  // gets notes from db and returns as json
  app.get("/api/notes", function (req, res) {
    res.json(db);
  });

  // view specific note
  app.get("/api/notes/:id", function (req, res) {
    let chosen = req.params.id;
    console.log(chosen);
    for (let i = 0; i < db.length; i++) {
      if (chosen === db[i].id) {
        return res.json(db[i]);
      }
    }
  });
  // saves notes to db
  app.post("/api/notes", function (req, res) {
    req.body["id"]=uuidv4();
    db.push(req.body);
    res.json(db);
  });
};
