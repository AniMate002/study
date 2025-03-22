const os = require("os")
const cluster = require("cluster")

// PLATFORM
// returns OS
console.log("OS platform: " + os.platform());

// ARCH
// returns the architechture
console.log("OS arch: ", os.arch())

// CPUS
// returns the descriptiom of every CPU
console.log("OS number of CPU: ", os.cpus().length)


// Now let's create subtask for every CPU
// and leave 4 CPU untouched
// we can do this by using CLUSTER
// Subtasks are usually called WORKERS
// THIS PROCESS IS CALLED CLUSTERIZATION

if(cluster.isMaster){ // Check if this cluster is MAIN
    for(let i = 0; i < os.cpus.length - 5; i++){
        cluster.fork() // CREATES WORKER (SUBTASK) with its unique process id (pid)
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log("Worker pid=" + worker.process.pid + " was killed;") //if WORKER died we should start another process
        cluster.fork();
    })
}else{
    console.log("Worker id=" + process.pid);
}