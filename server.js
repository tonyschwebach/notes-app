// require Express module
const express = require('express');

// create a server
const app = express();

// create a port to be used by the listener 
var PORT = process.env.PORT || 8080;

// middleware - set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// port listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

