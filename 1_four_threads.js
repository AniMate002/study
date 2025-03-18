const crypto = require("crypto")

const start = new Date()

crypto.pbkdf2("123tt", '5', 1000000, 64, 'sha512', () => {
    console.log("1 end: ", new Date() - start);
})

crypto.pbkdf2("123tt", '5', 1000000, 64, 'sha512', () => {
    console.log("2 end: ", new Date() - start);
})

crypto.pbkdf2("123tt", '5', 1000000, 64, 'sha512', () => {
    console.log("3 end: ", new Date() - start);
})

crypto.pbkdf2("123tt", '5', 1000000, 64, 'sha512', () => {
    console.log("4 end: ", new Date() - start);
})

crypto.pbkdf2("123tt", '5', 1000000, 64, 'sha512', () => {
    console.log("5 end (waits till one thread is free): ", new Date() - start);
})