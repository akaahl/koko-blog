const Blog = require("../models/blog");

const blog_home = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("blogs/home", { title: "Home", blogs: result });
    })
    .catch((err) => console.log(err));
};

const get_create_blog = (req, res) => {
  res.render("blogs/create", { title: "Create a new blog" });
};

const create_blog_post = (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => res.redirect("/"))
    .catch((err) => console.log(err));
};

const blog_details = (req, res) => {
  // get the id params from the link
  const id = req.params.id;

  Blog.findById(id)
    .then((result) => {
      res.render("blogs/details", { blog: result, title: "Blog details" });
    })
    .catch((err) => console.log(err));
};

const delete_blog = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  blog_home,
  create_blog_post,
  get_create_blog,
  blog_details,
  delete_blog,
};
