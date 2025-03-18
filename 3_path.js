const path = require("path");

// JOIN
// it is better to use path.join() rather than concatanation with "/", becase different OS have different dividers like "/" or "\" or ">"
console.log("JOIN first and second: ", path.join("first", 'second', 'third'))

// __dirname
// __filename
console.log("_dirname: ", __dirname);
console.log("__filename: ", __filename)

// RESOLVE
// path.resolve() always returns the full path + the path you specify with comma
console.log("RESOLVE + first/secod: ", path.resolve("first", "second"))

// PARSING URI
// return and object with such fields as: root, dir, base, etc.
console.log("PARSE: ", path.parse(path.resolve("first", 'second', 'third')))

// SEPARATE
// not a function, contains a separator (divider) in this OS
console.log("SEPARATE: ", path.sep)

// BASENAME & EXTNAME
// basename return a file name
// extname return an extension of the file
console.log("BASE NAME: " + path.basename(__filename) + " EXT NAME: " + path.extname(__filename))




// WORKING WITH WEBSITE URL
const siteURL = "http://localhost:8080/users?id=3232";
const url = new URL(siteURL);
console.log("PARSED WEBSITE URL: ", url);