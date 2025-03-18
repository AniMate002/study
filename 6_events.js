const Emitter = require("events");
const dotenv = require("dotenv")
dotenv.config()

const emitter = new Emitter();

// Firstly we create custom event listener
// it recieves name of the custom event and a callback function
// we can specify any amount of arguments in the callback
emitter.on("message", (data, second, third) => {
    console.log("MESSAGE: ", data);
    console.log("SECOND: ", second);
    console.log("THIRD: ", third);
})

const MESSAGE = process.env.MESSAGE || "";

if(MESSAGE){
    emitter.emit("message", MESSAGE, 1234, undefined);
}else{
    emitter.emit("message", "You did not pass the message", 456);
}

// This architecture is quite usefull
// it is commonly used almost everywhere
// and it is called Event-Oriented Model (Событийно-Ориентированная модель)