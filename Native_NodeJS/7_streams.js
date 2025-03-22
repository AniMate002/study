const fs = require("fs")
const path = require("path")


//Steams and Threads are translated as Потоки
// but they are different

// in NodeJS there are 4 types of streams:
// 1) Readable - reading
// 2) Writable - writing
// 3) Duplex - reading and writing
// 4) Transform - the same as Duplex but can transform data during reading

// Firstly we create stream
const stream = fs.createReadStream(path.resolve("text.txt"))

//Then we subscribe this stream on event
// every stream recieves a chunk - piece of data read or written to/from file max 64KB
stream.on("data", (chunk) => {
    console.log("STREAM DATA: ", chunk)
})

stream.on("open", () => console.log("STREAM OPENED"));
stream.on("close", () => console.log("STREAM CLOSED"));
stream.on("error", (error) => console.log("ERROR IN STREAM READER: ", error));