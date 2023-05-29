require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.static(__dirname + "/public"));

// Set the view engine to ejs
app.set("view engine", "ejs");

// Index page
app.get("/", function (req, res) {
  res.render("pages/index");
});

// About page
app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
