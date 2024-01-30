// Interface definition
interface Person {
    firstName: string;
    lastName: string;
    age?: number; // Optional property
}

// Object with interface
let person: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
};

console.log(person); // Output: { firstName: 'John', lastName: 'Doe', age: 25 }
