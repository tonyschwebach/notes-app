// require Express module
const express = require('express');
const path = require('path');

// create a server
const app = express();

// create a port to be used by the listener 
var PORT = process.env.PORT || 8080;

// middleware - set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));  // set public as root so css and js assets can be applied to html files

// routes for server created assigned to app variable
require("./routes/htmlRoutes")(app);

// port listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

