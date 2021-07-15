const Blog = require("../models/blog");

const create_blog_post = (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => res.redirect("/"))
    .catch((err) => console.log(err));
};

module.exports = {
  create_blog_post,
};
