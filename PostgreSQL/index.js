const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user.routes.js");
const postRoutes = require("./routes/post.routes.js");

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", postRoutes);

app.listen(PORT, () => {
    console.log("Server is running: http://localhost:" + PORT + "/");
});
