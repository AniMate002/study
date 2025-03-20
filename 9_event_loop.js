const fs = require("fs");
const dns = require("dns")


function timestamp(){
    return performance.now().toFixed(2);
}

console.log("Program start"); // 1 This will be displayed first

// Timeouts
setTimeout(() => console.log("Timeout 1:", timestamp()), 0); // 5 After promise we will see first timeout
setTimeout(() => {
    console.log("Timeout 2:", timestamp()); // 8 And in a new loop we will see another timeout
    process.nextTick(() => console.log("Tick 2: ", timestamp())); // 9 This nextTick will be executed in the end
}, 100); 

// Interval
let count = 0;
const intervalId = setInterval(() => {
    console.log("Interval " + count + " " + timestamp());
    if(intervalId >= 3) clearInterval(intervalId);
    ++count;
}, 1)


// Promises
Promise.resolve().then(() => console.log("Promise 1: ", timestamp())); // 4 After nextTick will be Promise callback

// Close
fs.writeFile("./loop_test.txt", "Hello world", () => console.log("File written: ", timestamp()));// 7 this write file will be like Close stage, announcing new loop


// NextTick
process.nextTick(() => console.log("Process.NextTick: ", timestamp())); // 3 As third will be nextTicks

// SetImmediate
setImmediate(() => console.log("Immediate: ", timestamp())) // 6 After the first timeout and before the Close stage we will see setImmediate

// Sending DNS request
dns.lookup("localhost", (err, address, family) => {
    console.log("DNS 1 localhost: ", address, timestamp());
    Promise.resolve().then(() => console.log("Promise 2: ", timestamp()));
})

console.log("Program end"); // 2 It will be second