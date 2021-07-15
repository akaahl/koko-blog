const express = require("express");
const app = express();
const mongoose = require("mongoose");

// connect to mongodb
const dbURI =
  "mongodb+srv://useradmin:test12345@cluster0.gjwao.mongodb.net/koko-blog?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(3000);
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

// middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("home"));
app.get("/about", (req, res) => res.render("about"));

app.listen(3000);
