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

app.get("/", (req, res) => res.render("home", { title: "Home" }));
app.get("/about", (req, res) => res.render("about", { title: "About" }));
app.get("/new-blog", (req, res) =>
  res.render("blogs/create", { title: "Create a new blog" })
);

// error routes
app.use((req, res) => res.status(404).render("404", { title: "404 Error" }));
