const dotenv = require("dotenv")

dotenv.config()

// PROCESS OBJECT
console.log("Process id: ", process.pid)

// ENVIRONMENTAL VARIABLES
console.log("Environmantal variables: PORT="+ process.env.PORT+ "; MODE="+ process.env.MODE)

// ARGUMENTS
// This arguments are values that pass when execute node command: node process_object.js test smth another text
// so every word after the name of the file will be included in the array of ARGUMENTS as string
console.log("ARGUMENTS: ", process.argv)

// EXIT PROGRAMM
// Programm can be stopped at any point by typing process.exit();