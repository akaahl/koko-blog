const express = require("express");
const app = express();
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
const Blog = require("./models/blog");
const dotenv = require("dotenv");

// connect to mongodb
dotenv.config();

const dbUsernamePw = process.env.DB_USERNAME_PW;
const dbName = process.env.DB_NAME;

const dbURI = `mongodb+srv://${dbUsernamePw}@cluster0.gjwao.mongodb.net/${dbName}?retryWrites=true&w=majority`;

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

app.get("/", (req, res) => {
  // res.render("home", { title: "Home" });
  Blog.find()
    .then((result) => {
      res.render("home", { title: "Home", blogs: result });
    })
    .catch((err) => console.log(err));
});
app.get("/about", (req, res) => res.render("about", { title: "About" }));

app.get("/details", (req, res) =>
  res.render("blogs/details", { title: "Blog details" })
);

// blog routes
app.use("/", blogRoutes);

// error routes
app.use((req, res) => res.status(404).render("404", { title: "404 Error" }));
