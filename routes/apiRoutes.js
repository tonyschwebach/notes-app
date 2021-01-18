// require Path module and db.json
const path = require("path");
const fs = require("fs");

// require universal unique id to create unique id for each note
const { v4: uuidv4 } = require("uuid");
const { debugPort } = require("process");
const { json } = require("express");

// export routes for app parameter passed
module.exports = function (app) {
  // const db = require("../db/db.json");
  const dbPath = path.join(__dirname, "../db/db.json");

  // gets notes from db and returns as json
  app.get("/api/notes", function (req, res) {
    // res.json(db); // response is db variable

    // response is db.json file
    fs.readFile(dbPath, "utf8", (err, data) => {
      if (err) throw err;
      return res.json(JSON.parse(data));
    });
  });

  // view specific note
  app.get("/api/notes/:id", function (req, res) {
    let chosen = req.params.id;
    // // response is db variable
    // for (let i = 0; i < db.length; i++) {
    //   if (chosen === db[i].id) {
    //     return res.json(db[i]); // response is indexed object of db variable
    //    }
    // }

    // response is db.json file index object
    fs.readFile(dbPath, "utf8", (err, data) => {
      if (err) throw err;
      data = JSON.parse(data);
      for (let i = 0; i < data.length; i++) {
        if (chosen === data[i].id) {
          return res.json(data[i]);
        }
      }
    });
  });

  // saves notes to db
  app.post("/api/notes", function (req, res) {
    req.body["id"] = uuidv4();
    // db.push(req.body); // pushes to db variable
    // res.json(db); // pushes to db variable

    // response is db.json file index object
    fs.readFile(dbPath, "utf8", (err, data) => {
      if (err) throw err;
      data = JSON.parse(data);
      data.push(req.body);
      fs.writeFile(dbPath, JSON.stringify(data), (err) => {
        if (err) throw err;
        res.json(data);
      });
    });
  });

  // delete specific note
  app.delete("/api/notes/:id", function (req, res) {
    let chosen = req.params.id;
    // // using db variable
    // for (let i = 0; i < db.length; i++) {
    //   if (chosen === db[i].id) {
    //     db.splice([i], 1);
    //     return res.json(true);
    //   }
    // }

    // read db.json, splice out deleted object note, write over with new db.json
    fs.readFile(dbPath, "utf8", (err, data) => {
      if (err) throw err;
      data = JSON.parse(data);
      for (let i = 0; i < data.length; i++) {
        if (chosen === data[i].id) {
          data.splice([i], 1);
          fs.writeFile(dbPath, JSON.stringify(data), (err) => {
            if (err) throw err;
          });

          return res.json(true);
        }
      }
    });
  });
};
