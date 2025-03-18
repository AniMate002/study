const http = require("http")
const dotenv = require("dotenv")

dotenv.config()

const PORT = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
    if(req.url === "/") return res.end("MAIN PAGE");
    if(req.url === "/users") return res.end("ALL USERS");
    if(req.url === "/posts") return res.end("ALL POSTS");
    res.end("UNKNOWN ROUTE: " + req.url)
});


server.listen(PORT, () => {
    console.log("SERVER STARTED AT PORT: " + PORT);
    console.log("SERVER: http://localhost:" + PORT + "/")
})