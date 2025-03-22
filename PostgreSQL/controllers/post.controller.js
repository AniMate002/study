const db = require("../db.js");

class PostController {
    async createPost(req, res) {
        const { title, content, user_id } = req.body;
        const { rows } = await db.query(
            "INSERT INTO post (title, content, user_id) VALUES ($1, $2, $3) RETURNING *;",
            [title, content, user_id]
        );
        return res.status(201).json(rows[0]);
    }
    async getPosts(req, res) {
        const { rows } = await db.query("SELECT * FROM post;");
        return res.status(200).json(rows);
    }
}

module.exports = new PostController();
