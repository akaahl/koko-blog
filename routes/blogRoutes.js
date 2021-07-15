const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogControllers");

// blog routes

router.post("/", blogController.create_blog_post);

module.exports = router;
