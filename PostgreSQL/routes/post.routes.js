const { Router } = require("express");
const postController = require("../controllers/post.controller.js");

const router = new Router();

router.post("/post", postController.createPost);
router.get("/post", postController.getPosts);

module.exports = router;
