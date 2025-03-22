const Router = require("../Router.js");

const router = new Router();

const users = [{id: 1, name: "Alex"}, {id: 2, name: "Vlad"}]

router.get("/users", (req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json"
    })
    res.end(JSON.stringify(users))
})
router.post("/users", (req, res) => {
    res.end("POST ALL USERS")
})

module.exports = router