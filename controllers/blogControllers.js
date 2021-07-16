const Blog = require("../models/blog");

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

module.exports = {
  create_blog_post,
  get_create_blog,
};
