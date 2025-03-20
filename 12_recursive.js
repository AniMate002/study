

// This implemetation of Fibonacci is very time consuming
// The complexity is O(2^n)
// Moreover this function blocks the Main Thread
function fibonacciNumber(number){
    if(number === 0) return 0;
    if(number === 1) return 1;
    else return fibonacciNumber(number - 1) + fibonacciNumber(number - 2);
}
// 0 1 1 2 3 5 8 13 21
console.log("Fibonacci number at position 6: ", fibonacciNumber(6));


// Lets now make a function that does not block the Main Thread

async function fibonacciNonBlocking(number){
    return new Promise((resolve, reject) => {
        if(number === 0 || number === 1) return resolve(number);
        // Here before diving deeper into recursion
        // every time we check if there is another async function like timeout or interval
        setImmediate(() => {
            Promise.all([fibonacciNonBlocking(number - 1), fibonacciNonBlocking(number - 2)])
                .then(([first, second]) => resolve(first + second));
        });
    })
}

fibonacciNonBlocking(6).then(result => console.log("Fibonacci  number at position 6: ", result));
