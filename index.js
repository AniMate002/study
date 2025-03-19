const dotenv = require("dotenv")
const Router = require("./8_framework/Router.js")
const Application = require("./8_framework/Application.js")
const userRouter = require("./8_framework/src/users-router.js")

dotenv.config()


const PORT = process.env.PORT || 5001;

const application = new Application()

application.addRouter(userRouter);


application.listen(PORT, () => {
    console.log("SERVER STARTED AT PORT: " + PORT);
    console.log("SERVER: http://localhost:" + PORT + "/")
})