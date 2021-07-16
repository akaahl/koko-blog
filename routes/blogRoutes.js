const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogControllers");

// blog routes
router.get("/new-blog", blogController.get_create_blog);

router.post("/", blogController.create_blog_post);

module.exports = router;
