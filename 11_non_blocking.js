let isRunning = true;

setTimeout(() => {
    isRunning = false;
}, 10)

const setImmediatePromise = async () => {
    return new Promise((resolve, reject) => {
        // Firstly we use promise and place it inside the while loop
        // Inside the Promise we use setImmediate and call resolve there
        // BUT
        // setTimout has a higher priority than setImmidiate
        // that's why isRunning will get false even before promise will be resolved
        // BUT
        // if we remove setImmediate and just call resolve() nothing will happen and will will stuck in infinite loop again
        setImmediate(() => resolve())
        // resolve()
    })
}

const whileLoop = async() => {
    while(isRunning){
        console.log("While loop is running...");
        await setImmediatePromise();
    }
}

whileLoop().then(() => console.log("While is stopped...") )