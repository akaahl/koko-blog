const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogControllers");

// blog routes
router.get("/blogs", blogController.blog_home);

router.get("/new-blog", blogController.get_create_blog);

router.post("/", blogController.create_blog_post);

router.get("/:id", blogController.blog_details);

router.delete("/:id", blogController.delete_blog);

module.exports = router;
