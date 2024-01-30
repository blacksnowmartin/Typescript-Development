// Class definition
class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log("Generic animal sound");
    }
}

// Inheriting from a class
class Dog extends Animal {
    bark(): void {
        console.log("Woof, woof!");
    }

    // Overriding a method
    makeSound(): void {
        console.log("Bark, bark!");
    }
}

const myDog = new Dog("Buddy");
myDog.makeSound(); // Output: Bark, bark!
myDog.bark();      // Output: Woof, woof!
