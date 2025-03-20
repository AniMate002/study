let isRunning = true;

setTimeout(() => {
    // Even thouh after 2 seconds we change isRunning from true to false, while loop will 
    // not be stopped and will be executed infinitly
    // But in reality we cant even change isRunning to false becase the Main Thread is busy with while loop and it is blocked
    isRunning = false;
}, 2000)

while(true){
    console.log("While loop is running...")
}

console.log("While is stopped...") 