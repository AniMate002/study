const { error } = require("console");
const fs = require("fs")
const path = require("path")


// // CREATE FOLDER
// fs.mkdir(path.resolve('dir1', 'dir2', 'dir3',),{recursive: true}, (error) => {
//     if(error) return console.log("Error in creating folders: ", error);
//     console.log("Folders created successfully")
// })

// // DELETE FOLDER
// fs.rmdir(path.resolve("dir1"),{recursive: true}, (error) => {
//     if(error) return console.log("Error in deleting folders: ", error);
//     console.log("Folders deleted successfully")
// })

// // WRITE FILE
// fs.writeFile(path.resolve("test.txt"), 'data to place in file', (error) => {
//     if(error) return console.log("Error in writing file: ", error);
//     console.log("File written successfully")
// })

// // APPEND FILE
// fs.appendFile(path.resolve("test.txt"), '\nappended data', (error) => {
//     if(error) return console.log("Error in appending file: ", error);
//     console.log("File appended successfully")
// })

// WRITE AND APPEND USING PROMISES
const writeFileAsync = async() => {
    return new Promise((res, rej) => {
        fs.writeFile(path.resolve("test.txt"), "some text to write", (error) => {
            if(error) return rej(error);
            res("File written successfully")
        })
    })
}

const appendFileAsync = async() => {
    return new Promise((res, rej) => {
        fs.appendFile(path.resolve("test.txt"), "\nappended text", (error) => {
            if(error) return rej(error);
            res("File appended successfully")
        })
    })
}


// READ FILE
const readFileAsync = async(path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, {encoding: "utf-8"}, (error, data) => {
            if(error) return reject(error);
            resolve(data);
        })
    })
}

// REMOVE FILE
const removeFileAsync = async(filePath) => {
    return new Promise((resolve, reject) => {
        fs.rm(filePath, (error) => {
            if(error) return reject(error);
            resolve("File " + path.parse(filePath).base + " deleted successfully")
        })
    })
}



// APPLY ALL METHODS BASED ON PROMISES
writeFileAsync().then(data => {
    console.log(data);
    return appendFileAsync()
})
.then(data => {
    console.log(data)
    return readFileAsync(path.resolve("test.txt"))
})
.then(data => {
    console.log("READ DATA:\n", data)
    return removeFileAsync(path.resolve("test.txt"))
})
.then(data => console.log(data))
.catch(error => console.log(error))