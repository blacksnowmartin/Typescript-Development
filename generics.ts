// Simple generic function
function identity<T>(arg: T): T {
    return arg;
}

let resultString: string = identity("Hello, Generics!");
let resultNumber: number = identity(42);

console.log(resultString); // Output: Hello, Generics!
console.log(resultNumber); // Output: 42
