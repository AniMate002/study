const fs = require("fs");


function timestamp(){
    return performance.now().toFixed(2);
}

console.log("Program start"); // 1 This will be displayed first

setTimeout(() => console.log("Timeout 1:", timestamp()), 0); // 5 After promise we will see first timeout
setTimeout(() => console.log("Timeout 2:", timestamp()), 100); // 8 And in a new loop we will see another timeout

Promise.resolve().then(() => console.log("Promise 1: ", timestamp())); // 4 After nextTick will be Promise callback

fs.writeFile("./loop_test.txt", "Hello world", () => console.log("File written: ", timestamp()));// 7 this write file will be like Close stage, announcing new loop

process.nextTick(() => console.log("Process.NextTick: ", timestamp())); // 3 As third will be nextTicks

setImmediate(() => console.log("Immediate: ", timestamp())) // 6 After the first timeout and before the Close stage we will see setImmediate

console.log("Program end"); // 2 It will be second