const db = require("../db.js");

class UserController {
    async createUser(req, res) {
        const { name, surname } = req.body;
        const { rows } = await db.query(
            "INSERT INTO person (name, surname) VALUES ($1, $2) RETURNING *;",
            [name, surname]
        );
        console.log("NEW PERSON: ", rows[0]);
        res.status(201).json(rows[0]);
    }
    async getUsers(req, res) {
        const { rows } = await db.query("SELECT * FROM person;");
        return res.status(200).json(rows);
    }
    async getOneUser(req, res) {
        const { id } = req.params;
        const { rows } = await db.query("SELECT * FROM person WHERE id = $1;", [
            id,
        ]);
        return res.status(200).json(rows[0]);
    }
    async updateUser(req, res) {
        const { id } = req.params;
        const { name, surname } = req.body;
        const data = await db.query(
            "UPDATE person SET name = $1, surname = $2 WHERE id = $3;",
            [name, surname, id]
        );

        return res.status(200).json(data);
    }
    async deleteUser(req, res) {
        const { id } = req.params;
        const data = await db.query("DELETE FROM person WHERE id = $1", [id]);
        return res.status(200).json(data);
    }
}

module.exports = new UserController();
